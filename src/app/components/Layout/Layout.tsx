import * as React from 'react';
import * as Router from 'react-router-dom';
import { StoreProvider } from '@/app';

const css = {
  root: 'v2-app-layout',
};

export interface LayoutProps {}

export interface LayoutComponents {}

export interface LayoutComponent extends LayoutComponents {
  (props: LayoutProps): React.ReactNode;
  displayName: string;
}

export const Layout: LayoutComponent = ({}) => {
  return (
    <StoreProvider>
      <div className={css.root}>
        <Router.Outlet />
      </div>
    </StoreProvider>
  );
};

Layout.displayName = '@v2/App.Layout';
