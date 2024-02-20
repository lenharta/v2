import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { TabsPlacement, TabsVariant, useTabsContext } from '../context';
import type { Core } from '@/types/core';
import type { Orientation } from '@/types/common';

export type TabsGroupProps = {
  variant?: TabsVariant;
  placement?: TabsPlacement;
  orientation?: Orientation;
};

export type TabsGroupFactory = Core.RefFactory<{
  ref: HTMLDivElement;
  props: TabsGroupProps;
  component: 'div';
}>;

const defaultProps: Partial<TabsGroupProps> = {
  variant: 'default',
  placement: 'above',
  orientation: 'horizontal',
};

export const TabsGroup: TabsGroupFactory = React.forwardRef((props, ref) => {
  const {
    variant,
    placement,
    orientation,
    component: Component = 'div',
    className,
    children,
    ...otherProps
  } = props;

  const ctx = useTabsContext();
  const mergedProps = mergeProps({ variant, placement, orientation }, defaultProps, ctx);

  const clxss = clsx(
    'TabsGroup',
    { [`TabsGroup--variant-${mergedProps.variant}`]: mergedProps.variant },
    { [`TabsGroup--placement-${mergedProps.placement}`]: mergedProps.placement },
    className
  );

  return (
    <Component
      {...otherProps}
      ref={ref}
      data-orientation={mergedProps.orientation}
      aria-orientation={mergedProps.orientation}
      className={clxss}
    >
      {children}
    </Component>
  );
});
