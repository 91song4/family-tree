import { Injectable } from '@nestjs/common';
import { OriginClanRepository } from './origin-clan.repository';
import { OriginClan } from './origin-clan.entity';

@Injectable()
export class OriginClanService {
  constructor(private readonly originClanRepository: OriginClanRepository) {}

  async getOriginByFamilyName(familyNameId: number): Promise<OriginClan[]> {
    return await this.originClanRepository.getOriginByFamilyName(familyNameId);
  }

  async getClanByOriginId(originId: number): Promise<OriginClan[]> {
    return this.originClanRepository.getClanByOriginId(originId);
  }
}
