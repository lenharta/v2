import { Layout } from './components';
import { ThemeProvider } from './store';
import { AppProvider } from './store/app';

export function Root() {
  return (
    <AppProvider>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </AppProvider>
  );
}
