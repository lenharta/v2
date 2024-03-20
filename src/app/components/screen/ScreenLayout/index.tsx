import * as React from 'react';
import { mergeProps } from '@/utils';
import { ElementProps } from '@/types/global';

export interface ScreenLayoutProps extends ElementProps<'div'> {}

const defaultProps: Partial<ScreenLayoutProps> = {};

export const ScreenLayout = React.forwardRef<HTMLDivElement, ScreenLayoutProps>((props, ref) => {
  const { children, ...otherProps } = mergeProps(defaultProps, props);
  return (
    <div {...otherProps} ref={ref} className="screen-layout">
      {children}
    </div>
  );
});
