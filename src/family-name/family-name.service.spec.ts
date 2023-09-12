import { Test, TestingModule } from '@nestjs/testing';
import { FamilyNameService } from './family-name.service';

describe('FamilyNameService', () => {
  let service: FamilyNameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FamilyNameService],
    }).compile();

    service = module.get<FamilyNameService>(FamilyNameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
