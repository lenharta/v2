import React from 'react';
import { Outlet } from 'react-router-dom';
import { StoreProvider } from '@/app/store';

const Root: React.FC = () => (
  <StoreProvider>
    <Outlet />
  </StoreProvider>
);

Root.displayName = '@v2/Root.Layout';
export { Root };
