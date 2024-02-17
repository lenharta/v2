import * as React from 'react';
import type { Core } from '@/types/core';

export type RotarySliceProps = {};

export type RotarySliceFactory = Core.RefFactory<{
  ref: HTMLButtonElement;
  props: RotarySliceProps;
  component: 'button';
}>;

export const RotarySlice: RotarySliceFactory = React.forwardRef((props, ref) => {
  const { children, component: Component = 'button', ...otherProps } = props;
  const points = [];
  return (
    <Component {...otherProps} ref={ref} role="menuitem" className="Rotary-slice">
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        // style={{ border: 'solid 2px' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="0,200 0,0 200,200" />
      </svg>
    </Component>
  );
});
