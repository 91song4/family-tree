import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class MemberParamsDTO {
  /**
   * 멤버 아이디
   * @example 1
   */
  @IsNumber()
  @Type(() => Number)
  id: number;
}
export class GetOriginMembersParamsDTO {
  /**
   * 오리진 아이디
   * @example 1
   */
  @IsNumber()
  @Type(() => Number)
  id: number;
}
