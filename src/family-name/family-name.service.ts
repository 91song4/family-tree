import { Injectable } from '@nestjs/common';
import { FamilyNameRepository } from './family-name.repository';
import { FamilyName } from './family-name.entity';

@Injectable()
export class FamilyNameService {
  constructor(private readonly familyNameRepository: FamilyNameRepository) {}

  async getAllFamilyNames(): Promise<FamilyName[]> {
    return await this.familyNameRepository.getAllFamilyNames();
  }
}
