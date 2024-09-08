import * as React from 'react';
import * as Router from 'react-router-dom';
import { Core } from '@/types';
import { StoreProvider } from '@/app';

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
