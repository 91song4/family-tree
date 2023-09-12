import { Test, TestingModule } from '@nestjs/testing';
import { FamilyNameController } from './family-name.controller';

describe('FamilyNameController', () => {
  let controller: FamilyNameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FamilyNameController],
    }).compile();

    controller = module.get<FamilyNameController>(FamilyNameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
