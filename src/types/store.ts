import { I18N } from './i18n';
import { Theme } from './theme';

import {
  DATA_STORE_STORAGE_LOCATION,
  DATA_STORE_STORAGE_LOCATION_KEY,
  DATA_THEME_MAP_ROOT_ATTRIBUTES,
} from '@/data';

export declare namespace Store {
  export type State = {
    nonce: () => string;
    error?: string | undefined;
    query?: string | undefined;
    loading?: boolean | undefined;
    sessionKey?: string | undefined;
    language: I18N.LanguageCode;
    accent: Theme.Color;
    mode: Theme.Mode;
    dir: Theme.Dir;
  };

  export type Context = {
    nonce: () => string;
    error?: string | undefined;
    query?: string | undefined;
    loading?: boolean | undefined;
    sessionKey?: string | undefined;
    language: I18N.LanguageCode;
    accent: Theme.Color;
    mode: Theme.Mode;
    dir: Theme.Dir;
  };

  export type StorageKey = keyof typeof DATA_STORE_STORAGE_LOCATION_KEY;
  export type StorageLocation = keyof typeof DATA_STORE_STORAGE_LOCATION;
  export type StorageAttributes = keyof typeof DATA_THEME_MAP_ROOT_ATTRIBUTES;

  export type StorageState = Partial<{
    sessionKey: string;
    language: I18N.LanguageCode;
    accent: Theme.Color;
    mode: Theme.Mode;
    dir: Theme.Dir;
  }>;

  export type Props = {
    dispatch: (value: Partial<State>) => void;
    store: State;
  };

  export type Middleware = {
    read: () => boolean;
    fetch: () => StorageState | null;
    write: (data: StorageState) => void;
  };

  export type StorageProps = {
    store: State;
    dispatch: React.Dispatch<State>;
    middleware: {
      read: () => boolean;
      fetch: () => StorageState | null;
      write: (data: StorageState) => void;
    };
  };
}
