import { Factory } from '@/types';
import { Box, factory } from '@/core';
import { ControlThumbProps } from '../types';

type ControlThumbFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ControlThumbProps;
}>;

const ControlThumb = factory<ControlThumbFactory>((props, ref) => {
  const {
    style,
    children,
    className,
    transitionEasing,
    transitionDuration,
    transitionProperty,
    ...forwardedProps
  } = props;

  return (
    <Box
      {...forwardedProps}
      ref={ref}
      className={className}
      style={{
        ...style,
        transitionProperty: transitionProperty,
        transitionDuration: transitionDuration,
        transitionTimingFunction: transitionEasing,
      }}
    >
      {children}
    </Box>
  );
});

ControlThumb.displayName = '@v2/Control.Thumb';
export { ControlThumb, type ControlThumbProps };
