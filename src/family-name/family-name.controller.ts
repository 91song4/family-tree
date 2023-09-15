import { Controller, Get } from '@nestjs/common';
import { FamilyNameService } from './family-name.service';
import { FamilyName } from './family-name.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('family-name')
@Controller('family-name')
export class FamilyNameController {
  constructor(private readonly familyNameService: FamilyNameService) {}

  /**
   * 모든 성씨 가져오기
   */
  @Get()
  async getAllFamilyNames(): Promise<FamilyName[]> {
    return await this.familyNameService.getAllFamilyNames();
  }
}
