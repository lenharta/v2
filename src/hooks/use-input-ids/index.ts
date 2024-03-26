import * as React from 'react';
import { generateRandomId } from '@/utils';

export function useInputIds<T extends string = string>(id?: string, keys?: T[]): Record<T, string> {
  const uid = React.useId();
  const rid = generateRandomId(16);
  const baseId = !id ? rid + uid : id + uid;
  const defaultKeys = ['input'] as T[];

  return (keys ?? defaultKeys).reduce(
    (acc, key: T) => ({
      ...acc,
      [key]: `${baseId}${key}`,
    }),
    {} as Record<T, string>
  );
}
