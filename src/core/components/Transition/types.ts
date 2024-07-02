type TransitionPhase = 'in' | 'out';

type TransitionStatus =
  | 'pre-entering'
  | 'pre-exiting'
  | 'entering'
  | 'exiting'
  | 'entered'
  | 'exited';

type TransitionStyle = {
  transitionProperty: React.CSSProperties['transitionProperty'];
  common?: React.CSSProperties | undefined;
  out: React.CSSProperties;
  in: React.CSSProperties;
};

type TransitionActions = {
  onEntered?: (() => void) | undefined;
  onExited?: (() => void) | undefined;
  onEnter?: (() => void) | undefined;
  onExit?: (() => void) | undefined;
};

type TransitionOptions = TransitionActions & {
  mounted: boolean;
  duration: number;
  exitDuration: number;
  timingFunction: React.CSSProperties['transitionTimingFunction'];
  reducedMotion?: boolean | undefined;
};

type TransitionProps = TransitionActions & {
  mounted: boolean;
  duration?: number | undefined;
  transition?: TransitionStyle | undefined;
  keepMounted?: boolean | undefined;
  exitDuration?: number | undefined;
  timingFunction?: React.CSSProperties['transitionTimingFunction'] | undefined;
  children: (styles: React.CSSProperties) => JSX.Element;
};

type TransitionStyleInput = {
  timingFunction: React.CSSProperties['transitionTimingFunction'];
  transition: TransitionStyle;
  duration: number;
  state: TransitionStatus;
};

type UseTransitionReturn = {
  transitionTimingFunction: React.CSSProperties['transitionTimingFunction'];
  transitionStatus: TransitionStatus;
  transitionDuration: number;
};

export type {
  TransitionPhase,
  TransitionStatus,
  TransitionStyle,
  TransitionActions,
  TransitionOptions,
  TransitionProps,
  TransitionStyleInput,
  UseTransitionReturn,
};
