import * as React from 'react';

interface MainProps {
  children?: React.ReactNode | undefined;
}

type MainFactory = React.FC<MainProps> & {};

const Main: MainFactory = (props) => {
  const { children } = props;
  return (
    <main className="v2-main" id="mainContent">
      {children}
    </main>
  );
};

Main.displayName = '@v2/App.Main';
export { Main, type MainProps, type MainFactory };
