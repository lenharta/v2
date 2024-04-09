import * as React from 'react';
import { Core } from '@/types';
import { useEventListener } from '@/hooks/use-event-listener';
import { useIsomorphicEffect } from '@/hooks/use-isomorphic-effect';

export function useViewportSize(): Core.Dimensions {
  const [windowSize, setWindowSize] = React.useState<Core.Dimensions>({ width: 0, height: 0 });

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
