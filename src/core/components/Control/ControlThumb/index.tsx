import clsx from 'clsx';
import * as React from 'react';
import { Factory } from '@types';
import { createFactory } from '@factory';
import { ControlThumbProps } from '../types';

type ControlThumbFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ControlThumbProps;
}>;

const ControlThumb = createFactory<ControlThumbFactory>((props, ref) => {
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
export { ControlThumb };
