import * as React from 'react';

interface DisclosureProps {
  style?: React.CSSProperties | undefined;
  isOpen: boolean;
  children?: React.ReactNode | undefined;
  transitionDuration?: React.CSSProperties['transitionDuration'] | number | undefined;
  transitionTimingFunction?: React.CSSProperties['transitionTimingFunction'] | undefined;
  onTransitionEnd?: (() => void) | undefined;
}

export type { DisclosureProps };
