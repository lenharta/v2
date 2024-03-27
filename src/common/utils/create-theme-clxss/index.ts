import { ThemeProps } from '@/types';
import { objectKeys } from '@/utils';

export function createThemeClxss<T extends ThemeProps, K extends keyof T>(props: T) {
  const keys = objectKeys(props) as K[];
  return keys.reduce((prev, key: K) => {
    if (props[key] !== undefined) {
      const segment = [key, props[key]].join('--');
      const clxss = [' ', segment].join('');
      return prev + clxss;
    }
    return prev;
  }, '');
}
