import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { useThemeCTX } from '@/store';
import { createTokenStyle } from '../utils';
import type { Core } from '@/types/core';
import type { SizeExpanded, Weight } from '@/types/common';

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
    style,
    weight,
    accented,
    children,
    className,
    component: Component = 'h2',
    ...otherProps
  } = props;

  const mergedProps = mergeProps({ lead, size, weight }, defaultProps);

  const theme = useThemeCTX();
  const token = accented ? theme.state.accent : undefined;
  const tokenStyles = createTokenStyle(['color'], token, 0.93);

  const clxss = clsx(
    `Title Title--level-${Component}`,
    { [`Title--size-${mergedProps.size}`]: mergedProps.size },
    { [`Title--lead-${mergedProps.lead}`]: mergedProps.lead },
    { [`Title--weight-${mergedProps.weight}`]: mergedProps.weight },
    className
  );

  return (
    <Component {...otherProps} ref={ref} className={clxss} style={{ ...tokenStyles, ...style }}>
      {children}
    </Component>
  );
});
