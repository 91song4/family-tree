import { Module } from '@nestjs/common';
import { FamilyMemberController } from './family-member.controller';
import { FamilyMemberService } from './family-member.service';
import { FamilyMemberRepository } from './family-member.repository';

@Module({
  controllers: [FamilyMemberController],
  providers: [FamilyMemberService, FamilyMemberRepository],
})
export class FamilyMemberModule {}
