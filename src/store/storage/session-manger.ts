import { generateRandomId } from '@/utils';

export const sessionManager = (key: string) => {
  const storage = window.sessionStorage;

  const connect = () => generateRandomId(16);

  const read = async (): Promise<boolean> => {
    try {
      const res = storage.getItem(key);
      return !!res;
    } catch (error: any) {
      console.error(`ERROR:[@v2/storage/session]: Check 'READ' method @ ${key}`);
      return false;
    }
  };

  const write = async (): Promise<boolean> => {
    try {
      storage.setItem(key, connect());
      return true;
    } catch (error: any) {
      console.error(`ERROR:[@v2/storage/session]: Check 'WRITE' method @ ${key}`);
      return false;
    }
  };

  const fetch = async (): Promise<string | null> => {
    try {
      const res = await read();
      return res ? storage.getItem(key) : null;
    } catch (error: any) {
      console.error(`ERROR:[@v2/storage/session]: Check 'FETCH' method @ ${key}`);
      return null;
    }
  };

  return { read, write, fetch };
};
