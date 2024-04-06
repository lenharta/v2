import { Core } from '@/types';
import { useTransition } from '@/core/hooks';
import { getTransitionStyles } from '@/core/utils';

export const Transition = (props: Core.TransitionProps) => {
  const {
    mounted,
    duration = 250,
    keepMounted,
    exitDuration = duration,
    timingFunction = 'ease',
    transition = {
      in: { opacity: 1 },
      out: { opacity: 0 },
      transitionProperty: 'opacity',
    },
    children,
    onEnter,
    onEntered,
    onExit,
    onExited,
  } = props;

  const { transitionDuration, transitionStatus, transitionTimingFunction } = useTransition({
    mounted,
    exitDuration,
    duration,
    timingFunction,
    onEnter,
    onExit,
    onEntered,
    onExited,
  });

  if (transitionDuration === 0) {
    return mounted ? (
      <>{children({})}</>
    ) : keepMounted ? (
      <>{children({ display: 'none' })}</>
    ) : null;
  }

  return transitionStatus === 'exited' ? (
    keepMounted ? (
      children({ display: 'none' })
    ) : null
  ) : (
    <>
      {children(
        getTransitionStyles({
          state: transitionStatus,
          duration: transitionDuration,
          timingFunction: transitionTimingFunction,
          transition,
        })
      )}
    </>
  );
};

Transition.displayName = `@v2/core/Transition`;
