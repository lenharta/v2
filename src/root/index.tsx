import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/common';
import { RootError } from './RootError';
import { StoreProvider } from '@/store';

type RootFactory = React.FC<{}> & {
  Error: typeof RootError;
};

const Root: RootFactory = ({}) => (
  <StoreProvider>
    <Header />
    <Outlet />
  </StoreProvider>
);

Root.displayName = '@v2/Root';
Root.Error = RootError;
export { Root };
