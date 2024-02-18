import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { useThemeCTX } from '@/store';
import { createTokenStyle } from '../utils';
import type { Core } from '@/types/core';
import type { SizeExpanded, Weight } from '@/types/common';

export type TextProps = {
  accented?: boolean;
  weight?: Weight;
  lead?: SizeExpanded;
  size?: SizeExpanded;
};

export type TextFactory = Core.RefFactory<{
  ref: HTMLParagraphElement;
  props: TextProps;
  component: 'p';
}>;

const defaultProps: Partial<TextProps> = {
  weight: 'reg',
  size: 'md',
  lead: 'md',
};

export const Text: TextFactory = React.forwardRef((props, ref) => {
  const {
    size,
    lead,
    style,
    weight,
    accented,
    children,
    className,
    component: Component = 'p',
    ...otherProps
  } = props;

  const mergedProps = mergeProps({ lead, size, weight }, defaultProps);

  const theme = useThemeCTX();
  const token = accented ? theme.state.accent : undefined;
  const tokenStyles = createTokenStyle(['color'], token, 0.93);

  const clxss = clsx(
    'Text',
    { [`Text--size-${mergedProps.size}`]: mergedProps.size },
    { [`Text--lead-${mergedProps.lead}`]: mergedProps.lead },
    { [`Text--weight-${mergedProps.weight}`]: mergedProps.weight },
    className
  );

  return (
    <Component {...otherProps} ref={ref} className={clxss} style={{ ...tokenStyles, ...style }}>
      {children}
    </Component>
  );
});
