import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import type { Size, Align } from '@/types/common';

export type CheckboxBaseProps = React.JSX.IntrinsicElements['button'];

export interface CheckboxProps extends CheckboxBaseProps {
  size?: Size;
  align?: Align;
  label?: string;
  error?: string;
  checked?: boolean;
}

const defaultProps: Partial<CheckboxProps> = {
  size: 'sm',
};

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>((props, ref) => {
  const { size, align, label, error, checked, disabled, children, ...otherProps } = props;

  const mergedProps = mergeProps({ size, align }, defaultProps);

  const clxss = clsx(
    'Checkbox',
    { [`Checkbox--size-${mergedProps.size}`]: mergedProps.size },
    { [`Checkbox--align-${mergedProps.align}`]: mergedProps.align }
  );

  return (
    <button
      {...otherProps}
      ref={ref}
      role="checkbox"
      className={clxss}
      data-disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
});
