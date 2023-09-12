import { Module } from '@nestjs/common';
import { OriginClanController } from './origin-clan.controller';
import { OriginClanService } from './origin-clan.service';

@Module({
  controllers: [OriginClanController],
  providers: [OriginClanService]
})
export class OriginClanModule {}
