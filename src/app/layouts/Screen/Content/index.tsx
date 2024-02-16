import { Core } from '@/types/core';
import React from 'react';

export type ScreenContentProps = {};

export type ScreentContentFactory = Core.RefFactory<{
  ref: HTMLDivElement;
  props: ScreenContentProps;
  component: 'div';
}>;

export const ScreenContent: ScreentContentFactory = React.forwardRef((props, ref) => {
  const { children, component: Component = 'div', ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref} className="Screen-content">
      <div className="Screen-container">{children}</div>
    </Component>
  );
});
