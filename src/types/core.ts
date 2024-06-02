import {
  DATA_CORE_MAP_ALIGN,
  DATA_CORE_MAP_AXIS,
  DATA_CORE_MAP_LENGTH,
  DATA_CORE_MAP_ORIENTATION,
  DATA_CORE_MAP_SIDE,
  DATA_CORE_MAP_SIZE,
  DATA_CORE_MAP_SIZE_COMPACT,
  DATA_CORE_MAP_SIZE_EXPANDED,
  DATA_EVENT_MAP_KEYBOARD_KEYCODES,
  DATA_EVENT_MAP_KEYBOARD_KEYS,
} from '@/data';

export declare namespace Core {
  export type CSS = React.CSSProperties;

  export type ViableRef<T> = React.Ref<T> | undefined;

  export type KeyboardSide = 'left-side' | 'right-side';
  export type KeyboardRegion = 'general keys' | 'modifier keys';
  export type KeyboardLocation = KeyboardRegion | KeyboardSide;

  export type KeyboardKey = keyof typeof DATA_EVENT_MAP_KEYBOARD_KEYS;
  export type KeyboardKeyCode = keyof typeof DATA_EVENT_MAP_KEYBOARD_KEYCODES;
  export type KeyboardDataObject = { key: KeyboardKey; code: number; location: KeyboardLocation[] };

  export type Size = keyof typeof DATA_CORE_MAP_SIZE;
  export type SizeCompact = keyof typeof DATA_CORE_MAP_SIZE_COMPACT;
  export type SizeExpanded = keyof typeof DATA_CORE_MAP_SIZE_EXPANDED;

  export type Axis = keyof typeof DATA_CORE_MAP_AXIS;
  export type Side = keyof typeof DATA_CORE_MAP_SIDE;
  export type Align = keyof typeof DATA_CORE_MAP_ALIGN;
  export type Length = keyof typeof DATA_CORE_MAP_LENGTH;
  export type Placement = Side | `${Side}-${Align}`;
  export type Orientation = keyof typeof DATA_CORE_MAP_ORIENTATION;

  export type CoordProps = { [key in Axis]: number };
  export type SideProps = { [key in Side]: number };
  export type RectProps = CoordProps & DimensionProps;
  export type DimensionProps = { [key in Length]: number };
  export type ClientRectProps = RectProps & SideProps;

  export type TitleElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  export type TitleElementProps = Record<TitleElement, boolean | undefined>;

  export type InteractionType = 'default' | 'clickable' | 'expandable' | 'selectable';
  export type InteractionState =
    | 'default'
    | 'hovered'
    | 'pressed'
    | 'focused'
    | 'disabled'
    | 'selected'
    | 'expanded';

  export type LayoutProps = {
    children?: React.ReactNode | undefined;
  };

  export type GroupProps = LayoutProps & {
    orientation?: Orientation | undefined;
  };

  export type ContentProps = LayoutProps & {
    leftContent?: React.ReactNode | undefined;
    rightContent?: React.ReactNode | undefined;
  };

  export type Item = {
    value: string;
    label?: string | undefined;
    disabled?: boolean | undefined;
  };

  export type ItemParsed = {
    value: string;
    label: string;
    disabled?: boolean | undefined;
  };

  export type ItemGroup = {
    group: string;
    items: (string | Item | ItemGroup)[];
  };

  export type ItemGroupParsed = {
    group: string;
    items: (ItemParsed | ItemGroupParsed)[];
  };

  export type InlineStylesMediaQuery = {
    styles: React.CSSProperties;
    query: string;
  };

  export type InlineStyles = {
    selector: string;
    styles?: React.CSSProperties | undefined;
    media?: InlineStylesMediaQuery[] | undefined;
  };

  export type TransitionState = 'in' | 'out';
  export type TransitionStatus =
    | 'entering'
    | 'exiting'
    | 'entered'
    | 'exited'
    | 'pre-entering'
    | 'pre-exiting';

  export type TransitionStyle = {
    transitionProperty: React.CSSProperties['transitionProperty'];
    common?: React.CSSProperties | undefined;
    out: React.CSSProperties;
    in: React.CSSProperties;
  };

  export type TransitionOptions = {
    mounted: boolean;
    duration: number;
    exitDuration: number;
    timingFunction: React.CSSProperties['transitionTimingFunction'];
    reducedMotion?: boolean | undefined;
    onEntered?: (() => void) | undefined;
    onExited?: (() => void) | undefined;
    onEnter?: (() => void) | undefined;
    onExit?: (() => void) | undefined;
  };

  export type TransitionProps = {
    mounted: boolean;
    duration?: number | undefined;
    transition?: TransitionStyle | undefined;
    keepMounted?: boolean | undefined;
    exitDuration?: number | undefined;
    timingFunction?: React.CSSProperties['transitionTimingFunction'] | undefined;
    children: (styles: React.CSSProperties) => JSX.Element;
    onEntered?: (() => void) | undefined;
    onExited?: (() => void) | undefined;
    onEnter?: (() => void) | undefined;
    onExit?: (() => void) | undefined;
  };

  export type TransitionStyleInput = {
    state: TransitionStatus;
    duration: number;
    transition: TransitionStyle;
    timingFunction: React.CSSProperties['transitionTimingFunction'];
  };

  export type UseTransitionReturn = {
    transitionTimingFunction: React.CSSProperties['transitionTimingFunction'];
    transitionStatus: TransitionStatus;
    transitionDuration: number;
  };

  export type ScrollPosition = {
    x: number;
    y: number;
  };

  export type ScrollOptions = {
    behavior?: ScrollBehavior;
  };

  export type ScrollToOptions = ScrollOptions & {
    left?: number;
    top?: number;
  };

  export type FloatingDir = 'ltr' | 'rtl';
  export type FloatingSide = Side;
  export type FloatingAlign = Align;
  export type FloatingWidth = 'target' | React.CSSProperties['width'] | null;
  export type FloatingStrategy = 'absolute' | 'fixed';
  export type FloatingPlacement = FloatingSide | `${FloatingSide}-${FloatingAlign}`;

  export type FloatingMiddleware = {
    inline?: boolean | undefined;
    shift?: boolean | undefined;
    size?: boolean | undefined;
    flip?: boolean | undefined;
  };

  export type FloatingAxis = {
    mainAxis?: number | undefined;
    crossAxis?: number | undefined;
    alignAxis?: number | undefined;
  };

  export type FloatingPayload = {
    opened?: boolean;
    floating: {
      update: () => void;
      refs: {
        reference: React.MutableRefObject<any>;
        floating: React.MutableRefObject<any>;
      };
    };
    placementDependencies?: React.DependencyList | any[];
    placement: FloatingPlacement;
  };

  export type FloatingOptions = {
    opened?: boolean | undefined;
    offset: number | FloatingAxis;
    placement: FloatingPlacement;
    width?: FloatingWidth | undefined;
    strategy?: FloatingStrategy | undefined;
    middleware?: FloatingMiddleware | undefined;
    placementDependencies?: React.DependencyList | any[] | undefined;
    onPlacementChange?: ((placement: FloatingPlacement) => void) | undefined;
    onChange?: ((opened: boolean) => void) | undefined;
    onClose?: (() => void) | undefined;
    onOpen?: (() => void) | undefined;
  };
}
