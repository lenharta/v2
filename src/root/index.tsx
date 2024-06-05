import React from 'react';
import { Outlet } from 'react-router-dom';
import { RootError } from './root-error';
import { StoreProvider } from '@/store';

type RootFactory = React.FC<{}> & {
  Error: typeof RootError;
};

const Root: RootFactory = ({}) => (
  <StoreProvider>
    <Outlet />
  </StoreProvider>
);

Root.displayName = '@v2/Root';
Root.Error = RootError;
export { Root };
