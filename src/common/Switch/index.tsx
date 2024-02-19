import clsx from 'clsx';
import * as React from 'react';
import { Label } from '../Label';
import { Core } from '@/types/core';
import { Size, Align, Justify } from '@/types/common';

export type SwitchProps = {
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

export type SwitchFactory = Core.RefFactory<{
  ref: HTMLButtonElement;
  props: SwitchProps;
  component: 'button';
}>;

export const Switch: SwitchFactory = React.forwardRef((props, ref) => {
  const {
    id,
    size = 'sm',
    align = 'center',
    justify = 'start',
    info,
    label,
    error,
    disabled,
    readOnly,
    children,
    className,
    component: Component = 'button',
    ...otherProps
  } = props;

  const clxss = clsx(
    'Switch',
    { [`Switch--size-${size}`]: size },
    { [`Switch--align-${align}`]: align },
    { [`Switch--justify-${justify}`]: justify },
    className
  );

  return (
    <Component
      {...otherProps}
      ref={ref}
      className={clxss}
      data-disabled={disabled}
      data-readonly={readOnly}
      aria-disabled={disabled}
      aria-readonly={readOnly}
    >
      {children}
      <div className="Switch-inner">
        <Label htmlFor={id}>{label}</Label>
        <div>{error}</div>
        <div>{info}</div>
      </div>
    </Component>
  );
});
