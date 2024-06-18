import React from 'react';
import { Outlet } from 'react-router-dom';
import { StoreProvider } from '../store';

const RootLayout: React.FC<{}> = ({}) => (
  <StoreProvider>
    <Outlet />
  </StoreProvider>
);

RootLayout.displayName = '@v2/Root.Layout';
export { RootLayout };
