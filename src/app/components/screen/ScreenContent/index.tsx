import * as React from 'react';
import { mergeProps } from '@/utils';
import { ElementProps } from '@/types/global';

export interface ScreenContentProps extends ElementProps<'div'> {}

const defaultProps: Partial<ScreenContentProps> = {};

export const ScreenContent = React.forwardRef<HTMLDivElement, ScreenContentProps>((props, ref) => {
  const { children, ...otherProps } = mergeProps(defaultProps, props);
  return (
    <div {...otherProps} ref={ref} className="screen-content">
      {children}
    </div>
  );
});
