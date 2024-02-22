import * as React from 'react';

export type ScreenContentBaseProps = React.JSX.IntrinsicElements['div'];

export interface ScreenContentProps extends ScreenContentBaseProps {}

export interface ScreenContentComponent {
  (props: ScreenContentProps): JSX.Element | null;
  displayName: string;
}

export const ScreenContent: ScreenContentComponent = (props) => {
  const { children, ...otherProps } = props;
  return (
    <div className="ScreenContent" {...otherProps}>
      {children}
    </div>
  );
};

ScreenContent.displayName = '@v2/Screen.Content';
