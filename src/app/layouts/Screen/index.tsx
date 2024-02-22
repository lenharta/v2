import * as React from 'react';
import { ScreenContent } from './Content';

export type ScreenBaseProps = React.JSX.IntrinsicElements['div'];

export interface ScreenProps extends ScreenBaseProps {}

export interface ScreenComponent {
  (props: ScreenProps): JSX.Element | null;
  displayName: string;
  Content: typeof ScreenContent;
}

export const Screen: ScreenComponent = (props) => {
  const { children, ...otherProps } = props;
  return (
    <div className="Screen" {...otherProps}>
      {children}
    </div>
  );
};

Screen.displayName = '@v2/Screen';
Screen.Content = ScreenContent;
