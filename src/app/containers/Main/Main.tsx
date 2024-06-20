import React from 'react';
import { MainProps } from './Main.types';

const Main: React.FC<MainProps> = (props) => {
  const { ...forwardedProps } = props;
  return (
    <div {...forwardedProps}>
      <span>Main</span>
    </div>
  );
};

Main.displayName = '@v2/Main';
export { Main };
