import React from 'react';
import { I18n } from '../types-i18n';
import { Theme } from '../types-theme';

export declare namespace Store {
  export type Locations = 'sessionStorage' | 'localStorage';

  export type State = {
    dir: Theme.Dir;
    lang: I18n.LanguageCode;
    mode: Theme.Mode;
    icons: Theme.Icons;
    accent: Theme.Color;
    nonce: () => string;
    error?: boolean | undefined;
    session?: string | undefined;
    loading?: boolean | undefined;
    resultOpen?: boolean | undefined;
  };

  export type StateContext = State;
  export type DispatchContext = (update: Partial<State>) => void;

  export type ProviderProps = {
    children?: React.ReactNode | undefined;
  };

  export type LocalState = {
    dir: Theme.Dir;
    lang: I18n.LanguageCode;
    mode: Theme.Mode;
    accent: Theme.Color;
  };

  export type LocalActions = {
    key: string;
    read(): boolean;
    write(data: LocalState): boolean;
    fetch(): LocalState | null;
    clear(): boolean;
  };

  export type LocalProps = {
    key?: string | undefined;
  };

  export type SessionState = {
    session?: string | undefined;
  };

  export type SessionProps = {
    key?: string | undefined;
  };

  export type SessionActions = {
    key: string;
    read(): boolean;
    write(data: SessionState): boolean;
    fetch(): SessionState | null;
    clear(): boolean;
    connect(): void;
  };
}
