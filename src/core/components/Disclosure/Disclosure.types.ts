interface DisclosureProps {
  style?: React.CSSProperties | undefined;
  isOpen?: boolean | undefined;
  children?: React.ReactNode | undefined;
  transitionDuration?: React.CSSProperties['transitionDuration'] | number | undefined;
  transitionTimingFunction?: React.CSSProperties['transitionTimingFunction'] | undefined;
  onTransitionEnd?: (() => void) | undefined;
}

export type { DisclosureProps };
