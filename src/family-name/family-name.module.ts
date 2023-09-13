import { Module } from '@nestjs/common';
import { FamilyNameService } from './family-name.service';
import { FamilyNameController } from './family-name.controller';
import { FamilyNameRepository } from './family-name.repository';

@Module({
  controllers: [FamilyNameController],
  providers: [FamilyNameService, FamilyNameRepository],
})
export class FamilyNameModule {}
