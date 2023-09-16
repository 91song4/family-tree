import { Injectable } from '@nestjs/common';
import { OriginClan } from './origin-clan.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class OriginClanRepository extends Repository<OriginClan> {
  constructor(private readonly dataSource: DataSource) {
    super(OriginClan, dataSource.createEntityManager());
  }

  async getOriginByFamilyName(familyNameId: number): Promise<OriginClan[]> {
    try {
      return await this.find({
        where: { familyNameId, manageOriginClanId: 0 },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async getClanByOriginId(familyNameId: number): Promise<OriginClan[]> {
    try {
      return await this.find({
        where: { familyNameId },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
