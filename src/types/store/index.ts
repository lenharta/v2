import { I18N } from '../i18n';
import { Theme } from '../theme';

export declare namespace Store {
  interface Middleware<T> {
    read: () => boolean;
    fetch: () => T | null;
    write: (data: T) => boolean;
    clear: () => boolean;
  }

  export type State = Theme.State & {
    nonce: () => string;
    lang: I18N.LANGUAGE_CODE;
    error?: boolean | undefined;
    session?: string | undefined;
    loading?: boolean | undefined;
    sideOpen?: boolean | undefined;
    menuOpen?: boolean | undefined;
    searchOpen?: boolean | undefined;
  };

  export type Context = {
    state: State;
    dispatch: React.Dispatch<Partial<Store.State>>;
  };
}
