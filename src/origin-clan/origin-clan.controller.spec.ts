import { Test, TestingModule } from '@nestjs/testing';
import { OriginClanController } from './origin-clan.controller';

describe('OriginClanController', () => {
  let controller: OriginClanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OriginClanController],
    }).compile();

    controller = module.get<OriginClanController>(OriginClanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
