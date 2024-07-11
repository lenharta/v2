import * as React from 'react';
import * as Router from 'react-router-dom';
import { StoreProvider } from '@/app/store';
import { codeThemeDark, codeThemeLight, ShikiProvider } from '@/app/shiki';

import { Side } from '../Side';
import { Main } from '../Main';
import { Header } from '../Header';

interface LayoutProps {
  children?: React.ReactNode | undefined;
}

type LayoutFactory = React.FC<LayoutProps> & {
  Side: typeof Side;
  Main: typeof Main;
  Header: typeof Header;
};

async function loadShiki() {
  const { getHighlighter } = await import('shikiji');

  const shiki = await getHighlighter({
    langs: ['tsx', 'scss', 'html', 'bash', 'json'],
    themes: [codeThemeLight, codeThemeDark],
  });

  return shiki;
}

const Layout: LayoutFactory = ({}) => {
  return (
    <StoreProvider>
      <ShikiProvider loadShiki={loadShiki}>
        <div className="v2-layout">
          <Layout.Header />
          <Layout.Side />
          <Layout.Main>
            <Router.Outlet />
          </Layout.Main>
        </div>
      </ShikiProvider>
    </StoreProvider>
  );
};

Layout.Side = Side;
Layout.Main = Main;
Layout.Header = Header;
Layout.displayName = '@v2/App.Layout';
export { Layout, type LayoutProps, type LayoutFactory };
