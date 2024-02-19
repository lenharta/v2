import clsx from 'clsx';
import * as React from 'react';

import { Surface } from '@/common';
import { useSurface } from '@/hooks';
import { mergeProps } from '@/utils';
import { useThemeCTX } from '@/store';
import { TabsPlacement, TabsVariant, useTabsContext } from '../context';

import type { Core } from '@/types/core';
import type { Align, Justify, Size, SurfaceToken } from '@/types/common';

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

const defaultProps: Partial<TabsItemProps> = {
  surface: 'primary',
  size: 'sm',
};

export const TabsItem: TabsItemFactory = React.forwardRef((props, ref) => {
  const {
    size,
    align,
    label,
    surface,
    justify,
    variant,
    disabled,
    readOnly,
    selected,
    placement,
    className,
    leftContent,
    rightContent,
    component: Component = 'button',
    ...otherProps
  } = props;

  const ctx = useTabsContext();

  const mergedProps = mergeProps(
    { size, align, justify, variant, surface, disabled, readOnly },
    defaultProps,
    ctx
  );

  const clxss = clsx(
    'Tabs-item',
    { [`Tabs-item--size-${mergedProps.size}`]: mergedProps.size },
    { [`Tabs-item--align-${mergedProps.align}`]: mergedProps.align },
    { [`Tabs-item--justify-${mergedProps.justify}`]: mergedProps.justify },
    { [`Tabs-item--variant-${mergedProps.variant}`]: mergedProps.variant },
    { [`Tabs-item--selected`]: selected !== undefined },
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
