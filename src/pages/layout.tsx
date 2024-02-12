import { Outlet } from 'react-router-dom';
import { StoreProvider, ThemeProvider } from '@/store';

export function RootLayout() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </StoreProvider>
  );
}
