import { Core } from '@/types';

const STATES: Record<Core.TransitionStatus, Core.TransitionPhase> = {
  entering: 'in',
  entered: 'in',
  exiting: 'out',
  exited: 'out',
  'pre-exiting': 'out',
  'pre-entering': 'out',
};

export function getTransitionStyles(props: Core.TransitionStyleInput): React.CSSProperties {
  const { state, duration, transition, timingFunction } = props;
  const transitionTimingFunction = timingFunction;
  const transitionDuration = `${duration}ms`;

  return {
    transitionProperty: transition.transitionProperty,
    ...{ transitionDuration, transitionTimingFunction },
    ...transition.common,
    ...transition[STATES[state]],
  };
}
