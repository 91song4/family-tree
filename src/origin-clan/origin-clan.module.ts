import { Module } from '@nestjs/common';
import { OriginClanController } from './origin-clan.controller';
import { OriginClanService } from './origin-clan.service';
import { OriginClanRepository } from './origin-clan.repository';

@Module({
  controllers: [OriginClanController],
  providers: [OriginClanService, OriginClanRepository],
})
export class OriginClanModule {}
