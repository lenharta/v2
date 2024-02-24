import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { type Emphasis, type SizeExpanded, type Weight } from '@/types/common';

export type TitleBaseProps = React.JSX.IntrinsicElements['h1'];

export type TitleLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TitleProps extends TitleBaseProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  size?: SizeExpanded;
  lead?: SizeExpanded;
  weight?: Weight;
  emphasis?: Emphasis;
  scheme?: any;
}

const defaultProps: Partial<TitleProps> = {
  emphasis: 'med',
  weight: 'reg',
  lead: 'sm',
  size: 'sm',
};

const findTitleLevel = (props: Partial<TitleProps>) => {
  const { h1, h2, h3, h4, h5, h6 } = props;
  if (h1) return 'h1';
  if (h2) return 'h2';
  if (h3) return 'h3';
  if (h4) return 'h4';
  if (h5) return 'h5';
  if (h6) return 'h6';
  return 'h3';
};

export const Title = React.forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  const {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    size,
    lead,
    scheme,
    weight,
    emphasis,
    children,
    className,
    ...otherProps
  } = props;

  const Component = findTitleLevel({ h1, h2, h3, h4, h5, h6 });

  const mergedProps = mergeProps(
    { size, lead, scheme, weight, emphasis, h1, h2, h3, h4, h5, h6 },
    defaultProps
  );

  const clxss = clsx(
    `Title`,
    { [`Title--size-${mergedProps.size}`]: mergedProps.size },
    { [`Title--lead-${mergedProps.lead}`]: mergedProps.lead },
    { [`Title--weight-${mergedProps.weight}`]: mergedProps.weight },
    { [`Title--emphasis-${mergedProps.emphasis}`]: mergedProps.emphasis },
    mergedProps.scheme,
    className
  );

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
