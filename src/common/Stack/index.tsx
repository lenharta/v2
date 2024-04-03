import clsx from 'clsx';
import * as React from 'react';
import { StackComponentType, StackRenderType } from './types';

const StackRender: StackRenderType = (props, ref) => {
  const { gap = 'default', className, ...otherProps } = props;
  return (
    <div
      {...otherProps}
      ref={ref}
      className={clsx('stack', `stack--gap-${gap}`, className)}
      aria-orientation="vertical"
    />
  );
};

export const Stack = React.forwardRef(StackRender) as StackComponentType;
Stack.displayName = '@v2/Stack';
