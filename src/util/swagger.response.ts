import { NotFoundException } from '@nestjs/common';

export type TSwaggerCustomResponse = {
  status: number;
  description: string;
};

export const memberNotFound: TSwaggerCustomResponse = {
  status: 404,
  description: '아이디가 존재하지 않을 경우',
};

export const isNotNumber: TSwaggerCustomResponse = {
  status: 400,
  description: '파라미터가 number가 아닌 경우',
};
