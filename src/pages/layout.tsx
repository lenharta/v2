import { StoreProvider, ThemeProvider } from '@/store';
import { Outlet } from 'react-router-dom';

export function RootLayout() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </StoreProvider>
  );
}
