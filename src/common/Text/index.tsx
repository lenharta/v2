import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { Scheme, type SizeExpanded, type Weight } from '@/types/common';

export type TextBaseProps = React.JSX.IntrinsicElements['p'];

export type TextEmphasis = 'xlt' | 'lgt' | 'reg' | 'med' | 'bld' | 'xbd';
export type TextScheme = 'primary' | 'secondary' | 'accent';

export interface TextProps extends TextBaseProps {
  size?: SizeExpanded;
  weight?: Weight;
  scheme?: `${TextScheme}-${TextEmphasis}`;
}

const defaultProps: Partial<TextProps> = {
  scheme: 'primary-xbd',
  weight: 'reg',
  size: 'sm',
};

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const { size, weight, scheme, children, className, ...otherProps } = props;

  const mergedProps = mergeProps({ size, weight, scheme }, defaultProps);

  const clxss = clsx(
    'Text',
    { [`Text--size-${mergedProps.size}`]: mergedProps.size },
    { [`Text--weight-${mergedProps.weight}`]: mergedProps.weight },
    { [`Text--scheme-${mergedProps.scheme}`]: mergedProps.scheme },
    className
  );

  return (
    <p {...otherProps} ref={ref} className={clxss}>
      {children}
    </p>
  );
});
