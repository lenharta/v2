import { Factory } from '@/types';
import { ControlThumbProps } from '../Control.types';
import { factory } from '@/core/factory';

type ControlThumbFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ControlThumbProps;
}>;

const ControlThumb = factory<ControlThumbFactory>((props, ref) => {
  const {
    style,
    className,
    transitionEasing,
    transitionDuration,
    transitionProperty,
    ...forwardedProps
  } = props;

  return (
    <div
      {...forwardedProps}
      className={className}
      style={{
        ...style,
        transitionProperty: transitionProperty,
        transitionDuration: transitionDuration,
        transitionTimingFunction: transitionEasing,
      }}
      ref={ref}
    />
  );
});

ControlThumb.displayName = '@v2/Control.Thumb';
export { ControlThumb, type ControlThumbProps };
