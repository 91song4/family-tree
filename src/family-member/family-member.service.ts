import { Injectable, NotFoundException } from '@nestjs/common';
import { FamilyMemberRepository } from './family-member.repository';
import { FamilyMember } from './family-member.entity';

@Injectable()
export class FamilyMemberService {
  constructor(
    private readonly familyMemberRepository: FamilyMemberRepository,
  ) {}

  async getFamilyTreeById(familyMemberId: number): Promise<FamilyMember[]> {
    const familyTree = await this.familyMemberRepository.getFamilyTreeById(
      familyMemberId,
    );

    if (familyTree.length === 0) {
      throw new NotFoundException(
        `멤버 아이디 ${familyMemberId}를 찾을 수 없습니다.`,
      );
    }

    return familyTree;
  }

  async getClanTreeById(clanId: number): Promise<FamilyMember[]> {
    return this.familyMemberRepository.getClanTreeById(clanId);
  }
}
