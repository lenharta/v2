import React from 'react';
import { ScreenProps } from './Screen.types';

const Screen: React.FC<ScreenProps> = (props) => {
  const { ...forwardedProps } = props;
  return (
    <div {...forwardedProps}>
      <span>Screen</span>
    </div>
  );
};

Screen.displayName = '@v2/Screen';
export { Screen };
