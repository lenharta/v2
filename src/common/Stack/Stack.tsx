import clsx from 'clsx';
import * as React from 'react';
import type { Core } from '@/types/core';
import { SizeExpanded } from '@/types/common';

export type StackProps = {
  gap?: SizeExpanded;
};

export type StackFactory = Core.RefFactory<{
  component: 'div';
  props: StackProps;
  ref: HTMLDivElement;
}>;

export const Stack: StackFactory = React.forwardRef((props, ref) => {
  const { gap, children, className, component: Component = 'div', ...otherProps } = props;

  const clxss = clsx('Stack', { [`Stack--gap-${gap}`]: gap }, className);

  return (
    <Component {...otherProps} aria-orientation="vertical" ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
