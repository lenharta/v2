import { StorageType } from '@/types';
import { deserializeJSON, serializeJSON } from '@/utils';

export function localMiddleware<T extends Record<string, any> = {}>(
  type: StorageType = 'localStorage'
) {
  return {
    read(): boolean {
      try {
        return !!window[type].getItem(type);
      } catch (error: any) {
        console.error(`ERROR:[@v2/storage]: 'READ' method @ ${type}`);
        return false;
      }
    },
    fetch(): T | null {
      try {
        return deserializeJSON<T>(window[type].getItem(type)!) as T;
      } catch (error: any) {
        console.error(`ERROR:[@v2/storage]: 'FETCH' method @ ${type}`);
        return null;
      }
    },
    write(data: T): boolean {
      try {
        window[type].setItem(type, serializeJSON(data));
        return true;
      } catch (error: any) {
        console.error(`ERROR:[@v2/storage]: 'WRITE' method @ ${type}`);
        return false;
      }
    },
  };
}
