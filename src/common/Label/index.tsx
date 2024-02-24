import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import type { Align, Size } from '@/types/common';

export type LabelBaseProps = React.JSX.IntrinsicElements['label'];

export interface LabelProps extends LabelBaseProps {
  size?: Size;
  align?: Align;
}

const defaultProps: Partial<LabelProps> = {};

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { size, align, className, children, ...otherProps } = props;

  const mergedProps = mergeProps({ size, align }, defaultProps);

  const clxss = clsx(
    'Label',
    { [`Label--size-${mergedProps.size}`]: mergedProps.size },
    { [`Label--align-${mergedProps.align}`]: mergedProps.align },
    className
  );

  return (
    <label {...otherProps} ref={ref} className={clxss}>
      {children}
    </label>
  );
});
