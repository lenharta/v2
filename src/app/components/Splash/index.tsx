import * as React from 'react';

export type SplashScreenBaseProps = React.JSX.IntrinsicElements['div'];

export interface SplashScreenProps extends SplashScreenBaseProps {}

export interface SplashScreenComponent {
  (props: SplashScreenProps): JSX.Element | null;
  displayName: string;
}

export const SplashScreen: SplashScreenComponent = (props) => {
  const {} = props;
  return <div className="SplashScreen"></div>;
};

SplashScreen.displayName = '@v2/SplashScreen';
