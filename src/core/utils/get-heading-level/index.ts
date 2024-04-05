import { Core } from '@/types';

export function getHeadingLevel<T extends Core.HeadingProps, K extends keyof T>(
  props: T,
  defaultLevel: K
): K {
  const keys = Object.keys(props) as K[];
  const search = keys.find((key) => props[key] !== undefined);
  return !search ? defaultLevel : search;
}
