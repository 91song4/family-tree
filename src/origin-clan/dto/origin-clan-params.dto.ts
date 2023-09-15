import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class GetOriginParamsDTO {
  /**
   * 성씨 아이디
   * @example 1
   */
  @IsNumber()
  @Type(() => Number)
  familyNameId: number;
}

export class GetClanParamsDTO {
  /**
   * 본관 아이디
   * @example 1
   */
  @IsNumber()
  @Type(() => Number)
  familyNameId: number;
}
