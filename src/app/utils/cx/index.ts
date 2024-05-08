import clsx from 'clsx';
import { PREFIX } from '@/app/config';

export type ClassRecord = Record<string, any>;
export type ClassValue = ClassArray | ClassRecord | string | number | null | boolean | undefined;
export type ClassArray = ClassValue[];

export function parse(input: string): string {
  return [PREFIX, input].join('-');
}

export function cx(...inputs: ClassValue[]): string {
  const payload = clsx(...inputs);
  const cxData = payload.split(' ').map(parse);
  return cxData.join(' ').trim();
}

export function cxs(...inputs: ClassValue[]) {
  return ['.', cx(inputs)].join('');
}
