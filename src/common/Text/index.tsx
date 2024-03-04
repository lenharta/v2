import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { Scheme, type Emphasis, type SizeExpanded, type Weight } from '@/types/common';

export type TextBaseProps = React.JSX.IntrinsicElements['p'];

export interface TextProps extends TextBaseProps {
  size?: SizeExpanded;
  weight?: Weight;
  scheme?: Scheme;
  emphasis?: Weight;
}

const defaultProps: Partial<TextProps> = {
  emphasis: 'bld',
  scheme: 'primary',
  weight: 'reg',
  size: 'sm',
};

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const { size, weight, scheme, emphasis, children, className, ...otherProps } = props;

  const mergedProps = mergeProps({ size, weight, scheme, emphasis }, defaultProps);

  const clxss = clsx(
    'Text',
    { [`Text--emp-${mergedProps.emphasis}`]: mergedProps.emphasis },
    { [`Text--size-${mergedProps.size}`]: mergedProps.size },
    { [`Text--weight-${mergedProps.weight}`]: mergedProps.weight },
    mergedProps.scheme,
    className
  );

  return (
    <p {...otherProps} ref={ref} className={clxss}>
      {children}
    </p>
  );
});
