import * as React from 'react';
import * as Router from 'react-router-dom';
import { StoreProvider } from '@/app';
import { Header } from '../Header';
import { Main } from '../Main';
import { Side } from '../Side';

interface LayoutProps {
  children?: React.ReactNode | undefined;
}

type LayoutFactory = React.FC<LayoutProps> & {
  Side: typeof Side;
  Main: typeof Main;
  Header: typeof Header;
};

const Layout: LayoutFactory = ({}) => {
  return (
    <StoreProvider>
      <div className="v2-layout">
        <Layout.Header />
        <Layout.Side />
        <Layout.Main>
          <Router.Outlet />
        </Layout.Main>
      </div>
    </StoreProvider>
  );
};

Layout.Side = Side;
Layout.Main = Main;
Layout.Header = Header;
Layout.displayName = '@v2/App.Layout';
export { Layout, type LayoutProps, type LayoutFactory };
