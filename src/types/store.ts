import { I18N } from './i18n';
import { Theme } from './theme';
import {
  DATA_STORE_STORAGE_LOCATION,
  DATA_STORE_STORAGE_LOCATION_KEY,
  DATA_STORE_STORAGE_ROOT_ATTRIBUTE,
} from '@/data';

export declare namespace Store {
  export type State = {
    session?: string | undefined;
    language: I18N.LanguageCode;
    accent: Theme.Color;
    mode: Theme.Mode;
    dir: Theme.Dir;
  };

  export type Context = {
    session: string;
    language: I18N.LanguageCode;
    accent: Theme.Color;
    mode: Theme.Mode;
    dir: Theme.Dir;
  };

  export type StorageKey = keyof typeof DATA_STORE_STORAGE_LOCATION_KEY;
  export type StorageLocation = keyof typeof DATA_STORE_STORAGE_LOCATION;
  export type StorageAttributes = keyof typeof DATA_STORE_STORAGE_ROOT_ATTRIBUTE;

  export type StorageProps = Partial<{
    session: string;
    language: I18N.LanguageCode;
    accent: Theme.Color;
    mode: Theme.Mode;
    dir: Theme.Dir;
  }>;

  export type Props<T extends State = State> = {
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
}
