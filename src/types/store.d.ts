import * as React from 'react';
import { Location } from 'react-router-dom';

export namespace Store {
  export type StorageLocation = 'localStorage' | 'sessionStorage';
  export type StorageLocationKey = 'local' | 'session';
  export type ThemeAttributeKey = 'dir' | 'mode' | 'accent';

  export type Dir = 'ltr' | 'rtl';
  export type Mode = 'dim' | 'dark' | 'light';
  export type Avatar = 'person' | 'robot';
  export type Accent =
    | 'red'
    | 'orange'
    | 'amber'
    | 'yellow'
    | 'lime'
    | 'green'
    | 'emerald'
    | 'teal'
    | 'cyan'
    | 'sky'
    | 'blue'
    | 'indigo'
    | 'violet'
    | 'purple'
    | 'fuchsia'
    | 'pink'
    | 'rose';

  export type LanguageCode = 'ar' | 'fr' | 'de' | 'es' | 'en' | 'ja';
  export type LanguageName = 'arabic' | 'french' | 'german' | 'spanish' | 'english' | 'japanese';

  export interface Language {
    code: LanguageCode;
    name: LanguageName;
  }

  export interface ThemeState {
    dir: Dir;
    mode: Mode;
    lang: Language;
    accent: Accent;
    avatar: Avatar;
  }

  export interface ThemeContextValue {
    dir: Dir;
    mode: Mode;
    lang: Language;
    accent: Accent;
    avatar: Avatar;
  }

  export interface ThemeDispatchValue {
    setDir(dir: Dir): void;
    setMode(mode: Mode): void;
    setLang(lang: Language): void;
    setAvatar(avatar: Avatar): void;
    setAccent(accent: Accent): void;
  }

  export interface Middleware {
    read(): boolean;
    fetch(): Store.AppState | null;
    write(data: Store.AppState): boolean;
  }

  export interface AppState {
    sessionKey?: string | undefined;
    searchQuery?: string | undefined;
    isTransition?: boolean | undefined;
    isSearchOpen?: boolean | undefined;
    isMenuOpen?: boolean | undefined;
    isLoading?: boolean | undefined;
    isSplash?: boolean | undefined;
    isError?: string | undefined;
  }

  export interface AppContextValue {
    nonce: () => string;
    location: Location<any>;
    middleware: Middleware;
    sessionKey?: string;
    searchQuery?: string | undefined;
    isTransition?: boolean | undefined;
    isSearchOpen?: boolean | undefined;
    isMenuOpen?: boolean | undefined;
    isLoading?: boolean | undefined;
    isSplash?: boolean | undefined;
    isError?: string | undefined;
  }

  export type AppDispatch = React.Dispatch<AppState>;
  export type ThemeDispatch = React.Dispatch<ThemeState>;

  export interface AppStateProps {
    state: AppState;
    dispatch: AppDispatch;
  }

  interface CreateSession<T extends Store.AppState> {
    dispatch: Store.AppDispatch;
    sessionKey?: string | undefined;
    middleware: Middleware;
  }

  export interface ProviderProps {
    children: React.ReactNode;
  }
}
