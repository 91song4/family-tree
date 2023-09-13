import { Controller } from '@nestjs/common';
import { FamilyNameService } from './family-name.service';

@Controller('family-name')
export class FamilyNameController {
  constructor(private readonly familyNameService: FamilyNameService) {}
}
