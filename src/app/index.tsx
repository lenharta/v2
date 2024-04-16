import { Outlet } from 'react-router-dom';
import { AppProvider, ThemeProvider } from '@/store';
import { Layout, Menu, Splash } from './common';

export default function App() {
  return (
    <AppProvider>
      <ThemeProvider>
        <Splash>
          <Layout>
            <Menu />
            <Layout.Header />
            <Layout.Nav />
            <Layout.Content>
              <Outlet />
            </Layout.Content>
          </Layout>
        </Splash>
      </ThemeProvider>
    </AppProvider>
  );
}
