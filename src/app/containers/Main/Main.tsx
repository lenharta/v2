import React from 'react';
import { Footer } from '../../components';
import { MainProps } from './Main.types';

const Main: React.FC<MainProps> = (props) => {
  const { children, ...forwardedProps } = props;
  return (
    <main className="v2-main" {...forwardedProps}>
      {children}
      <Footer />
    </main>
  );
};

Main.displayName = '@v2/Main';
export { Main };
