export enum ACCENT {
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

export enum LANGUAGE {
  en = 'english',
  es = 'spanish',
  fr = 'french',
  de = 'german',
  zh = 'chinese',
  ja = 'japanese',
  ar = 'arabic',
  ko = 'korean',
}

export enum DIR {
  ltr = 'ltr',
  rtl = 'rtl',
}

export enum MODE {
  light = 'light',
  dark = 'dark',
  dim = 'dim',
}

export declare namespace App {
  export type StorageKey = 'session' | 'local';
  export type StorageLocation = 'sessionStorage' | 'localStorage';
  export type StorageAttributes = 'dir' | 'mode' | 'accent';

  export type Store = {
    dir: DIR;
    mode: MODE;
    lang: LANGUAGE;
    accent: ACCENT;
    error?: string | undefined;
    query?: string | undefined;
    session?: string | undefined;
    loading?: boolean | undefined;
    // storage?: Middleware | undefined;
    // location?: Location<any> | undefined;
    menuOpen?: boolean | undefined;
    splashOpen?: boolean | undefined;
    searchOpen?: boolean | undefined;
    transition?: boolean | undefined;
    nonce: () => string;
  };

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
