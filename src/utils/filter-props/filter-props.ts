import { objectKeys } from '../object-keys/object-keys';

export function filterProps<T extends Record<string, any>>(
  payload: Partial<T>,
  fallback: T
): { [K in keyof T]-?: T[K] } {
  return objectKeys(fallback).reduce(
    (prev, key) => ({
      ...prev,
      ...{ [key]: payload?.[key] || fallback[key] },
    }),
    {} as { [K in keyof T]-?: T[K] }
  );
}
