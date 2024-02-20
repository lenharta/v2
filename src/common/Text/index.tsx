import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import type { Core } from '@/types/core';
import type { SizeExpanded, Weight } from '@/types/common';

type TextLevel = 'low' | 'med' | 'high' | 'max';
type TextScheme = TextLevel | `accent-${TextLevel}`;

export type TextProps = {
  scheme?: TextScheme;
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
    scheme,
    children,
    className,
    component: Component = 'p',
    ...otherProps
  } = props;

  const mergedProps = mergeProps({ lead, size, scheme, weight }, defaultProps);

  const clxss = clsx(
    'Text',
    { [`Text--size-${mergedProps.size}`]: mergedProps.size },
    { [`Text--lead-${mergedProps.lead}`]: mergedProps.lead },
    { [`Text--scheme-${mergedProps.scheme}`]: mergedProps.scheme },
    { [`Text--weight-${mergedProps.weight}`]: mergedProps.weight },
    className
  );

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
