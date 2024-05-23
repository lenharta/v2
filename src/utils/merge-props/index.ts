import { filterProps } from '../filter-props';

function mergeProps<T extends Record<string, any>, U extends Partial<T> = {}>(
  defaultProps: U,
  props: T
): T & {
  [Key in Extract<keyof T, keyof U>]-?: U[Key] | NonNullable<T[Key]>;
} {
  return { ...defaultProps, ...filterProps(props) };
}

export { mergeProps };
