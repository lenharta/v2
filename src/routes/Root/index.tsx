import React from 'react';
import { Outlet } from 'react-router-dom';
import { RootError } from './error';
import { StoreProvider } from '@/store';
import { Header, Sidebar, InteractionProvider } from '@/common';

type Component = React.FC<{}> & {
  Error: typeof RootError;
};

const Root: Component = ({}) => {
  return (
    <StoreProvider>
      <InteractionProvider>
        <Header />
        <Sidebar />
        <Outlet />
      </InteractionProvider>
    </StoreProvider>
  );
};

Root.displayName = '@v2/Root';
Root.Error = RootError;
export { Root };
