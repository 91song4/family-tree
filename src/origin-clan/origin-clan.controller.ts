import { Controller, Get, Param } from '@nestjs/common';
import { OriginClanService } from './origin-clan.service';
import { ApiTags } from '@nestjs/swagger';
import { OriginClan } from './origin-clan.entity';
import { OriginClanParamsDTO } from './dto/origin-clan-params.dto';

@ApiTags('origin-clan')
@Controller('origin-clan')
export class OriginClanController {
  constructor(private readonly originClanService: OriginClanService) {}

  /**
   * 같은 성씨를 사용하는 본관 리스트 가져오기
   */
  @Get(':familyNameId')
  async getOriginClanByFamilyName(
    @Param() { familyNameId }: OriginClanParamsDTO,
  ): Promise<OriginClan[]> {
    return await this.originClanService.getOriginClanByFamilyName(familyNameId);
  }
}
