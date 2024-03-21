export type TransitionStatus =
  | 'entering'
  | 'exiting'
  | 'entered'
  | 'exited'
  | 'pre-entering'
  | 'pre-exiting';

export interface UseTransitionOptions {
  mounted: boolean;
  duration: number;
  exitDuration: number;
  timingFunction: React.CSSProperties['transitionTimingFunction'];
  onEnter?: () => void;
  onExit?: () => void;
  onEntered?: () => void;
  onExited?: () => void;
  // option for now, relocate to theme provider
  reducedMotion?: boolean;
}

export interface TransitionStyle {
  transitionProperty: React.CSSProperties['transitionProperty'];
  common?: React.CSSProperties;
  out: React.CSSProperties;
  in: React.CSSProperties;
}

export interface TransitionProps {
  mounted: boolean;
  duration?: number;
  transition?: TransitionStyle;
  keepMounted?: boolean;
  exitDuration?: number;
  timingFunction?: React.CSSProperties['transitionTimingFunction'];
  children: (styles: React.CSSProperties) => JSX.Element;
  onExit?: () => void;
  onEnter?: () => void;
  onExited?: () => void;
  onEntered?: () => void;
}

export interface TransitionStyleInput {
  state: TransitionStatus;
  duration: number;
  transition: TransitionStyle;
  timingFunction: React.CSSProperties['transitionTimingFunction'];
}
