export declare namespace Storage {
  export type Key = 'session' | 'local';
  export type Location = 'sessionStorage' | 'localStorage';
  export type Attributes = 'dir' | 'mode' | 'accent' | 'sessionKey';

  export type Middleware<T extends Record<string, any>> = {
    read: () => boolean;
    fetch: () => T | null;
    write: (data: T) => boolean;
  };
}
