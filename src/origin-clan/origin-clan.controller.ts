import { Controller, Get, Param } from '@nestjs/common';
import { OriginClanService } from './origin-clan.service';
import { ApiTags } from '@nestjs/swagger';
import { OriginClan } from './origin-clan.entity';
import {
  GetClanParamsDTO,
  GetOriginParamsDTO,
} from './dto/origin-clan-params.dto';

@ApiTags('origin-clan')
@Controller('origin-clan')
export class OriginClanController {
  constructor(private readonly originClanService: OriginClanService) {}

  /**
   * 같은 성씨를 사용하는 본관 리스트 가져오기
   */
  @Get(':familyNameId/origin')
  async getOriginByFamilyName(
    @Param() { familyNameId }: GetOriginParamsDTO,
  ): Promise<OriginClan[]> {
    return await this.originClanService.getOriginByFamilyName(familyNameId);
  }

  /**
   * 같은 본관을 둔 파 리스트 가져오기
   */
  @Get(':familyNameId/clan')
  async getClanByOriginId(
    @Param() { familyNameId }: GetClanParamsDTO,
  ): Promise<OriginClan[]> {
    return await this.originClanService.getClanByOriginId(familyNameId);
  }
}
