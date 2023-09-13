import { Controller, Get, Param } from '@nestjs/common';
import { FamilyMemberService } from './family-member.service';
import { ApiTags } from '@nestjs/swagger';
import { MemberParamsDTO } from './dto/member-params.dto';
import { isNotNumber, memberNotFound } from 'src/util/swagger.response';
import { SwaggerErrorStatus } from 'src/util/swagger.decorator';

@ApiTags('family-member')
@Controller('family-member')
export class FamilyMemberController {
  constructor(private readonly familyMemberService: FamilyMemberService) {}

  /**
   * 멤버아이디 기준 아래로 족보 가져오기
   */
  @Get(':familyMemberId')
  @SwaggerErrorStatus([memberNotFound, isNotNumber])
  async getFamilyTreeById(@Param() { familyMemberId }: MemberParamsDTO) {
    return await this.familyMemberService.getFamilyTreeById(familyMemberId);
  }
}
