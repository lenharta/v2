import * as React from 'react';
import { getScrollPosition, scrollTo } from '@/utils';

export function useScrollPosition() {
  const INITIAL_STATE = { x: 0, y: 0 };

  const [position, setPosition] = React.useState<{ x: number; y: number }>(INITIAL_STATE);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setPosition(getScrollPosition()));
      window.addEventListener('resize', () => setPosition(getScrollPosition()));
    }
    return () => {
      window.removeEventListener('scroll', () => setPosition(getScrollPosition()));
      window.removeEventListener('resize', () => setPosition(getScrollPosition()));
    };
  }, []);

  React.useEffect(() => {
    setPosition(getScrollPosition());
  }, []);

  return [position, scrollTo];
}
