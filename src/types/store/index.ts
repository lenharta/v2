import { I18n } from '../i18n';
import { Theme } from '../theme';

export declare namespace Store {
  export type ThemeState = {
    dir: Theme.Dir;
    mode: Theme.Mode;
    icons: 'fill' | 'outline';
    accent: Theme.Color;
    language: I18n.LanguageCode;
  };

  export type State = ThemeState & {
    nonce: () => string;
    error?: boolean | undefined;
    session?: string | undefined;
    loading?: boolean | undefined;
    resultOpen?: boolean | undefined;
  };

  export type StateContextValue = State;
  export type DispatchContextValue = (update: Partial<State>) => void;

  export type LocalState = ThemeState;
  export type SessionState = { session?: string | undefined };

  export type SessionActions = {
    key: string;
    read(): boolean;
    write(data: SessionState): boolean;
    fetch(): SessionState | null;
    clear(): boolean;
    connect(): void;
  };

  export type LocalActions = {
    key: string;
    read(): boolean;
    write(data: LocalState): boolean;
    fetch(): LocalState | null;
    clear(): boolean;
  };
}
