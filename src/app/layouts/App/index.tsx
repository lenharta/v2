import * as React from 'react';
import { Header, SideMenu, Main } from '@/app';

interface AppProps {
  children?: React.ReactNode | undefined;
}

const App: React.FC<AppProps> = (props) => {
  const { children } = props;

  return (
    <div className="v2-layout-app">
      <Header />
      <SideMenu />
      <Main>{children}</Main>
    </div>
  );
};

App.displayName = '@v2/App';
export { App };
