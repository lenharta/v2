import { Store } from '@/types';
import { lookupStorageLocale } from '@/data';
import { deserializeJSON, serializeJSON } from '@/utils';

export function localMiddleware<T extends Record<string, any> = {}>(
  type: Store.StorageKey = 'local'
) {
  const key = lookupStorageLocale[type];
  return {
    read(): boolean {
      try {
        return !!window[key].getItem(key);
      } catch (error: any) {
        console.error(`ERROR:[@v2/storage]: 'READ' method @ ${key}`);
        return false;
      }
    },
    fetch(): T | null {
      try {
        return deserializeJSON<T>(window[key].getItem(key)!) as T;
      } catch (error: any) {
        console.error(`ERROR:[@v2/storage]: 'FETCH' method @ ${key}`);
        return null;
      }
    },
    write(data: T): boolean {
      try {
        window[key].setItem(key, serializeJSON(data));
        return true;
      } catch (error: any) {
        console.error(`ERROR:[@v2/storage]: 'WRITE' method @ ${key}`);
        return false;
      }
    },
  };
}
