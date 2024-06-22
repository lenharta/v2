import * as React from 'react';

interface ScreenProps {
  children?: React.ReactNode | undefined;
}

const Screen: React.FC<ScreenProps> = (props) => {
  const { children, ...forwardedProps } = props;
  return (
    <div className="v2-layout-screen" {...forwardedProps}>
      {children}
    </div>
  );
};

Screen.displayName = '@v2/Layout.Screen';
export { Screen };
