import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import type { Size, Align } from '@/types/common';

export type SwtichBaseProps = React.JSX.IntrinsicElements['button'];

export interface SwtichProps extends SwtichBaseProps {
  size?: Size;
  align?: Align;
  label?: string;
  error?: string;
  checked?: boolean;
}

const defaultProps: Partial<SwtichProps> = {
  size: 'sm',
};

export const Swtich = React.forwardRef<HTMLButtonElement, SwtichProps>((props, ref) => {
  const { size, align, label, error, checked, disabled, children, ...otherProps } = props;

  const mergedProps = mergeProps({ size, align }, defaultProps);

  const clxss = clsx(
    'Swtich',
    { [`Swtich--size-${mergedProps.size}`]: mergedProps.size },
    { [`Swtich--align-${mergedProps.align}`]: mergedProps.align }
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
