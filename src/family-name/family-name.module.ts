import { Module } from '@nestjs/common';
import { FamilyNameService } from './family-name.service';
import { FamilyNameController } from './family-name.controller';

@Module({
  controllers: [FamilyNameController],
  providers: [FamilyNameService],
})
export class FamilyNameModule {}
