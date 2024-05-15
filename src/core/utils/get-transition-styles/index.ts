import { Core } from '@/types';

const lookupTransitionStatus: Record<Core.TransitionStatus, Core.TransitionState> = {
  entering: 'in',
  entered: 'in',
  exiting: 'out',
  exited: 'out',
  'pre-exiting': 'out',
  'pre-entering': 'out',
};

function getTransitionStyles(props: Core.TransitionStyleInput): React.CSSProperties {
  const { state, duration, transition, timingFunction } = props;
  const transitionTimingFunction = timingFunction;
  const transitionDuration = `${duration}ms`;

  return {
    transitionProperty: transition.transitionProperty,
    ...{ transitionDuration, transitionTimingFunction },
    ...transition.common,
    ...transition[lookupTransitionStatus[state]],
  };
}

export { getTransitionStyles };
