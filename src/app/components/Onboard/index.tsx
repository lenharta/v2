import * as React from 'react';

export type OnboardScreenBaseProps = React.JSX.IntrinsicElements['div'];

export interface OnboardScreenProps extends OnboardScreenBaseProps {}

export interface OnboardScreenComponent {
  (props: OnboardScreenProps): JSX.Element | null;
  displayName: string;
}

export const OnboardScreen: OnboardScreenComponent = (props) => {
  const {} = props;
  return <div className="OnboardScreen"></div>;
};

OnboardScreen.displayName = '@v2/OnboardScreen';
