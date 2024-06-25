import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { ControlThumbProps } from '../Control.types';

type ControlThumbFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ControlThumbProps;
}>;

const ControlThumb = createFactory<ControlThumbFactory>((props, ref) => {
  const {
    style,
    children,
    transitionEasing,
    transitionDuration,
    transitionProperty,
    ...forwardedProps
  } = props;

  return (
    <div
      ref={ref}
      className="v2-control-thumb"
      style={{
        ...style,
        transitionProperty: transitionProperty,
        transitionDuration: transitionDuration,
        transitionTimingFunction: transitionEasing,
      }}
      {...forwardedProps}
    >
      {children}
    </div>
  );
});

ControlThumb.displayName = '@v2/Control.Thumb';
export { ControlThumb };
