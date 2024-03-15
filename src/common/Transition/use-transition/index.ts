import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TransitionStatus, UseTransitionOptions } from '../types';
import { useDidUpdate } from '@/hooks';

export function useTransition(props: UseTransitionOptions) {
  const {
    mounted,
    duration,
    exitDuration,
    reducedMotion,
    timingFunction,
    onEnter,
    onExit,
    onEntered,
    onExited,
  } = props;

  const [transitionDuration, setTransitionDuration] = React.useState(reducedMotion ? 0 : duration);
  const [transitionStatus, setTransitionStatus] = React.useState<TransitionStatus>(
    mounted ? 'entered' : 'exited'
  );

  const timeoutRef = React.useRef<number>(-1);
  const frameRef = React.useRef(-1);

  const onStateChange = (shouldMount: boolean) => {
    const preHandler = shouldMount ? onEnter : onExit;
    const handler = shouldMount ? onEntered : onExited;

    window.clearTimeout(timeoutRef.current);

    const newTransitionDuration = reducedMotion ? 0 : shouldMount ? duration : exitDuration;
    setTransitionDuration(newTransitionDuration);

    if (newTransitionDuration === 0) {
      typeof preHandler === 'function' && preHandler;
      typeof handler === 'function' && handler;
      setTransitionStatus(shouldMount ? 'entered' : 'exited');
    } else {
      frameRef.current = requestAnimationFrame(() => {
        ReactDOM.flushSync(() => {
          setTransitionStatus(shouldMount ? 'pre-entering' : 'pre-exiting');
        });

        frameRef.current = requestAnimationFrame(() => {
          typeof preHandler === 'function' && preHandler();
          setTransitionStatus(shouldMount ? 'entering' : 'exiting');

          timeoutRef.current = window.setTimeout(() => {
            typeof handler === 'function' && handler();
            setTransitionStatus(shouldMount ? 'entered' : 'exited');
          }, newTransitionDuration);
        });
      });
    }
  };

  useDidUpdate(() => {
    onStateChange(mounted);
  }, [mounted]);

  React.useEffect(
    () => () => {
      window.clearTimeout(timeoutRef.current);
      cancelAnimationFrame(frameRef.current);
    },
    []
  );
  return {
    transitionStatus,
    transitionDuration,
    transitionTimingFunction: timingFunction || 'ease',
  };
}
