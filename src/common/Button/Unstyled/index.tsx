import * as React from 'react';
import type { Core } from '@/types/core';

export type UnstyledButtonProps = {};

export type UnstyledButtonFactory = Core.RefFactory<{
  ref: HTMLButtonElement;
  props: UnstyledButtonProps;
  component: 'button';
}>;

export const UnstyledButton: UnstyledButtonFactory = React.forwardRef((props, ref) => {
  const { children, component: Component = 'button', ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
