import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useDidUpdate } from '@hooks';
import { TransitionOptions, TransitionStatus, UseTransitionReturn } from '../types';

function useTransition(props: TransitionOptions): UseTransitionReturn {
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

  const frameRef = React.useRef(-1);
  const timeoutRef = React.useRef<number>(-1);

  const initialStatus: TransitionStatus = mounted ? 'entered' : 'exited';
  const initialDuration: typeof duration = reducedMotion ? 0 : duration;

  const [transitionStatus, setTransitionStatus] = React.useState<TransitionStatus>(initialStatus);
  const [transitionDuration, setTransitionDuration] = React.useState(initialDuration);

  const onStateChange = (shouldMount: boolean) => {
    const preHandler = shouldMount ? onEnter : onExit;
    const handler = shouldMount ? onEntered : onExited;

    window.clearTimeout(timeoutRef.current);

    const newTransitionDuration = reducedMotion ? 0 : shouldMount ? duration : exitDuration;

    setTransitionDuration(newTransitionDuration);

    if (newTransitionDuration === 0) {
      typeof handler === 'function' && handler();
      typeof preHandler === 'function' && preHandler();

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

export { useTransition };
