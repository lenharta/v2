import clsx from 'clsx';
import * as React from 'react';

export type ScreenContentBaseProps = React.JSX.IntrinsicElements['div'];

export interface ScreenContentProps extends ScreenContentBaseProps {}

export const ScreenContent = React.forwardRef<HTMLDivElement, ScreenContentProps>((props, ref) => {
  const { children, className, ...otherProps } = props;
  const clxss = clsx('Screen-content', className);
  return (
    <div {...otherProps} ref={ref} className={clxss}>
      {children}
    </div>
  );
});

ScreenContent.displayName = '@v2/Screen.Content';
