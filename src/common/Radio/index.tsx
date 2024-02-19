import clsx from 'clsx';
import * as React from 'react';
import { Label } from '../Label';
import type { Core } from '@/types/core';
import type { Size, Align, Justify } from '@/types/common';

export type RadioProps = {
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

export type RadioFactory = Core.RefFactory<{
  ref: HTMLButtonElement;
  props: RadioProps;
  component: 'button';
}>;

export const Radio: RadioFactory = React.forwardRef((props, ref) => {
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
    'Radio',
    { [`Radio--size-${size}`]: size },
    { [`Radio--align-${align}`]: align },
    { [`Radio--justify-${justify}`]: justify },
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
      <div className="Radio-inner">
        <Label htmlFor={id}>{label}</Label>
        <div>{error}</div>
        <div>{info}</div>
      </div>
    </Component>
  );
});
