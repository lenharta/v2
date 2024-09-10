import clsx from 'clsx';
import * as React from 'react';
import { Core } from '@/types';
import { PolymorphicComponent } from '@/factory';

export type ControlThumbFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.ControlThumbProps;
  element: 'div';
}>;

export const ControlThumb = PolymorphicComponent<ControlThumbFactory>((props, ref) => {
  const {
    style,
    variant,
    children,
    className,
    transitionEasing,
    transitionDuration,
    transitionProperty,
    ...forwardedProps
  } = props;

  let thumbStyles: Record<'style', React.CSSProperties> = {
    style: {
      ...style,
      transitionProperty: transitionProperty,
      transitionDuration: transitionDuration,
      transitionTimingFunction: transitionEasing,
    },
  };

  return (
    <div
      ref={ref}
      className={clsx('v2-control-thumb', `v2-control-thumb--${variant}`, className)}
      {...thumbStyles}
      {...forwardedProps}
    >
      {children}
    </div>
  );
});

ControlThumb.displayName = '@v2/Control.Thumb';
