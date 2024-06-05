import { filterProps } from '../filter-props';

function mergeProps<T extends Record<string, any>>(config: {
  props: T;
  context: T | null;
  defaultProps: T;
}) {
  const { props, context, defaultProps } = config;
  return {
    ...defaultProps,
    ...(!context ? { ...props } : {}),
    ...(context ? { ...filterProps(context), ...filterProps(props) } : {}),
  };
}

export { mergeProps };
