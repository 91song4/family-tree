import { Injectable } from '@nestjs/common';
import { FamilyNameRepository } from './family-name.repository';

@Injectable()
export class FamilyNameService {
  constructor(private readonly familyNameRepository: FamilyNameRepository) {}
}
