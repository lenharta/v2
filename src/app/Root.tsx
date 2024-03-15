import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { StoreProvider, ThemeProvider } from '@/store';

export const AppContext = React.createContext({});

export const Root = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </StoreProvider>
  );
};
