import * as React from 'react';
import { TransitionProps } from '@/types';

type PageTransitionProps = { pathname?: string };
type PageTransitionReturn = Omit<TransitionProps, 'children'>;
type UsePageTransition = (props: PageTransitionProps) => PageTransitionReturn;

export const usePageTransition: UsePageTransition = ({ pathname }) => {
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (mounted !== true) {
      setMounted(true);
    }
  }, [pathname]);

  return {
    mounted,
    duration: 600,
    exitDuration: 600,
    timingFunction: 'cubic-bezier(0.4, 0.14, 0.3, 1)',
    transition: {
      transitionProperty: 'color, background-color, opacity',
      out: { opacity: 0 },
      in: { opacity: 1 },
    },
  };
};
