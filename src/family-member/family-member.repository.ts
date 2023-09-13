import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { FamilyMember } from './family-member.entity';

@Injectable()
export class FamilyMemberRepository extends Repository<FamilyMember> {
  constructor(private readonly dataSource: DataSource) {
    super(FamilyMember, dataSource.createEntityManager());
  }
}
