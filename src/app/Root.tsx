import { Outlet } from 'react-router-dom';
import { StoreProvider, ThemeProvider } from '@/store';

export const Root = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </StoreProvider>
  );
};
