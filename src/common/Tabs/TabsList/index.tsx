import clsx from 'clsx';
import * as React from 'react';

import { mergeProps } from '@/utils';
import { TabsPlacement, TabsVariant, useTabsContext } from '../context';

import type { Core } from '@/types/core';
import type { Orientation, Size } from '@/types/common';

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

const defaultProps: Partial<TabsListProps> = {};

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
  const mergedProps = mergeProps({ variant, placement, orientation }, defaultProps, ctx);

  const clxss = clsx(
    'Tabs-list',
    { [`Tabs-list--variant-${mergedProps.variant}`]: mergedProps.variant },
    { [`Tabs-list--placement-${mergedProps.placement}`]: mergedProps.placement },
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
