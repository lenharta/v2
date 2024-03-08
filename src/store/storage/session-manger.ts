import { serializeJSON, deserializeJSON } from '@/utils';

export const sessionManager = <T extends Record<string, any>>(key: string) => {
  const read = (): boolean => {
    try {
      const res = window.sessionStorage.getItem(key);
      return !!res;
    } catch (error: any) {
      console.error(`ERROR:[@v2/storage/session]: Check 'READ' method @ ${key}`);
      return false;
    }
  };

  const write = (data: T): boolean => {
    try {
      window.sessionStorage.setItem(key, serializeJSON(data));
      return true;
    } catch (error: any) {
      console.error(`ERROR:[@v2/storage/session]: Check 'WRITE' method @ ${key}`);
      return false;
    }
  };

  const fetch = (): T | null => {
    try {
      return deserializeJSON<T>(window.sessionStorage.getItem(key)!) as T;
    } catch (error: any) {
      console.error(`ERROR:[@v2/storage/session]: Check 'FETCH' method @ ${key}`);
      return null;
    }
  };

  return { read, write, fetch };
};
