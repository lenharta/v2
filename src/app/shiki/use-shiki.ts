import { useContext } from 'react';
import { ShikiContext } from './context';

export function useShiki() {
  const shiki = useContext(ShikiContext);

  if (!shiki) {
    return (code: string) => ({ code, highlighted: false });
  }
  return shiki;
}
