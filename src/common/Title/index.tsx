import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import type { Core } from '@/types/core';
import type { SizeExpanded, Weight } from '@/types/common';

// TODO: ADD ACCENT CLASS-NAME

export type TitleProps = {
  accented?: boolean;
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
    accented,
    children,
    className,
    component: Component = 'h2',
    ...otherProps
  } = props;

  const mergedProps = mergeProps({ lead, size, weight }, defaultProps);

  const clxss = clsx(
    `Title Title--level-${Component}`,
    { [`Title--size-${mergedProps.size}`]: mergedProps.size },
    { [`Title--lead-${mergedProps.lead}`]: mergedProps.lead },
    { [`Title--weight-${mergedProps.weight}`]: mergedProps.weight },
    className
  );

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
