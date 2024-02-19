import clsx from 'clsx';
import * as React from 'react';
import { Label } from '../Label';
import type { Core } from '@/types/core';
import type { Align, Justify, Size } from '@/types/common';

export type CheckboxProps = {
  size?: Size;
  align?: Align;
  justify?: Justify;
  info?: string;
  label?: string;
  error?: string;
  checked?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
};

export type CheckboxFactory = Core.RefFactory<{
  ref: HTMLButtonElement;
  props: CheckboxProps;
  component: 'button';
}>;

export const Checkbox: CheckboxFactory = React.forwardRef((props, ref) => {
  const {
    id,
    size = 'sm',
    align = 'center',
    justify = 'start',
    info,
    error,
    label,
    style,
    checked,
    disabled,
    readOnly,
    children,
    className,
    component: Component = 'button',
    ...otherProps
  } = props;

  const hasError = error !== undefined;

  const clxss = clsx(
    'Checkbox',
    { [`Checkbox--size-${size}`]: size },
    { [`Checkbox--align-${align}`]: align },
    { [`Checkbox--justify-${justify}`]: justify },
    className
  );

  return (
    <Component
      {...otherProps}
      ref={ref}
      className={clxss}
      data-error={hasError}
      data-disabled={disabled}
      data-readonly={readOnly}
      aria-disabled={disabled}
      aria-readonly={readOnly}
    >
      {children}
      <div className="Radio-inner">
        <Label htmlFor={id}>{label}</Label>
        <div>{error}</div>
        <div>{info}</div>
      </div>
    </Component>
  );
});

Checkbox.displayName = '@v2/Checkbox';
