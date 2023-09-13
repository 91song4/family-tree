import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { TSwaggerCustomResponse } from './swagger.response';

export function SwaggerErrorStatus(errorStatus: TSwaggerCustomResponse[]) {
  const apis = errorStatus.map((item) => ApiResponse(item));
  return applyDecorators(...apis);
}
