import * as React from 'react';
import { Core } from '@/types';
import { getScrollPosition } from '@/utils';

const initialPosition: Core.ScrollPosition = { x: 0, y: 0 };

export const useScrollPosition = () => {
  const [position, setPosition] = React.useState(initialPosition);

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

  return [position, scrollTo] as const;
};
