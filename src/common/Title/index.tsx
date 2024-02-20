import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import type { Core } from '@/types/core';
import type { SizeExpanded, Weight } from '@/types/common';

type TitleLevel = 'low' | 'med' | 'high' | 'max';
type TitleScheme = TitleLevel | `accent-${TitleLevel}`;

export type TitleProps = {
  scheme?: TitleScheme;
  weight?: Weight;
  lead?: SizeExpanded;
  size?: SizeExpanded;
};

export type TitleFactory = Core.RefFactory<{
  ref: HTMLHeadingElement;
  props: TitleProps;
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}>;

const defaultProps: Partial<TitleProps> = {
  weight: 'reg',
};

export const Title: TitleFactory = React.forwardRef((props, ref) => {
  const {
    size,
    lead,
    weight,
    scheme,
    children,
    className,
    component: Component = 'h2',
    ...otherProps
  } = props;

  const mergedProps = mergeProps({ lead, size, scheme, weight }, defaultProps);

  const clxss = clsx(
    `Title Title--level-${Component}`,
    { [`Title--size-${mergedProps.size}`]: mergedProps.size },
    { [`Title--lead-${mergedProps.lead}`]: mergedProps.lead },
    { [`Title--weight-${mergedProps.weight}`]: mergedProps.weight },
    { [`Title--scheme-${mergedProps.scheme}`]: mergedProps.scheme },
    className
  );

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
