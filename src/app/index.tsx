import { Layout } from './layout';
import { Outlet } from 'react-router-dom';
import { AppProvider, ThemeProvider } from '@/store';

export default function App() {
  return (
    <AppProvider>
      <ThemeProvider>
        <Layout>
          <Layout.Menu />
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
