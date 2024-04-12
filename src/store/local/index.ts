import { Store } from '@/types';
import { LOOKUP_STORE_STORAGE_LOCATION } from '@/data';
import { deserializeJSON, serializeJSON } from '@/utils';

export function localMiddleware<T extends Record<string, any> = {}>(
  type: Store.StorageLocationKey = 'local'
) {
  const key = LOOKUP_STORE_STORAGE_LOCATION[type];
  return {
    read(): boolean {
      try {
        return !!window[key].getItem(key);
      } catch (error: any) {
        console.error(`[@v2/store/local]: Check 'READ' method @ ${key}`);
        return false;
      }
    },
    fetch(): T | null {
      try {
        return deserializeJSON<T>(window[key].getItem(key)!) as T;
      } catch (error: any) {
        console.error(`[@v2/store/local]: Check 'FETCH' method @ ${key}`);
        return null;
      }
    },
    write(data: T): boolean {
      try {
        window[key].setItem(key, serializeJSON(data));
        return true;
      } catch (error: any) {
        console.error(`[@v2/store/local]: Check 'WRITE' method @ ${key}`);
        return false;
      }
    },
  };
}
