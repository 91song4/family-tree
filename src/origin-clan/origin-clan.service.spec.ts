import { Test, TestingModule } from '@nestjs/testing';
import { OriginClanService } from './origin-clan.service';

describe('OriginClanService', () => {
  let service: OriginClanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OriginClanService],
    }).compile();

    service = module.get<OriginClanService>(OriginClanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
