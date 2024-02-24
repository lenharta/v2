import clsx from 'clsx';
import * as React from 'react';
import type { SizeExpanded } from '@/types/common';

export type StackBaseProps = React.JSX.IntrinsicElements['div'];

export interface StackProps extends StackBaseProps {
  gap?: SizeExpanded;
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const { gap, children, className, ...otherProps } = props;

  const clxss = clsx('Stack', { [`Stack--gap-${gap}`]: gap }, className);

  return (
    <div
      {...otherProps}
      ref={ref}
      className={clxss}
      aria-orientation="vertical"
      data-orientation="vertical"
    >
      {children}
    </div>
  );
});
