import { Test, TestingModule } from '@nestjs/testing';
import { FamilyMemberController } from './family-member.controller';
import { FamilyMemberService } from './family-member.service';

describe('FamilyMemberController', () => {
  let familyMemberController: FamilyMemberController;

  let familyMemberService = {
    getFamilyTreeById: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FamilyMemberController],
      providers: [FamilyMemberService],
    })
      .overrideProvider(FamilyMemberService)
      .useValue(familyMemberService)
      .compile();

    familyMemberController = module.get<FamilyMemberController>(
      FamilyMemberController,
    );
  });

  describe('멤버아이디 기준 족보 가져오기', () => {
    // GIVEN
    // WHEN
    // THEN
    expect(1 + 1);
  });
});
