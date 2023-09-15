import { Controller, Get, Param } from '@nestjs/common';
import { FamilyMemberService } from './family-member.service';
import { ApiTags } from '@nestjs/swagger';
import {
  GetOriginMembersParamsDTO,
  MemberParamsDTO,
} from './dto/member-params.dto';
import { isNotNumber, memberNotFound } from 'src/util/swagger.response';
import { SwaggerErrorStatus } from 'src/util/swagger.decorator';
import { FamilyMember } from './family-member.entity';

@ApiTags('family-member')
@Controller('family-member')
export class FamilyMemberController {
  constructor(private readonly familyMemberService: FamilyMemberService) {}

  /**
   * 멤버아이디 기준 아래로 족보 가져오기
   */
  @Get(':id')
  @SwaggerErrorStatus([memberNotFound, isNotNumber])
  async getFamilyTreeById(
    @Param() { id: familyMemberId }: MemberParamsDTO,
  ): Promise<FamilyMember[]> {
    return await this.familyMemberService.getFamilyTreeById(familyMemberId);
  }

  /**
   * 파에 속한 전 인원 불러오기
   */
  @SwaggerErrorStatus([memberNotFound, isNotNumber])
  @Get('/clan/:id')
  async getClanTreeById(@Param() { id: clanId }: GetOriginMembersParamsDTO) {
    return await this.familyMemberService.getClanTreeById(clanId);
  }
}
