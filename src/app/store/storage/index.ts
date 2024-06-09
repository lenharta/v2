import React from 'react';
import { JSONDeserialize, JSONSerialize } from '@/utils';

function useStorage<T extends Record<string, any>>(props: {
  key?: string | undefined;
  type?: Extract<keyof Window, 'localStorage' | 'sessionStorage'> | undefined;
}) {
  const { key = 'local-store', type = 'localStorage' } = props;

  const read = React.useCallback((): boolean => {
    try {
      return !!window[type].getItem(key);
    } catch (error: any) {
      console.error(`[@v2/store/${type}/${key}] ERROR: CHECK 'READ' METHOD`);
      return false;
    }
  }, [key, type]);

  const fetch = React.useCallback((): T | null => {
    try {
      const payload = window[type].getItem(key);
      return !payload ? null : JSONDeserialize<T>(payload);
    } catch (error: any) {
      console.error(`[@v2/store/${type}/${key}] ERROR: CHECK 'FETCH' METHOD`);
      return null;
    }
  }, [key, type]);

  const write = React.useCallback(
    (data: T): boolean => {
      try {
        window[type].setItem(key, JSONSerialize(data));
        return true;
      } catch (error: any) {
        console.error(`[@v2/store/${type}/${key}] ERROR: CHECK 'WRITE' METHOD`);
        return false;
      }
    },
    [key, type]
  );

  const clear = React.useCallback((): boolean => {
    try {
      window[type].clear();
      return true;
    } catch (error: any) {
      console.error(`[@v2/store/${type}/${key}] ERROR: CHECK 'CLEAR' METHOD`);
      return false;
    }
  }, [key, type]);

  return { key, read, fetch, write, clear };
}

export { useStorage };
