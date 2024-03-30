import { Layout } from './components';
import { ThemeProvider } from './store';

export function Root() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}
