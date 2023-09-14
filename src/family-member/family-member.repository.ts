import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { FamilyMember } from './family-member.entity';

@Injectable()
export class FamilyMemberRepository extends Repository<FamilyMember> {
  constructor(private readonly dataSource: DataSource) {
    super(FamilyMember, dataSource.createEntityManager());
  }

  async getFamilyTreeById(familyMemberId: number): Promise<FamilyMember[]> {
    const [result] = await this.query(`call GetFamilyTree(${familyMemberId});`);

    return result;
  }

  async getClanTreeById(clanId: number): Promise<FamilyMember[]> {
    return await this.find({
      where: {
        originClanId: clanId,
      },
    });
  }
}
