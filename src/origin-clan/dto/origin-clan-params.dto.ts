import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class OriginClanParamsDTO {
  /**
   * 성씨아이디
   * @example 1
   */
  @IsNumber()
  @Type(() => Number)
  familyNameId: number;
}
