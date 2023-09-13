import { Controller } from '@nestjs/common';
import { OriginClanService } from './origin-clan.service';

@Controller('origin-clan')
export class OriginClanController {
  constructor(private readonly originClanService: OriginClanService) {}
}
