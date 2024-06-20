import React from 'react';
import { MainProps } from './Main.types';

const Main: React.FC<MainProps> = (props) => {
  const { children, ...forwardedProps } = props;
  return (
    <main className="v2-main" {...forwardedProps}>
      {children}
    </main>
  );
};

Main.displayName = '@v2/Main';
export { Main };
