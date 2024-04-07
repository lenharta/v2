import * as React from 'react';
import { Core } from '@/types';
import { useIsomorphicEffect } from '@/hooks';

const CONFIG = {
  easing: 'cubic-bezier(0.4, 0.14, 0.3, 1)',
  duration: { entrance: 800, exit: 800 },
  transition: {
    transitionProperty: 'color, background-color, opacity',
    out: { opacity: 0 },
    in: { opacity: 1 },
  },
};

type PageTransitonProps = { pathname?: string };
type PageTransitionReturn = {
  state?: boolean | undefined;
  config: Omit<Core.TransitionProps, 'children'>;
};

export function usePageTransition(props: PageTransitonProps): PageTransitionReturn {
  const { pathname } = props;
  const [mounted, setMounted] = React.useState<boolean>(false);

  useIsomorphicEffect(() => {
    if (mounted !== true) {
      setMounted(true);
    }
  }, [pathname]);

  return {
    config: {
      mounted,
      duration: CONFIG.duration.entrance,
      exitDuration: CONFIG.duration.exit,
      timingFunction: CONFIG.easing,
      transition: CONFIG.transition,
    },
  };
}
