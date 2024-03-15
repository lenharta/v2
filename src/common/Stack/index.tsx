import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { SizeExpanded } from '@/types/common';

type StackBaseProps = React.ComponentPropsWithoutRef<'div'>;

export interface StackProps extends StackBaseProps {
  gap?: 'default' | SizeExpanded;
}

const defaultProps: Partial<StackProps> = {
  gap: 'default',
};

export const _Stack = (props: StackProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { gap, className, ...otherProps } = mergeProps(defaultProps, props);
  const clxss = clsx('stack', `stack--gap-${gap}`, className);
  return (
    <div
      {...otherProps}
      ref={ref}
      className={clxss}
      data-orientation="vertical"
      aria-orientation="vertical"
    />
  );
};

export const Stack = React.forwardRef(_Stack) as React.ForwardRefExoticComponent<
  StackProps & React.RefAttributes<HTMLDivElement>
>;

Stack.displayName = '@v2/Stack';
