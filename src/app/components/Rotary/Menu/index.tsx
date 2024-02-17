import * as React from 'react';
import type { Core } from '@/types/core';

export type RotaryMenuProps = {};

export type RotaryMenuFactory = Core.RefFactory<{
  ref: HTMLDivElement;
  component: 'div';
  props: RotaryMenuProps;
}>;

export const RotaryMenu: RotaryMenuFactory = React.forwardRef((props, ref) => {
  const { children, component: Component = 'div', ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref} role="menu" className="Rotary-menu">
      {children}
    </Component>
  );
});
