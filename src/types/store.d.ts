import * as React from 'react';

export namespace Store {
  export type StorageKey = 'local' | 'session';
  export type StorageLocale = 'localStorage' | 'sessionStorage';
  export type AttributeKey = 'dir' | 'mode' | 'accent';

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

  export interface AppState {
    error?: string;
    loading?: boolean;
    location?: Location;
    sessionKey?: string;
    nonce?: (() => string) | undefined;
  }

  export interface ThemeState {
    dir: Dir;
    mode: Mode;
    lang: Language;
    accent: Accent;
    avatar: Avatar;
  }

  export type AppDispatch = React.Dispatch<AppState>;
  export type ThemeDispatch = React.Dispatch<ThemeState>;

  export interface AppContextValue {
    error?: string | undefined;
    loading?: boolean | undefined;
    location: Location;
    sessionKey: string;
    nonce: () => string;
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

  export interface ProviderProps {
    children: React.ReactNode;
  }
}

// export enum ThemeMode {
//   light = 'light',
//   dark = 'dark',
//   dim = 'dim',
// }

// export enum ThemeAccent {
//   red = 'red',
//   orange = 'orange',
//   amber = 'amber',
//   yellow = 'yellow',
//   lime = 'lime',
//   green = 'green',
//   emerald = 'emerald',
//   teal = 'teal',
//   cyan = 'cyan',
//   sky = 'sky',
//   blue = 'blue',
//   indigo = 'indigo',
//   violet = 'violet',
//   purple = 'purple',
//   fuchsia = 'fuchsia',
//   pink = 'pink',
//   rose = 'rose',
// }

// export enum ThemeDir {
//   ltr = 'left-to-right',
//   rtl = 'right-to-left',
// }

// export enum ThemeAvatar {
//   person = 'avatar-person',
//   robot = 'avatar-robot',
// }

// export enum ThemeLanguage {
//   english = 'en',
//   german = 'de',
//   spanish = 'es',
//   japanese = 'ja',
//   arabic = 'ar',
//   french = 'fr',
// }

// export type Dir = keyof typeof ThemeDir;
// export type Mode = keyof typeof ThemeMode;
// export type Lang = keyof typeof ThemeLanguage;
// export type Avatar = keyof typeof ThemeAvatar;
// export type Accent = keyof typeof ThemeAccent;

// export type StorageType = 'sessionStorage' | 'localStorage';

// export enum lookupRootAttribute {
//   mode = 'data-prefers-color-scheme',
//   accent = 'data-prefers-color-accent',
// }

// export type AppStore = {
//   nonce?: () => string;
//   error?: string;
//   loading?: boolean;
//   location?: Location;
//   sessionId?: string;
//   isMenuOpen?: boolean;
//   isSplashOpen?: boolean;
// };

// export type ThemeStore = {
//   dir: Dir;
//   mode: Mode;
//   lang: Lang;
//   avatar: Avatar;
//   accent: Accent;
// };

// export type AppDispatch = React.Dispatch<Partial<AppStore>>;
// export type ThemeDispatch = React.Dispatch<Partial<ThemeStore>>;

// export type AppContextValue = {
//   nonce?: () => string;
//   error?: string;
//   loading?: boolean;
//   location?: Location;
//   sessionId?: string;
//   isMenuOpen?: boolean;
//   isSplashOpen?: boolean;
// };

// export type ThemeContextValue = {
//   dir: Dir;
//   mode: Mode;
//   lang: Lang;
//   avatar: Avatar;
//   accent: Accent;
// };

// export type ThemeDispatchContextValue = {
//   setDir(dir: Dir): void;
//   setMode(mode: Mode): void;
//   setLang(lang: Lang): void;
//   setAvatar(avatar: Avatar): void;
//   setAccent(accent: Accent): void;
// };
