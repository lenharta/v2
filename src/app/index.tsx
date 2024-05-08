import { Outlet } from 'react-router-dom';
import { Header, Menu, Sidebar, Splash } from '@/app/components';
import { AppProvider, ThemeProvider } from '@/store';
import React from 'react';

export interface FocusContextValue {
  menuRef?: React.RefObject<HTMLButtonElement> | undefined;
  headerRef?: React.RefObject<HTMLButtonElement> | undefined;
  sidebarRef?: React.RefObject<HTMLDivElement> | undefined;
  searchInputRef?: React.RefObject<HTMLInputElement> | undefined;
  searchClearRef?: React.RefObject<HTMLButtonElement> | undefined;
  searchActionRef?: React.RefObject<HTMLButtonElement> | undefined;
  onFocusMenu: () => void;
  onFocusHeader: () => void;
  onFocusSidebar: () => void;
  onFocusSearchInput: () => void;
  onFocusSearchClear: () => void;
  onFocusSearchAction: () => void;
}

export const FocusContext = React.createContext({} as FocusContextValue);
export const useFocusContext = () => React.useContext(FocusContext);

export const FocusProvider = ({ children }: { children: React.ReactNode }) => {
  const menuRef = React.useRef<HTMLButtonElement>(null);
  const headerRef = React.useRef<HTMLButtonElement>(null);
  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const searchClearRef = React.useRef<HTMLButtonElement>(null);
  const searchActionRef = React.useRef<HTMLButtonElement>(null);

  const onFocusMenu = () => menuRef.current?.focus();
  const onFocusHeader = () => headerRef.current?.focus();
  const onFocusSidebar = () => (sidebarRef.current?.childNodes[0] as HTMLButtonElement).focus();
  const onFocusSearchInput = () => searchInputRef.current?.focus();
  const onFocusSearchClear = () => searchClearRef.current?.focus();
  const onFocusSearchAction = () => searchActionRef.current?.focus();

  return (
    <FocusContext.Provider
      value={{
        menuRef,
        headerRef,
        sidebarRef,
        searchInputRef,
        searchClearRef,
        searchActionRef,
        onFocusMenu,
        onFocusHeader,
        onFocusSidebar,
        onFocusSearchInput,
        onFocusSearchClear,
        onFocusSearchAction,
      }}
    >
      {children}
    </FocusContext.Provider>
  );
};

export default function App() {
  return (
    <AppProvider>
      <ThemeProvider>
        <Splash>
          <FocusProvider>
            <Menu />
            <Header />
            <Sidebar />
          </FocusProvider>
          <Outlet />
        </Splash>
      </ThemeProvider>
    </AppProvider>
  );
}
