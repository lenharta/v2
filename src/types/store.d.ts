import * as React from 'react';

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

  export interface AppState {
    nonce?: (() => string) | undefined;
    location?: Location | undefined;
    sessionKey?: string | undefined;
    isMenuOpen?: boolean | undefined;
    loading?: boolean | undefined;
    error?: string | undefined;
  }

  export interface AppContextValue {
    nonce: () => string;
    location: Location;
    sessionKey: string;
    isMenuOpen?: boolean | undefined;
    loading?: boolean | undefined;
    error?: string | undefined;
  }

  export type AppDispatch = React.Dispatch<AppState>;
  export type ThemeDispatch = React.Dispatch<ThemeState>;

  export interface AppStateProps {
    state: AppState;
    dispatch: AppDispatch;
  }

  export interface ProviderProps {
    children: React.ReactNode;
  }
}
