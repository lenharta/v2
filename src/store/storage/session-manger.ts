import { generateRandomId } from '@/utils';

export const sessionManager = (key: string) => {
  const connect = () => generateRandomId(16);

  const read = (): boolean => {
    try {
      const res = window.sessionStorage.getItem(key);
      return !!res;
    } catch (error: any) {
      console.error(`ERROR:[@v2/storage/session]: Check 'READ' method @ ${key}`);
      return false;
    }
  };

  const write = (): boolean => {
    try {
      window.sessionStorage.setItem(key, connect());
      return true;
    } catch (error: any) {
      console.error(`ERROR:[@v2/storage/session]: Check 'WRITE' method @ ${key}`);
      return false;
    }
  };

  const fetch = (): string | null => {
    try {
      return window.sessionStorage.getItem(key);
    } catch (error: any) {
      console.error(`ERROR:[@v2/storage/session]: Check 'FETCH' method @ ${key}`);
      return null;
    }
  };

  return { read, write, fetch };
};
