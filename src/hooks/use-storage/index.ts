import { JSONDeserialize, JSONSerialize } from '@/utils';

const STORAGE_LOCATION_LOOKUP = {
  local: 'localStorage',
  session: 'sessionStorage',
} as const;

interface StorageProps {
  type?: keyof typeof STORAGE_LOCATION_LOOKUP;
}

function useStorage<T extends Record<string, any> = {}>(props?: StorageProps) {
  const { type = 'local' } = props ?? {};
  const location = STORAGE_LOCATION_LOOKUP[type];
  const storage = window[location];

  const read = (): boolean => {
    try {
      return !!storage.getItem('local');
    } catch (error: any) {
      console.error(`[@v2/store/${location}]: check 'READ' method @ ${type}`);
      return false;
    }
  };

  const fetch = (): T | null => {
    try {
      return JSONDeserialize<T>(storage.getItem('local')!) as T;
    } catch (error: any) {
      console.error(`[@v2/store/${location}]: check 'FETCH' method @ ${type}`);
      return null;
    }
  };

  const write = (data: T): boolean => {
    try {
      storage.setItem(type, JSONSerialize(data));
      return true;
    } catch (error: any) {
      console.error(`[@v2/store/${location}]: check 'WRITE' method @ ${type}`);
      return false;
    }
  };

  return {
    read,
    fetch,
    write,
  };
}

export { useStorage };
