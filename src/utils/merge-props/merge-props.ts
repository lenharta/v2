import { filterEmptyObj } from '../filter-empty-obj/filter-empty-obj';
import { filterProps } from '../filter-props/filter-props';

export function mergeProps<T extends Record<string, any>>(config: {
  props: T;
  context?: any | null;
  defaultProps: T;
}): { [K in keyof T]-?: T[K] } {
  const { props, context, defaultProps } = config;
  return filterEmptyObj({
    ...filterProps(props, defaultProps),
    ...(context ? filterProps(props, context) : {}),
  });
}
