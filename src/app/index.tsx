import { Outlet } from 'react-router-dom';
import { AppProvider, ThemeProvider } from '@/store';
import { Layout, Menu } from './common';

export default function App() {
  return (
    <AppProvider>
      <ThemeProvider>
        <Layout>
          <Menu />
          <Layout.Header />
          <Layout.Nav />
          <Layout.Content>
            <Outlet />
          </Layout.Content>
        </Layout>
      </ThemeProvider>
    </AppProvider>
  );
}
