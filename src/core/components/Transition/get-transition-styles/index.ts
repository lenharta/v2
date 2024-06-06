import { TransitionPhase, TransitionStatus, TransitionStyleInput } from '../types';

const TRANSITION_STATE_MAP: Record<TransitionStatus, TransitionPhase> = {
  entering: 'in',
  entered: 'in',
  exiting: 'out',
  exited: 'out',
  'pre-exiting': 'out',
  'pre-entering': 'out',
};

function getTransitionStyles(props: TransitionStyleInput): React.CSSProperties {
  const { state, duration, transition, timingFunction } = props;
  const transitionTimingFunction = timingFunction;
  const transitionDuration = `${duration}ms`;

  return {
    transitionProperty: transition.transitionProperty,
    ...{ transitionDuration, transitionTimingFunction },
    ...transition.common,
    ...transition[TRANSITION_STATE_MAP[state]],
  };
}

export { getTransitionStyles };
