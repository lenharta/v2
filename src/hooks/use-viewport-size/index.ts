import * as React from 'react';
import { Dimensions } from '@/types/common';
import { useEventListener } from '../use-event-listener';
import { useIsomorphicEffect } from '../use-isomorphic-effect';

export function useViewportSize(): Dimensions {
  const [windowSize, setWindowSize] = React.useState<Dimensions>({ width: 0, height: 0 });

  const onSizeChange = React.useCallback(() => {
    setWindowSize({
      height: window.innerHeight || 0,
      width: window.innerWidth || 0,
    });
  }, []);

  useEventListener('resize', onSizeChange);
  useEventListener('orientationchange', onSizeChange);
  useIsomorphicEffect(onSizeChange, []);

  return windowSize;
}
