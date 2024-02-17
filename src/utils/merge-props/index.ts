import { filterProps } from '../filter-props';

export function mergeProps<T extends Record<string, any>, U extends Partial<T> = {}>(
  props: T,
  defaultProps?: U,
  context?: T
): T & {
  [Key in Extract<keyof T, keyof U>]-?: U[Key] | NonNullable<T[Key]>;
} {
  return { ...defaultProps, ...context, ...filterProps(props) };
}
