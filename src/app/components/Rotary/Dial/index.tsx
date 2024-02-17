import * as React from 'react';
import type { Core } from '@/types/core';

export type RotaryDialProps = {};

export type RotaryDialFactory = Core.RefFactory<{
  ref: HTMLButtonElement;
  props: RotaryDialProps;
  component: 'button';
}>;

export const RotaryDial: RotaryDialFactory = React.forwardRef((props, ref) => {
  const { children, component: Component = 'button', ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref} role="menuitem" className="Rotary-dial">
      {children}
    </Component>
  );
});
