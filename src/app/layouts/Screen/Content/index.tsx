import clsx from 'clsx';
import * as React from 'react';

type ScreenContentElementProps = React.ComponentPropsWithoutRef<'div'>;
type ScreenContentAttributeProps = React.RefAttributes<HTMLDivElement>;
type ScreenContentBaseProps = ScreenContentElementProps & ScreenContentAttributeProps;

export interface ScreenContentProps extends ScreenContentBaseProps {}

const _ScreenContent = (props: ScreenContentProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props;
  const clxss = clsx('Screen-content', className);
  return (
    <div {...otherProps} ref={ref} className={clxss}>
      {children}
    </div>
  );
};

export type ScreenContentComponent = React.ForwardRefExoticComponent<ScreenContentBaseProps>;
export const ScreenContent = React.forwardRef(_ScreenContent) as ScreenContentComponent;
ScreenContent.displayName = '@v2/Screen.Content';
