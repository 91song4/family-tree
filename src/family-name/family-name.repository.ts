import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { FamilyName } from './family-name.entity';

@Injectable()
export class FamilyNameRepository extends Repository<FamilyName> {
  constructor(private readonly dataSource: DataSource) {
    super(FamilyName, dataSource.createEntityManager());
  }

  async getAllFamilyNames(): Promise<FamilyName[]> {
    try {
      return await this.find();
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
