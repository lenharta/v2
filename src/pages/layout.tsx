import { ThemeProvider } from '@/store';
import { Outlet } from 'react-router-dom';

export function RootLayout() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}
