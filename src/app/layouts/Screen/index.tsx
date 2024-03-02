import clsx from 'clsx';
import * as React from 'react';
import { ThemeProvider } from '@/store';
import { ScreenContent } from './Content';

type ScreenElementProps = React.ComponentPropsWithoutRef<'div'>;
type ScreenAttributeProps = React.RefAttributes<HTMLDivElement>;
type ScreenBaseProps = ScreenElementProps & ScreenAttributeProps;

export interface ScreenProps extends ScreenBaseProps {}

const _Screen = (props: ScreenProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props;
  const clxss = clsx('Screen', className);
  return (
    <ThemeProvider>
      <div {...otherProps} ref={ref} className={clxss}>
        {children}
      </div>
    </ThemeProvider>
  );
};

export type ScreenComponent = React.ForwardRefExoticComponent<ScreenProps> & {
  Content: typeof ScreenContent;
};

export const Screen = React.forwardRef(_Screen) as ScreenComponent;
Screen.displayName = '@v2/Screen';
Screen.Content = ScreenContent;
