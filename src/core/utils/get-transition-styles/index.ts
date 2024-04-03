import { TransitionStyleInput } from '@/types';

const transitionStatuses = {
  entering: 'in',
  entered: 'in',
  exiting: 'out',
  exited: 'out',
  'pre-exiting': 'out',
  'pre-entering': 'out',
} as const;

export function getTransitionStyles(props: TransitionStyleInput): React.CSSProperties {
  const { state, duration, transition, timingFunction } = props;
  const transitionTimingFunction = timingFunction;
  const transitionDuration = `${duration}ms`;

  return {
    transitionProperty: transition.transitionProperty,
    ...{ transitionDuration, transitionTimingFunction },
    ...transition.common,
    ...transition[transitionStatuses[state]],
  };
}
