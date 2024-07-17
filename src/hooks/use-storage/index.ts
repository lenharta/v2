import * as React from 'react';
import { JSONDeserialize, JSONSerialize } from '@utils';

interface UseStorageOptions {
  type?: 'localStorage' | 'sessionStorage';
}

function useStorage<T extends Record<string, any>>(opts: UseStorageOptions) {
  const { type = 'localStorage' } = opts;

  const storage = window[type];

  const read = React.useCallback((): boolean => {
    try {
      return !!storage.getItem(type);
    } catch (error: any) {
      console.error(`[@/hooks/use-storage] ERROR: CHECK 'READ' METHOD @${type}`);
      return false;
    }
  }, [type]);

  const fetch = React.useCallback((): T | null => {
    try {
      const payload = storage.getItem(type);
      return !payload ? null : JSONDeserialize<T>(payload);
    } catch (error: any) {
      console.error(`[@/hooks/use-storage] ERROR: CHECK 'FETCH' METHOD @${type}`);
      return null;
    }
  }, [type]);

  const write = React.useCallback(
    (data: T): boolean => {
      try {
        storage.setItem(type, JSONSerialize(data));
        return true;
      } catch (error: any) {
        console.error(`[@/hooks/use-storage] ERROR: CHECK 'WRITE' METHOD @${type}`);
        return false;
      }
    },
    [type]
  );

  const clear = React.useCallback((): boolean => {
    try {
      window[type].clear();
      return true;
    } catch (error: any) {
      console.error(`[@/hooks/use-storage] ERROR: CHECK 'CLEAR' METHOD @${type}`);
      return false;
    }
  }, [type]);

  return { read, fetch, write, clear };
}

export { useStorage };
