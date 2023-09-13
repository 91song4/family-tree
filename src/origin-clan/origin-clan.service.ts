import { Injectable } from '@nestjs/common';
import { OriginClanRepository } from './origin-clan.repository';

@Injectable()
export class OriginClanService {
  constructor(private readonly originClanRepository: OriginClanRepository) {}
}
