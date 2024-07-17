import * as React from 'react';
import { getScrollPosition } from '@utils';

interface ScrollPosition {
  x: number;
  y: number;
}

const initialPosition: ScrollPosition = { x: 0, y: 0 };

const useScrollPosition = () => {
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

export { useScrollPosition };
