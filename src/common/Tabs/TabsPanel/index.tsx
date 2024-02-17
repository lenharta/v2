import * as React from 'react';
import { Core } from '@/types/core';
import { Orientation } from '@/types/common';
import { TabsPlacement, TabsVariant } from '../context';

export type TabsPanelProps = {
  orientation?: Orientation;
  placement?: TabsPlacement;
  variant?: TabsVariant;
};

export type TabsPanelFactory = Core.RefFactory<{
  ref: HTMLDivElement;
  props: TabsPanelProps;
  component: 'div';
}>;

export const TabsPanel: TabsPanelFactory = React.forwardRef((props, ref) => {
  const { children, component: Component = 'div', ...otherProps } = props;
  return (
    <Component {...otherProps} className="Tabs-panel" ref={ref}>
      {children}
    </Component>
  );
});
