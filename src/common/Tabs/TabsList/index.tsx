import * as React from 'react';
import { Core } from '@/types/core';
import { Orientation } from '@/types/common';
import { TabsPlacement, TabsVariant, useTabsContext } from '../context';
import { mergeProps } from '@/utils';
import clsx from 'clsx';

export type TabsListProps = {
  variant?: TabsVariant;
  placement?: TabsPlacement;
  orientation?: Orientation;
};

export type TabsListFactory = Core.RefFactory<{
  ref: HTMLDivElement;
  props: TabsListProps;
  component: 'div';
}>;

export const TabsList: TabsListFactory = React.forwardRef((props, ref) => {
  const {
    variant = 'default',
    placement = 'above',
    orientation = 'horizontal',
    component: Component = 'div',
    className,
    children,
    ...otherProps
  } = props;

  const ctx = useTabsContext();
  const mergedProps = mergeProps({ variant, placement, orientation }, ctx);

  const clxss = clsx(
    'Tab-list',
    { [`Tab-item--variant-${mergedProps.variant}`]: mergedProps.variant },
    { [`Tab-item--placement-${mergedProps.placement}`]: mergedProps.placement },
    className
  );

  return (
    <Component
      {...otherProps}
      ref={ref}
      className={clxss}
      data-orientation={mergedProps.orientation}
      aria-orientation={mergedProps.orientation}
    >
      {children}
    </Component>
  );
});
