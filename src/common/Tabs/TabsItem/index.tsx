import * as React from 'react';
import { Core } from '@/types/core';
import { Align, Justify, Size, SurfaceToken } from '@/types/common';
import { TabsPlacement, TabsVariant, useTabsContext } from '../context';
import clsx from 'clsx';
import { mergeProps } from '@/utils';
import { findTokenState } from '@/common/utils';

export type TabsItemProps = {
  label: string;
  size?: Size;
  align?: Align;
  justify?: Justify;
  surface?: SurfaceToken;
  variant?: TabsVariant;
  readOnly?: boolean;
  disabled?: boolean;
  selected?: boolean;
  placement?: TabsPlacement;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
};

export type TabsItemFactory = Core.RefFactory<{
  ref: HTMLButtonElement;
  props: TabsItemProps;
  component: 'button';
}>;

export const TabsItem: TabsItemFactory = React.forwardRef((props, ref) => {
  const {
    size,
    align,
    label,
    surface = 'primary',
    justify,
    variant,
    placement,
    leftContent,
    rightContent,
    component: Component = 'button',
    readOnly,
    className,
    disabled,
    ...otherProps
  } = props;

  const ctx = useTabsContext();
  const mergedProps = mergeProps({ size, align, justify, variant }, ctx);
  const token = findTokenState({ surface });

  const clxss = clsx(
    'Tabs-item',
    { [`Tabs-item--size-${mergedProps.size}`]: mergedProps.size },
    { [`Tabs-item--align-${mergedProps.align}`]: mergedProps.align },
    { [`Tabs-item--justify-${mergedProps.justify}`]: mergedProps.justify },
    { [`Tabs-item--variant-${mergedProps.variant}`]: mergedProps.variant },
    className
  );

  return (
    <Component
      {...otherProps}
      ref={ref}
      className={clxss}
      disabled={mergedProps.disabled}
      data-disabled={mergedProps.disabled}
      data-readonly={mergedProps.readOnly}
      aria-readonly={mergedProps.readOnly}
    >
      {leftContent && <div data-position="left">{leftContent}</div>}
      {label}
      {rightContent && <div data-position="right">{rightContent}</div>}
    </Component>
  );
});
