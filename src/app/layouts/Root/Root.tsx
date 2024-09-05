import * as React from 'react';
import * as Router from 'react-router-dom';
import { StoreProvider } from '@/app';
import { Core } from '@/types';

export type RootLayoutProps = {};

export type RootLayoutComponent = Core.NamedComponent & {
  (props: RootLayoutProps): React.ReactNode;
};

export const RootLayout: RootLayoutComponent = ({}) => (
  <StoreProvider>
    <Router.Outlet />
  </StoreProvider>
);

RootLayout.displayName = '@v2/Layout.Root';
