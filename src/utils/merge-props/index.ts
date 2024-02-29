import { filterProps } from '../filter-props';

export type MergePropsReturn<T extends Record<string, any>, U extends Partial<T> = {}> = T & {
  [Key in Extract<keyof T, keyof U>]-?: U[Key] | NonNullable<T[Key]>;
};

export function mergeProps<T extends Record<string, any>, U extends Partial<T> = {}>(
  props: T,
  defaultProps: U = {} as U,
  contextProps: any = {} as U
): MergePropsReturn<T> {
  return { ...defaultProps, ...filterProps(contextProps), ...filterProps(props) };
}
