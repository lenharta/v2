import * as React from 'react';
import { useIsomorphicEffect } from '@/hooks';
import { TransitionProps } from '@/common/Transition/types';

export function usePageTransition(pathname?: string): Omit<TransitionProps, 'children'> {
  const [mounted, setMounted] = React.useState<boolean>(false);

  useIsomorphicEffect(() => {
    if (mounted === false) setMounted(true);
  }, [pathname]);

  return {
    mounted,
    timingFunction: 'cubic-bezier(0.4, 0.14, 0.3, 1)',
    duration: 600,
    transition: {
      transitionProperty: 'opacity',
      in: { opacity: 1, transitionTimingFunction: 'cubic-bezier(0, 0, 0.3, 1)' },
      out: { opacity: 0, transitionTimingFunction: 'cubic-bezier(0.4, 0.14, 1, 1)' },
    },
  };
}
