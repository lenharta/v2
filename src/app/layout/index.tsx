import React from 'react';
import { Outlet } from 'react-router-dom';
import { Main } from '@/app/containers';
import { StoreProvider } from '@/app/store';
import { Header, SideMenu } from '@/app/components';

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
