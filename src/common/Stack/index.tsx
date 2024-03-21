import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { StackComponent, StackComponentRender, StackProps } from './types';

const defaultProps: Partial<StackProps> = {
  gap: 'default',
};

const StackRender: StackComponentRender = (props, ref) => {
  const { gap, className, ...otherProps } = mergeProps(defaultProps, props);
  return (
    <div
      {...otherProps}
      ref={ref}
      className={clsx('stack', `stack--gap-${gap}`, className)}
      data-orientation="vertical"
      aria-orientation="vertical"
    />
  );
};

export const Stack = React.forwardRef(StackRender) as StackComponent;
Stack.displayName = '@v2/Stack';
