import { Controller, Get } from '@nestjs/common';
import { FamilyMemberService } from './family-member.service';

@Controller('family-member')
export class FamilyMemberController {
  constructor(private readonly familyMemberService: FamilyMemberService) {}
}
