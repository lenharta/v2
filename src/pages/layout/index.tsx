import React from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutError } from './LayoutError';
import { StoreProvider } from '@/app/store/provider';

type LayoutFactory = React.FC<{}> & {
  Error: typeof LayoutError;
};

const Layout: LayoutFactory = ({}) => (
  <StoreProvider>
    <Outlet />
  </StoreProvider>
);

Layout.Error = LayoutError;
Layout.displayName = '@v2/Layout';
export { Layout };
