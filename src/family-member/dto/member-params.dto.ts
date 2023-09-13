import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class MemberParamsDTO {
  /**
   * 멤버아이디
   * @example 1
   */
  @IsNumber()
  @Type(() => Number)
  familyMemberId: number;
}
