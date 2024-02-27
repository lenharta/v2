import clsx from 'clsx';
import * as React from 'react';
import { ScreenContent } from './Content';
import { ThemeProvider } from '@/store';

export type ScreenBaseProps = React.JSX.IntrinsicElements['div'];

export interface ScreenProps extends ScreenBaseProps {}

export interface ScreenComponent {
  (props: ScreenProps): JSX.Element | null;
  displayName?: string;
  Content: typeof ScreenContent;
}

export const Screen: ScreenComponent = (props) => {
  const { children, className, ...otherProps } = props;
  const clxss = clsx('Screen', className);
  return (
    <ThemeProvider>
      <div {...otherProps} className={clxss}>
        {children}
      </div>
    </ThemeProvider>
  );
};

Screen.displayName = '@v2/Screen';
Screen.Content = ScreenContent;
