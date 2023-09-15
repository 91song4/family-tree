import { Injectable } from '@nestjs/common';
import { OriginClan } from './origin-clan.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class OriginClanRepository extends Repository<OriginClan> {
  constructor(private readonly dataSource: DataSource) {
    super(OriginClan, dataSource.createEntityManager());
  }

  async getOriginByFamilyName(familyNameId: number): Promise<OriginClan[]> {
    return await this.find({
      where: { familyNameId, manageOriginClanId: 0 },
    });
  }

  async getClanByOriginId(originId: number): Promise<OriginClan[]> {
    return await this.find({
      where: { manageOriginClanId: originId },
    });
  }
}
