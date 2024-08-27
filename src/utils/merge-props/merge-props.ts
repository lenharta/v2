import { filterProps } from '../filter-props/filter-props';

function mergeProps<T extends Record<string, any>>(config: {
  props: T;
  ctx: T | null;
  defaultProps: T;
}) {
  const { props, ctx, defaultProps } = config;
  return {
    ...defaultProps,
    ...(!ctx ? { ...props } : {}),
    ...(ctx ? { ...filterProps(ctx), ...filterProps(props) } : {}),
  };
}

export { mergeProps };
