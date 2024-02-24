import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import type { Size, Align } from '@/types/common';

export type RadioBaseProps = React.JSX.IntrinsicElements['button'];

export interface RadioProps extends RadioBaseProps {
  size?: Size;
  align?: Align;
  label?: string;
  error?: string;
  checked?: boolean;
}

const defaultProps: Partial<RadioProps> = {
  size: 'sm',
};

export const Radio = React.forwardRef<HTMLButtonElement, RadioProps>((props, ref) => {
  const { size, align, label, error, checked, disabled, children, ...otherProps } = props;

  const mergedProps = mergeProps({ size, align }, defaultProps);

  const clxss = clsx(
    'Radio',
    { [`Radio--size-${mergedProps.size}`]: mergedProps.size },
    { [`Radio--align-${mergedProps.align}`]: mergedProps.align }
  );

  return (
    <button
      {...otherProps}
      ref={ref}
      role="radio"
      className={clxss}
      data-disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
});
