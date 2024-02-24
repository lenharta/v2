import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { Scheme, type Emphasis, type SizeExpanded, type Weight } from '@/types/common';

export type TextBaseProps = React.JSX.IntrinsicElements['p'];

export interface TextProps extends TextBaseProps {
  size?: SizeExpanded;
  lead?: SizeExpanded;
  weight?: Weight;
  scheme?: Scheme;
  emphasis?: Emphasis;
}

const defaultProps: Partial<TextProps> = {
  emphasis: 'med',
  scheme: 'primary',
  weight: 'reg',
  lead: 'sm',
  size: 'sm',
};

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const { size, lead, weight, scheme, emphasis, children, className, ...otherProps } = props;

  const mergedProps = mergeProps({ size, lead, weight, scheme, emphasis }, defaultProps);

  const clxss = clsx(
    'Text',
    { [`Text--size-${mergedProps.size}`]: mergedProps.size },
    { [`Text--lead-${mergedProps.lead}`]: mergedProps.lead },
    { [`Text--weight-${mergedProps.weight}`]: mergedProps.weight },
    { [`Text--emphasis-${mergedProps.emphasis}`]: mergedProps.emphasis },
    mergedProps.scheme,
    className
  );

  return (
    <p {...otherProps} ref={ref} className={clxss}>
      {children}
    </p>
  );
});
