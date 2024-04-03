import { Layout } from './components';
import { AppProvider, ThemeProvider } from '@/store';

export function Root() {
  return (
    <AppProvider>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </AppProvider>
  );
}
