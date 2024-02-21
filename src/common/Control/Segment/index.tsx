import clsx from 'clsx';
import * as React from 'react';
import type { Core } from '@/types/core';
import type { Orientation, Size } from '@/types/common';
import type { ControlOption, ControlScheme } from '..';

export type ControlSegmentProps = {
  size?: Size;
  value: string;
  radius?: Size;
  option: ControlOption;
  scheme?: ControlScheme;
  disabled?: boolean;
  onValueChange: (value: string) => void;
  orientation?: Orientation;
};

export type ControlSegmentFactory = Core.RefFactory<{
  component: 'button';
  props: ControlSegmentProps;
  ref: HTMLButtonElement;
}>;

export const ControlSegment: ControlSegmentFactory = React.forwardRef((props, ref) => {
  const {
    size,
    value,
    radius,
    option,
    scheme,
    disabled,
    children,
    orientation,
    onValueChange,
    component: Component = 'button',
    ...otherProps
  } = props;

  const isDisabled = disabled !== undefined;
  const isSelected = option.value === value;

  const clxss = clsx('Control-segment', {
    [`Control-segment--size-${size}`]: size,
    [`Control-segment--radius-${radius}`]: radius,
    [`Control-segment--scheme-${scheme}`]: scheme,
  });

  return (
    <Component
      {...otherProps}
      ref={ref}
      className={clxss}
      disabled={isDisabled}
      data-disabled={isDisabled}
      data-selected={isSelected || undefined}
      onClick={() => onValueChange(option.value)}
    >
      {option.label}
    </Component>
  );
});
