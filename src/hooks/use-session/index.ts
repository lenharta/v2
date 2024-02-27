import { generateRandomId } from '@/utils';

const SESSION_KEY = 'local-session-key';

export const useSession = () => {
  return {
    read(): boolean {
      try {
        const res = window.localStorage.getItem(SESSION_KEY);
        return !!res;
      } catch (error: any) {
        console.error(`ERROR:[@v2/session]: Check 'READ' method @ ${SESSION_KEY}`);
        return false;
      }
    },
    fetch(): string | null {
      try {
        return window.localStorage.getItem(SESSION_KEY);
      } catch (error: any) {
        console.error(`ERROR:[@v2/session]: Check 'FETCH' method @ ${SESSION_KEY}`);
        return null;
      }
    },
    write(): boolean {
      try {
        window.localStorage.setItem(SESSION_KEY, generateRandomId(16));
        return true;
      } catch (error: any) {
        console.error(`ERROR:[@v2/session]: Check 'WRITE' method @ ${SESSION_KEY}`);
        return false;
      }
    },
  };
};
