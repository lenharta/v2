import clsx from 'clsx';
import { Core } from '@/types';
import { PolymorphicComponent } from '@/factory';

export type ControlThumbFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.ControlThumbProps;
  element: 'div';
}>;

export const ControlThumb = PolymorphicComponent<ControlThumbFactory>((props, ref) => {
  const {
    grow,
    size,
    style,
    variant,
    children,
    className,
    transitionEasing,
    transitionDuration,
    transitionProperty,
    ...otherProps
  } = props;

  return (
    <div
      {...otherProps}
      ref={ref}
      data-grow={grow || undefined}
      className={clsx(
        'v2-control-thumb',
        `v2-control-thumb--${size || 'sm'}`,
        `v2-control-thumb--${variant || 'default'}`,
        className
      )}
      style={{
        ...style,
        transitionProperty: transitionProperty,
        transitionDuration: transitionDuration,
        transitionTimingFunction: transitionEasing,
      }}
    >
      {children}
    </div>
  );
});

ControlThumb.displayName = '@v2/Control.Thumb';
