export namespace Core {
  export type ViableRef<T> = React.Ref<T> | undefined;

  export type Size3 = 'sm' | 'md' | 'lg';
  export type Size3Label = 'small' | 'medium' | 'large';

  export type Size5 = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  export type Size5Label = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

  export type Size7 = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  export type Size7Label =
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge';

  export type Axis = 'x' | 'y';
  export type Side = 'top' | 'left' | 'right' | 'bottom';
  export type Length = 'width' | 'height';
  export type Alignment = 'start' | 'end';
  export type Direction = 'up' | 'down' | 'left' | 'right';
  export type Orientation = 'horizontal' | 'vertical';
  export type Placement = Side | Position;
  export type Position = `${Side}-${Alignment}`;

  export type Rect = Coords & Dimensions;
  export type Coords = { [key in Axis]: number };
  export type SideObject = { [key in Side]: number };
  export type Dimensions = { [key in Length]: number };
  export type ClientRect = Rect & SideObject;

  export type Scheme = 'primary' | 'secondary' | 'tertiary';
  export type InteractionType = 'base' | 'clickable' | 'expandable' | 'selectable';
  export type InteractionState = 'hovered' | 'pressed' | 'disabled' | 'selected' | 'expanded';

  export interface BaseProps {
    /** Defines a unique identifier for the element. */
    id?: string | undefined;
    /** Defines a default html `class` appended to the classList. */
    className?: string | undefined;
    /** Defines the displayed content of the element. */
    children?: React.ReactNode | undefined;
  }

  export interface GroupProps extends BaseProps {
    /** Specifies the directional layout of the group item elements */
    orientation?: Orientation;
  }

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
    /** Defines accessible text for the element, a shorthand for the `aria-label` property. */
    label?: string | undefined;
    /** Defines a value for a input element, used as a fallback when no label is provided. */
    value?: string | number | readonly string[] | undefined;
    /** Defines the displayed content of the element, used as a fallback when no label is provided. */
    children?: React.ReactNode | undefined;
    /** Defines accessible text for the element. */
    ariaLabel?: React.AriaAttributes['aria-label'] | undefined;
  }

  export interface HeadingProps {
    /** Specifies that the element should be rendered as an `h1` heading. */
    h1?: boolean | undefined;
    /** Specifies that the element should be rendered as an `h2` heading. */
    h2?: boolean | undefined;
    /** Specifies that the element should be rendered as an `h3` heading. */
    h3?: boolean | undefined;
    /** Specifies that the element should be rendered as an `h4` heading. */
    h4?: boolean | undefined;
    /** Specifies that the element should be rendered as an `h5` heading. */
    h5?: boolean | undefined;
    /** Specifies that the element should be rendered as an `h6` heading. */
    h6?: boolean | undefined;
  }

  export interface LinkItemObj {
    /** Defines a destination url for the link item element. */
    to: string;
    /** Defines an accessible label for the link item element. */
    label: string;
    /** Defines a icon path for the link item element. */
    icon?: ICON | undefined;
  }

  export interface ItemObj {
    /** Defines a `value` for the item. */
    value: string | number;
    /** Specifies a `label` for the item. */
    label?: string | number;
    /** Indicates a `disabled` state for the item. */
    disabled?: boolean;
  }

  export interface ItemObjParsed {
    /** Defines a `value` for the item. */
    value: string;
    /** Defines a `label` for the item. */
    label: string;
    /** Indicates a `disabled` state for the item. */
    disabled?: boolean;
  }

  export interface ItemGroupObj {
    /** Defines a unique identifier for the item group. */
    group: string;
    /** Defines the item group data. */
    items: (string | ItemObj)[];
  }

  export interface ItemGroupObjParsed {
    /** Defines a unique identifier for the item group. */
    group: string;
    /** Defines the item group data. */
    items: (ItemObjParsed | ItemGroupObjParsed)[];
  }

  export type ItemInput = string | number | ItemObj | ItemGroupObj;

  export type ItemParsedOutput = ItemObjParsed | ItemGroupObjParsed;

  export interface StylesMediaQuery {
    /** Defines a config object of inline styles. */
    styles: React.CSSProperties;
    /** Defines the css `@media` breakpoint value for the corresponding inline styles. */
    query: string;
  }

  export interface StylesInput {
    /** Defines the css selector that the inline styles will be nested. */
    selector: string;
    /** Specifies a config object of inline styles. */
    styles?: React.CSSProperties | undefined;
    /** Specifies the css media query data. */
    media?: StylesMediaQuery[] | undefined;
  }

  export type TransitionState = 'in' | 'out';

  export type TransitionStatus =
    | 'entering'
    | 'exiting'
    | 'entered'
    | 'exited'
    | 'pre-entering'
    | 'pre-exiting';

  export interface TransitionStyle {
    transitionProperty: React.CSSProperties['transitionProperty'];
    common?: React.CSSProperties | undefined;
    out: React.CSSProperties;
    in: React.CSSProperties;
  }

  export interface TransitionOptions {
    mounted: boolean;
    duration: number;
    exitDuration: number;
    timingFunction: React.CSSProperties['transitionTimingFunction'];
    onEnter?: (() => void) | undefined;
    onExit?: (() => void) | undefined;
    onEntered?: (() => void) | undefined;
    onExited?: (() => void) | undefined;
    // option for now, relocate to theme provider
    reducedMotion?: boolean | undefined;
  }

  export interface TransitionProps {
    mounted: boolean;
    duration?: number | undefined;
    transition?: TransitionStyle | undefined;
    keepMounted?: boolean | undefined;
    exitDuration?: number | undefined;
    timingFunction?: React.CSSProperties['transitionTimingFunction'] | undefined;
    onExit?: (() => void) | undefined;
    onEnter?: (() => void) | undefined;
    onExited?: (() => void) | undefined;
    onEntered?: (() => void) | undefined;
    children: (styles: React.CSSProperties) => JSX.Element;
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

  export interface ScrollPosition {
    /** Defines the current position along the `x` axis. */
    x: number;
    /** Defines the current position along the `y` axis. */
    y: number;
  }

  export interface ScrollOptions {
    behavior?: ScrollBehavior;
  }

  export interface ScrollToOptions extends ScrollOptions {
    left?: number;
    top?: number;
  }

  export type FloatingDir = 'ltr' | 'rtl';
  export type FloatingSide = 'top' | 'left' | 'right' | 'bottom';
  export type FloatingWidth = 'target' | string | number | null;
  export type FloatingStrategy = 'absolute' | 'fixed';
  export type FloatingPlacement = 'end' | 'start';
  export type FloatingPosition = FloatingSide | `${FloatingSide}-${FloatingPlacement}`;

  export interface FloatingOffsetAxis {
    mainAxis?: number | undefined;
    crossAxis?: number | undefined;
    alignmentAxis?: number | null | undefined;
  }

  export interface FloatingMiddleware {
    flip: boolean;
    shift: boolean;
    inline?: boolean | undefined;
    size?: boolean | undefined;
  }

  export interface FloatingOptions {
    offset: number | FloatingOffsetAxis;
    position: FloatingPosition;
    onChange?: ((opened: boolean) => void) | undefined;
    opened?: boolean | undefined;
    width?: FloatingWidth | undefined;
    strategy?: FloatingStrategy | undefined;
    middleware?: FloatingMiddleware | undefined;
    positionDependencies?: React.DependencyList | any[] | undefined;
    onPositionChange?: ((position: FloatingPosition) => void) | undefined;
    onClose?: (() => void) | undefined;
    onOpen?: (() => void) | undefined;
  }

  export interface FloatingPayload {
    opened?: boolean;
    floating: {
      update: () => void;
      refs: {
        reference: React.MutableRefObject<any>;
        floating: React.MutableRefObject<any>;
      };
    };
    positionDependencies?: React.DependencyList | any[];
    position: FloatingPosition;
  }

  export interface FloatingProps {
    width?: FloatingWidth | undefined;
    opened?: boolean | undefined;
    zIndex?: string | number;
    offset?: number | FloatingOffsetAxis;
    children?: React.ReactNode | undefined;
    disabled?: boolean | undefined;
    strategy?: FloatingStrategy | undefined;
    position?: FloatingPosition | undefined;
    middleware?: FloatingMiddleware | undefined;
    closeOnOutsideClick?: boolean | undefined;
    positionDependencies?: React.DependencyList | undefined;
    onPositionChange?: ((position: FloatingPosition) => void) | undefined;
    onChange: (opened?: boolean) => void;
    onClose?: (() => void) | undefined;
    onOpen?: (() => void) | undefined;
  }
}
