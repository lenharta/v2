import React from 'react';
import { ScreenProps } from './Screen.types';

const Screen: React.FC<ScreenProps> = (props) => {
  const { children, ...forwardedProps } = props;
  return (
    <div className="v2-screen" {...forwardedProps}>
      {children}
    </div>
  );
};

Screen.displayName = '@v2/Screen';
export { Screen };
