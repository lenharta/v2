export enum GlobalThemeKey {
  accent = 'accent',
  mode = 'mode',
  dir = 'dir',
}

export enum GlobalAccentColors {
  red = 'red',
  orange = 'orange',
  yellow = 'yellow',
  green = 'green',
  mint = 'mint',
  teal = 'teal',
  cyan = 'cyan',
  blue = 'blue',
  indigo = 'indigo',
  purple = 'purple',
  pink = 'pink',
  brown = 'brown',
}

export enum GlobalLanguageCodes {
  en = 'english',
  es = 'spanish',
  fr = 'french',
  de = 'german',
  zh = 'chinese',
  ja = 'japanese',
  ar = 'arabic',
  ko = 'korean',
}

export enum GlobalWritingModes {
  ltr = 'ltr',
  rtl = 'rtl',
}

export enum GlobalThemeModes {
  light = 'light',
  dark = 'dark',
  dim = 'dim',
}

export enum GlobalRoutePaths {
  home = '/',
  experience = '/experience',
  projects = '/projects',
  toolbox = '/toolbox',
  sandbox = '/sandbox',
  settings = '/settings',
}

export enum GlobalRouteIcons {
  home = 'home',
  experience = 'work',
  projects = 'project',
  toolbox = 'toolbox',
  sandbox = 'stack',
  settings = 'settings',
}

export declare namespace App {
  export type StorageKey = 'session' | 'local';
  export type StorageLocation = 'sessionStorage' | 'localStorage';
  export type StorageAttributes = 'dir' | 'mode' | 'accent';

  export type Store = {
    dir: GlobalWritingModes;
    mode: GlobalThemeModes;
    lang: GlobalLanguageCodes;
    accent: GlobalAccentColors;
    error?: string | undefined;
    query?: string | undefined;
    session?: string | undefined;
    loading?: boolean | undefined;
    menuOpen?: boolean | undefined;
    transition?: boolean | undefined;
    resultOpen?: boolean | undefined;
    splashOpen?: boolean | undefined;
    searchOpen?: boolean | undefined;
    sidebarOpen?: boolean | undefined;
    nonce: () => string;
  };

  export type StoreContextValue = {
    dir: GlobalWritingModes;
    mode: GlobalThemeModes;
    lang: GlobalLanguageCodes;
    accent: GlobalAccentColors;
    error?: string | undefined;
    query?: string | undefined;
    session?: string | undefined;
    loading?: boolean | undefined;
    menuOpen?: boolean | undefined;
    transition?: boolean | undefined;
    resultOpen?: boolean | undefined;
    splashOpen?: boolean | undefined;
    searchOpen?: boolean | undefined;
    sidebarOpen?: boolean | undefined;
    nonce: () => string;
    closePanels: () => void;
  };

  export type LocalStore = Partial<{
    dir: GlobalWritingModes;
    mode: GlobalThemeModes;
    lang: GlobalLanguageCodes;
    accent: GlobalAccentColors;
    session: string;
  }>;

  export type StoreProps<T extends Store = Store> = {
    dispatch: (value: Partial<T>) => void;
    store: T;
  };

  export type Middleware<T extends Record<string, any>> = {
    read: () => boolean;
    fetch: () => T | null;
    write: (data: T) => void;
  };

  export type SessionProps<T extends Record<string, any>> = {
    middleware: Middleware<T>;
    dispatch: React.Dispatch<T>;
    store: T;
  };

  export type SessionReturn<T extends Record<string, any>> = [T, React.Dispatch<T>];
}
