import React from 'react';
import { Outlet } from 'react-router-dom';
import { Main } from '../containers';
import { StoreProvider } from '../store';
import { Header, SideMenu } from '../components';

const RootLayout: React.FC<{}> = ({}) => (
  <StoreProvider>
    <Header />
    <SideMenu />
    <Main>
      <Outlet />
    </Main>
  </StoreProvider>
);

RootLayout.displayName = '@v2/Root.Layout';
export { RootLayout };
