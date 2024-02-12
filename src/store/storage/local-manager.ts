import { deserializeJSON, serializeJSON } from '@/utils';

export function localManager<T extends Record<string, any>>(key: string) {
  const read = (): boolean => {
    try {
      const res = window.localStorage.getItem(key);
      return !!res;
    } catch (error: any) {
      console.error(`ERROR:[@v2/storage/local]: Check 'READ' method @ ${key}`);
      return false;
    }
  };

  const write = (data: T): boolean => {
    try {
      window.localStorage.setItem(key, serializeJSON(data));
      return true;
    } catch (error: any) {
      console.error(`ERROR:[@v2/storage/local]: Check 'WRITE' method @ ${key}`);
      return false;
    }
  };

  const fetch = (): T | null => {
    try {
      return deserializeJSON<T>(window.localStorage.getItem(key)!) as T;
    } catch (error: any) {
      console.error(`ERROR:[@v2/storage/local]: Check 'FETCH' method @ ${key}`);
      return null;
    }
  };

  return { read, write, fetch };
}
