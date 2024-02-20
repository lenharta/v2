import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import type { Core } from '@/types/core';
import type { Size } from '@/types/common';

export type ChipItemProps = {
  id?: string;
  size?: Size;
  label?: string;
  value?: string;
  scheme?: 'outlined' | 'tonal';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type ChipItemFactory = Core.RefFactory<{
  component: 'button';
  props: ChipItemProps;
  ref: HTMLButtonElement;
}>;

const defaultProps: Partial<ChipItemProps> = {
  size: 'sm',
  scheme: 'tonal',
};

export const ChipItem: ChipItemFactory = React.forwardRef((props, ref) => {
  const {
    id,
    size,
    label,
    value,
    scheme,
    children,
    component: Component = 'button',
    className,
    ...otherProps
  } = props;

  const _id = value || id || undefined;
  const _label = label || value || id || undefined;

  if (!_id) {
    console.warn('WARNING:[@v2/common/Chip]: Each item must have a unique identifier.');
  }
  if (!_label) {
    console.warn('WARNING:[@v2/common/Chip]: Each item must have a label for accessibility.');
  }

  const mergedProps = mergeProps({ size, scheme }, defaultProps);

  const clxss = clsx(
    'ChipItem',
    { [`ChipItem--size-${mergedProps.size}`]: mergedProps.size },
    { [`ChipItem--scheme-${mergedProps.scheme}`]: mergedProps.scheme },
    className
  );

  return (
    <Component
      {...otherProps}
      ref={ref}
      id={_id}
      value={value}
      className={clxss}
      aria-label={_label}
    >
      {_label}
    </Component>
  );
});
