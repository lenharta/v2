import * as React from 'react';
import * as Router from 'react-router-dom';
import { StoreProvider } from '@/app';

export interface LayoutProps {}

export interface LayoutComponent {
  (props: LayoutProps): React.ReactNode;
  displayName: string;
}

export const Layout: LayoutComponent = ({}) => {
  return (
    <StoreProvider>
      <Router.Outlet />
    </StoreProvider>
  );
};

Layout.displayName = '@v2/App.Layout';
