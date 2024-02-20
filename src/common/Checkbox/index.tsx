import clsx from 'clsx';
import * as React from 'react';
import { Label } from '../Label';
import type { Core } from '@/types/core';
import type { Size } from '@/types/common';
import { mergeProps } from '@/utils';
import { useCheckboxCTX } from './context';
import { CheckboxIndicator } from './Indicator';

export type CheckboxScheme = 'default' | 'elevated';

export type CheckboxProps = {
  size?: Size;
  info?: string;
  label?: string;
  error?: string;
  readOnly?: boolean;
  disabled?: boolean;
  scheme?: CheckboxScheme;
  checked?: boolean;
  indeterminate?: boolean;
  onChange?(event: React.FormEvent<HTMLButtonElement>): void;
};

export type CheckboxFactory = Core.RefFactory<{
  ref: HTMLButtonElement;
  props: CheckboxProps;
  component: 'button';
}>;

const defaultProps: Partial<CheckboxProps> = {
  size: 'sm',
  scheme: 'default',
};

export const Checkbox: CheckboxFactory = React.forwardRef((props, ref) => {
  const {
    id,
    size,
    info,
    error,
    label,
    scheme,
    disabled,
    readOnly,
    children,
    className,
    checked,
    onChange,
    indeterminate,
    component: Component = 'button',
    ...otherProps
  } = props;

  const hasError = error !== undefined;
  const ctx = useCheckboxCTX();

  const mergedProps = mergeProps(
    { size, scheme, onChange, checked, indeterminate },
    defaultProps,
    ctx
  );

  const clxss = clsx(
    'Checkbox',
    { [`Checkbox--size-${mergedProps.size}`]: mergedProps.size },
    { [`Checkbox--scheme-${mergedProps.scheme}`]: mergedProps.scheme },
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
      <CheckboxIndicator checked={checked} size={mergedProps.size} indeterminate={indeterminate} />
      <div className="Checkbox-inner">
        <Label htmlFor={id}>{label}</Label>
        <div>{error}</div>
        <div>{info}</div>
      </div>
    </Component>
  );
});

Checkbox.displayName = '@v2/Checkbox';
