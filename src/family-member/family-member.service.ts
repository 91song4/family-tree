import { Injectable } from '@nestjs/common';
import { FamilyMemberRepository } from './family-member.repository';

@Injectable()
export class FamilyMemberService {
  constructor(
    private readonly familyMemberRepository: FamilyMemberRepository,
  ) {}
}
