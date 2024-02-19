import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import type { Core } from '@/types/core';
import type { SizeExpanded, Weight } from '@/types/common';

// TODO: ADD ACCENT CLASS-NAME

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
    weight,
    accented,
    children,
    className,
    component: Component = 'p',
    ...otherProps
  } = props;

  const mergedProps = mergeProps({ lead, size, weight }, defaultProps);

  const clxss = clsx(
    'Text',
    { [`Text--size-${mergedProps.size}`]: mergedProps.size },
    { [`Text--lead-${mergedProps.lead}`]: mergedProps.lead },
    { [`Text--weight-${mergedProps.weight}`]: mergedProps.weight },
    className
  );

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
