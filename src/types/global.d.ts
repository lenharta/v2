import * as React from 'react';

export type Promisable<T> = T | Promise<T>;

export type AnimationConfigKey = 'to' | 'from';
export type AnimationConfigObject = Record<AnimationConfigKey, gsap.TweenVars>;

export interface InlineStylesMediaQuery {
  query: string;
  styles: React.CSSProperties;
}

export interface InlineStylesInput {
  selector: string;
  styles?: React.CSSProperties;
  media?: InlineStylesMediaQuery[];
}

export interface ScrollPosition {
  x: number;
  y: number;
}

export interface LayoutProps {
  lang?: Language | undefined;
  className?: string | undefined;
  children?: React.ReactNode | undefined;
}

export type ContactInfoKey = 'email' | 'phone' | 'url';
export type ContactNameKey = 'last' | 'first' | 'middle';
export type ContactAddressKey = 'street' | 'city' | 'state' | 'zip';

export type ContactInfoObj = Record<ContactInfoKey, string>;
export type ContactNameObj = Record<ContactNameKey, string>;
export type ContactAddressObj = Record<ContactAddressKey, string>;

export interface ContactDataProps {
  name: Partial<ContactNameObj>;
  info: Partial<ContactInfoObj>;
  address: Partial<ContactAddressObj>;
}

export interface ItemObject {
  value: string | number;
  label: string | number;
  disabled?: boolean;
}

export interface ItemObjectParsed {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ItemObjectGroup {
  group: string;
  items: (string | ItemObject)[];
}

export interface ItemObjectGroupParsed {
  group: string;
  items: (ItemObjectParsed | ItemObjectGroupParsed)[];
}

export type ItemInput = string | number | ItemObject | ItemObjectGroup;
export type ItemOutput = ItemObjectParsed | ItemObjectGroupParsed;

export interface FocusProps {
  /** Defines a index for tabbing the interactive element. */
  tabIndex?: number | undefined;
  /** Indicates a `disabled` state for the interactive element. */
  disabled?: boolean | undefined;
  /** Defines if the interactive element should be ignored in the current tab order. */
  excludeTabOrder?: boolean | undefined;
  /** Defines if the interactive element should be focused when `disabled` state is provided. */
  allowDisabledFocus?: boolean | undefined;
}

export interface AriaLabelProps {
  label?: string | undefined;
  value?: string | number | readonly string[] | undefined;
  children?: React.ReactNode | undefined;
  ariaLabel?: React.AriaAttributes['aria-label'];
}

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
  keepMounted?: boolean | undefined;
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

export interface UseTransitionReturn {
  transitionStatus: TransitionStatus;
  transitionDuration: number;
  transitionTimingFunction: React.CSSProperties['transitionTimingFunction'];
}

export type FloatingSide = 'top' | 'left' | 'right' | 'bottom';
export type FloatingWidth = 'target' | React.CSSProperties['width'] | null;
export type FloatingStrategy = 'absolute' | 'fixed';
export type FloatingPlacement = 'end' | 'start';
export type FloatingPosition = FloatingSide | `${FloatingSide}-${FloatingPlacement}`;

export interface FloatingOffsetAxis {
  mainAxis?: number;
  crossAxis?: number;
  alignmentAxis?: number | null;
}

export interface FloatingMiddleware {
  flip: boolean;
  shift: boolean;
  inline?: boolean;
  size?: boolean;
}

export interface UseFloatingOptions {
  position: FloatingPosition;
  opened?: boolean;
  onChange?: (opened: boolean) => void;
  offset: number | FloatingOffsetAxis;
  width?: FloatingWidth;
  strategy?: FloatingStrategy;
  middleware?: FloatingMiddleware;
  positionDependencies?: React.DependencyList | any[];
  onPositionChange?: (position: FloatingPosition) => void;
  onClose?: () => void;
  onOpen?: () => void;
}
