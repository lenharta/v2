import * as React from 'react';
import { ICON } from '../icon';

export declare namespace Core {
  export type Booleanish = boolean | "false" | "true";

  export type AriaChecked = Booleanish | "mixed";

  export type Defined<T> = { [K in keyof T as undefined extends T[K] ? never : K]: T[K] };
  
  export type CSS<T extends string> = Record<T, string>;

  export type ViableRef<T> = React.Ref<T>;

  export type Filter<T, U extends keyof any> = { [P in Exclude<keyof T, U>]: T[P] };
  
  export type Extend<T = {}, P = {}> = P & Filter<T, keyof P>;

  export type ResolvedProps<T extends Record<string, any>> = {
    [Key in keyof T]-?: T[Key] extends undefined ? never : T[Key];
  };

  export type ElementType = keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;
  
  export type ComponentProps<T, P = {}> = T extends ElementType
    ? Extend<React.ComponentPropsWithoutRef<T>, P>
    : P;

  export type ComponentRefProps<T, P = {}> = T extends ElementType
    ? Extend<React.ComponentPropsWithRef<T>, P>
    : P;

  export interface NamedComponent {
    displayName?: string;
  }

  export interface Component<T, P = {}> extends NamedComponent {
    (props: ComponentProps<T, P>): React.ReactNode;
  }
  
  export interface RenderFunction<T, P = {}> extends NamedComponent {
    (props: P, ref: React.ForwardedRef<T>): React.ReactNode;
  }
  
  export interface ExoticComponent<P = {}> extends NamedComponent {
    (props: P): React.ReactNode;
  }
  
  export interface FactoryPayload {
    ref: any;
    props?: Record<string, any>;
    element: any;
    elements?: Record<string, any>;
    excluded?: any;
  }

  export type FactoryElements<T> = T extends Record<string, any> ? T : Record<string, never>;

  export type ComponentRenderBaseProps<T, P = {}> = T extends ElementType
    ? P & Omit<React.ComponentPropsWithoutRef<T>, keyof P>
    : P;

  export type ComponentReturnBaseProps<T, P = {}> = T extends ElementType
    ? P & Omit<React.ComponentPropsWithRef<T>, keyof P>
    : P;

  export type ComponentRenderProps<P extends FactoryPayload> = P['excluded'] extends keyof any
    ? Omit<React.ComponentPropsWithoutRef<P['element']>, P['excluded']> & P['props'] & { component: P['element'] }
    : React.ComponentPropsWithoutRef<P['element']> & P['props'] & { component: P['element'] };

  export type ComponentReturnProps<P extends FactoryPayload> = P['excluded'] extends keyof any
    ? Omit<React.ComponentPropsWithRef<P['element']>, P['excluded']> & P['props']
    : React.ComponentPropsWithRef<P['element']> & P['props'];

  export type ComponentRenderFunction<P extends FactoryPayload> = {
    (props: ComponentRenderProps<P>, ref: React.ForwardedRef<P['ref']>): React.ReactNode;
    displayName?: string;
  };

  export type ComponentReturnFunction<P extends FactoryPayload> = FactoryElements<P['elements']> & {
    (props: ComponentReturnProps<P>): React.ReactNode;
    displayName?: string;
  };
  
  export type PolymorphicRef<T> = T extends ElementType
    ? React.ComponentPropsWithRef<T>['ref']
    : never;
  
  export type PolymorphicProps<T, P = {}> = T extends ElementType
    ? P & Omit<React.ComponentPropsWithoutRef<T> & Partial<{ component: T; ref: PolymorphicRef<T> }>, keyof P>
    : P & Omit<Partial<{ component: ElementType }>, keyof P>;

  export type PolymorphicRenderProps<P extends FactoryPayload> = P['excluded'] extends keyof any
    ? Omit<PolymorphicProps<P['element'], P['props']>, P['excluded']>
    : PolymorphicProps<P['element'], P['props']>
    
  export type PolymorphicRenderFunction<P extends FactoryPayload> = {
    (props: PolymorphicRenderProps<P>, ref: React.ForwardedRef<P['ref']>): React.ReactNode;
    displayName?: string;
  };
    
  export type PolymorphicReturnProps<T, P extends FactoryPayload> = P['excluded'] extends keyof any
    ? Omit<PolymorphicProps<T, P['props']>, P['excluded']>
    : PolymorphicProps<T, P['props']>
  
  export type PolymorphicReturnFunction<P extends FactoryPayload> = FactoryElements<P['elements']> & {
    <T = P['element']>(props: PolymorphicReturnProps<T, P>): React.ReactNode;
    displayName?: string;
  };
  
  export type Factory<Payload extends FactoryPayload> = Payload;

  export type Axis = 'x' | 'y';
  export type Side = 'bottom' | 'right' | 'left' | 'top';
  export type Align = 'center' | 'start' | 'end';
  export type Length = 'height' | 'width';
  export type Placement = Side | `${Side}-${Align}`;
  
  export type Rect = Coords & Dimensions;
  export type Sides = { [key in Side]: number };
  export type Coords = { [key in Axis]: number };
  export type Dimensions = { [key in Length]: number };
  export type ClientRect = Rect & Sides;

  export type East = 'east'
  export type West = 'west'
  export type North = 'north' | `north-${East | West}`;
  export type South = 'south' | `south-${East | West}`;
  export type Direction = East | West | North | South; 

  export type ScrollOptions = { behavior?: ScrollBehavior };
  export type ScrollPosition = { [Key in Axis]: number };
  export type ScrollToOptions = ScrollToPosition & ScrollOptions;
  export type ScrollToPosition = { left?: number; top?: number };

  export type CodeLanguage = 'js' | 'jsx' | 'ts' | 'tsx' | 'html' | 'css' | 'scss' | 'json' | 'bash'; 
  export type CodeLanguageProps = Partial<Record<CodeLanguage, boolean>>

  export type Status = 'info' | 'warn' | 'error' | 'success';
  export type WritingDir = 'ltr' | 'rtl'
  export type Orientation = 'vertical' | 'horizontal';  
  
  export type SizeGap = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  export type SizeRadius = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  export type SizeCompact = 'sm' | 'md' | 'lg';
  export type SizeRegular = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  export type SizeExpanded = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  
  export type ColorName = 'yellow' | 'blue' | 'cyan' | 'green' | 'grey' | 'magenta' | 'orange' | 'purple' | 'red' | 'slate' | 'stone' | 'teal'
  export type ColorShade = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  export type ColorAlpha = 'A10' | 'A20' | 'A30' | 'A40' | 'A50' | 'A60' | 'A70' | 'A80' | 'A90';
  export type ColorOption = 'yes' | 'no';
  export type ColorScheme = 'light' | 'dark' | 'dim';

  export type Item = { value: string; label?: string; disabled?: boolean };
  export type ItemParsed = { value: string; label: string; disabled?: boolean };
  
  export type ItemGroup = { group: string; items: (string | Item | ItemGroup)[] };
  export type ItemGroupParsed = { group: string; items: (ItemParsed | ItemGroupParsed)[] };
  
  export type InlineMediaQuery = { styles: React.CSSProperties; query: string };
  export type InlineStyle = { selector: string; styles?: React.CSSProperties; media?: InlineMediaQuery[]  };

  export type GroupProps = {
    gap?: SizeGap;
    children?: React.ReactNode;
    className?: string;
    orientation?: Orientation;
  };

  export type LayoutProps<P = {}> = P & { children?: React.ReactNode; className?: string };
  export type ContentProps<P = {}> = P & { leftContent?: React.ReactNode; rightContent?: React.ReactNode };

  export type BaseInputState = {
    isReadonly?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
  }

  export type IconComponentProps = Partial<ICON.Props> & {
    rootProps?: Omit<ComponentProps<'div'>, 'className'>;
    children?: React.ReactNode;
    className?: string;
  };

  export type AccordionSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  export type AccordionVariant = 'default' | 'accent';
  export type AccordionValue<V> = V extends true ? string[] : string | null;

  export type AccordionItemContext = {
    value: string;
    size?: AccordionSize;
    variant?: AccordionVariant;
    isLoading?: boolean;
    isReadonly?: boolean;
    isDisabled?: boolean;
  }

  export type AccordionContext<V extends boolean = false> = {
    size?: AccordionSize;
    variant?: AccordionVariant;
    children?: React.ReactNode;
    isLoading?: boolean;
    isReadonly?: boolean;
    isDisabled?: boolean;
    trapFocus?: boolean;
    chevronRotation: boolean;
    chevronPosition: 'start' | 'end';
    getPanelId: (id: string) => string;
    getTargetId: (id: string) => string;
    isValueActive: (value: string) => boolean;
    onChange: (value: AccordionValue<V>) => void;
  }

  export type AccordionProps<V extends boolean = false> = {
    value: AccordionValue<V>;
    variant?: AccordionVariant;
    size?: AccordionSize;
    children?: React.ReactNode;
    className?: string;
    multiple?: V;
    isLoading?: boolean;
    isReadonly?: boolean;
    isDisabled?: boolean;
    trapFocus?: boolean;
    chevronRotation?: boolean;
    chevronPosition?: 'start' | 'end';
    onChange: (value: AccordionValue<V>) => void;
  }

  export type AccordionItemProps = {
    className?: string;
    children?: React.ReactNode;
    isLoading?: boolean;
    isReadonly?: boolean;
    isDisabled?: boolean;
    variant?: AccordionVariant;
    size?: AccordionSize;
    value: string;
  }

  export type AccordionPanelProps = {
    className?: string;
    children?: React.ReactElement;
    variant?: AccordionVariant;
    size?: AccordionSize;
  }

  export type AccordionTargetProps = {
    trapFocus?: boolean;
    className?: string;
    isLoading?: boolean;
    isReadonly?: boolean;
    isDisabled?: boolean;
    children?: React.ReactNode;
    variant?: AccordionVariant;
    size?: AccordionSize;
    chevron?: React.ReactNode;
  }

  export type AccordionTargetIconProps = {
    position: 'start' | 'end';
    chevron?: React.ReactNode;
    chevronPosition?: 'start' | 'end';
    chevronRotation?: boolean;
    className?: string;
    variant?: AccordionVariant;
    size?: AccordionSize;
    active?: boolean;
  }

  export type UnstyledButtonProps = {
    children?: React.ReactNode;
    className?: string;
    isChecked?: boolean;
    isLoading?: boolean;
    isReadonly?: boolean;
    isDisabled?: boolean;
    isSelected?: boolean;
  }

  export type ButtonProps = UnstyledButtonProps & {
    isSelected?: boolean;
    fullWidth?: boolean;
    iconLeft?: Partial<ICON.Props>;
    iconRight?: Partial<ICON.Props>;
    variant?: 'default' | 'accent';
    value?: string;
    size?: SizeRegular;
  }
  
  export type ButtonGroupProps = {
    isReadonly?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
    className?: string;
    fullWidth?: boolean;
    gap?: SizeExpanded;
    onValueChange?: (value: string) => void;
    orientation?: Orientation;
    size?: SizeRegular;
    value?: string;
    variant?: 'default' | 'accent';
  }
  
  export type ButtonContext = {
    isReadonly?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    fullWidth?: boolean;
    onValueChange?: (value: string) => void;
    orientation: Orientation;
    variant?: 'default' | 'accent';
    value?: string;
    size?: SizeRegular;
  }

  export type ActionProps = {
    icon?: Partial<ICON.Props>;
    size?: SizeRegular;
    value?: string;
    variant?: 'default' | 'accent';
    children?: React.ReactNode;
    className?: string;
    isLoading?: boolean;
    isSelected?: boolean;
    isReadonly?: boolean;
    isDisabled?: boolean;
  }

  export type ActionGroupProps = {
    isLoading?: boolean;
    isReadonly?: boolean;
    isDisabled?: boolean;
    onValueChange?: (value: string) => void;
    orientation?: Orientation;
    className?: string;
    children?: React.ReactNode;
    variant?: 'default' | 'accent';
    value?: string;
    size?: SizeRegular;
    gap?: SizeExpanded;
  }

  export type ActionSpacerProps = {
    className?: string;
    variant?: 'default' | 'accent';
    grow?: boolean;
    size?: SizeRegular;
  }

  export type ActionContext = {
    isReadonly?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    onValueChange?: (value: string) => void;
    orientation: Orientation;
    variant?: 'default' | 'accent';
    value?: string;
    size?: SizeRegular;
  }

  export type InlineInputStatus = 'warning' | 'success' | 'error' | 'danger';

  export type InlineInputProps = {
    label?: string;
    error?: string;
    status?: InlineInputStatus;
    message?: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    isReadonly?: boolean;
  }
  
  export type CanvasControl = 'segmented' | 'checkbox' | 'switch' | 'select' | 'color';

  export type CanvasControlObject<T extends CanvasControl, P extends Record<string, any>> = P & {
    prop: string;
    type: T;
  };

  export type CanvasControlSwitchProps = { 
    onChange: (value: boolean) => void; 
    value: boolean;
    prop: string;
  };

  export type CanvasControlSwitchOptions = CanvasControlObject<'switch', { 
    initialValue: boolean;
  }>;
  
  export type CanvasControlSelectItem = { 
    value: string; 
    label: string;
  };
  
  export type CanvasControlSelectOptions = CanvasControlObject<'select', {
    data: (string | CanvasControlSelectItem)[];
    initialValue: string;
  }>;
  
  export type CanvasControlSegmentedItem = { 
    value: string; 
    label: string;
  };

  export type CanvasControlSegmentedOptions = CanvasControlObject<'segmented', {
    data: (string | CanvasControlSegmentedItem)[];
    initialValue: string;
  }>;

  export type CanvasControlSegmentedProps = {
    onChange: (value: string) => void;
    data: (string | CanvasControlSegmentedItem)[];
    prop: string;
    value: string;
  };

  export type CanvasControlOptions = 
    | CanvasControlSwitchOptions
    | CanvasControlSelectOptions
    | CanvasControlSegmentedOptions;

  export type CanvasDisplayState = {
    dir: 'ltr' | 'rtl';
    mode: 'light' | 'dark' | 'dim';
    accent: 'yellow' | 'blue' | 'cyan' | 'green' | 'grey' | 'magenta' | 'orange' | 'purple' | 'red' | 'slate' | 'stone' | 'teal';
  }

  export type CanvasProps = {
    children: React.ReactNode;
    controls: CanvasControlOptions[];
  };

  export type CanvasControlProps<T extends CanvasDisplayState = CanvasDisplayState> = {
    setDisplayState: (prop: keyof T, value: any) => void;
    displayState: T;
    children: React.ReactNode;
  }

  export type CheckboxSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  export type CheckboxShape = 'circle' | 'square';
  export type CheckboxState = 'true' | 'false' | 'mixed';
  export type CheckboxVariant = 'default' | 'accent';

  export type CheckboxProps = InlineInputProps & {
    size?: CheckboxSize;
    shape?: CheckboxShape;
    variant?: CheckboxVariant;
    mixed?: boolean;
    value?: string;
    checked?: boolean;
    iconProps?: Partial<ICON.Props>;
    rootProps?: React.ComponentPropsWithoutRef<'div'>;
  }

  export type CheckoboxGroupProps = GroupProps & {
    value: string[];
    onChange: (value: string[] | ((value: string[]) => string[])) => void;
    size?: CheckboxSize;
    shape?: CheckboxShape;
    variant?: CheckboxVariant;
    isLoading?: boolean;
    isReadonly?: boolean;
    isDisabled?: boolean;
  }
  
  export type CheckboxContext = {
    value: string[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    size?: CheckboxSize;
    shape?: CheckboxShape;
    variant?: CheckboxVariant;
    isLoading?: boolean;
    isReadonly?: boolean;
    isDisabled?: boolean;
    orientation?: Orientation;
  };

  export type ChipProps = UnstyledButtonProps & {
    size?: SizeRegular;
    value?: string;
    variant?: 'default' | 'accent';
    onChange?: ((event: React.MouseEvent<HTMLButtonElement>) => void);
    isLoading?: boolean;
    isReadonly?: boolean;
    isDisabled?: boolean;
  }
  
  export type ChipGroupProps = GroupProps & {
    size?: SizeRegular;
    value?: string;
    variant?: 'default' | 'accent';
    onChange?: ((event: React.MouseEvent<HTMLButtonElement>) => void);
    isLoading?: boolean;
    isReadonly?: boolean;
    isDisabled?: boolean;
  }
  
  export type ChipContext = GroupProps & {
    size?: SizeRegular;
    value?: string;
    variant?: 'default' | 'accent';
    onChange?: ((event: React.MouseEvent<HTMLButtonElement>) => void);
    isLoading?: boolean;
    isReadonly?: boolean;
    isDisabled?: boolean;
  }

  export type ControlPosition = Record<'height' | 'width' | 'left' | 'top', number>;
  
  export type UseControlPositionProps = {
    initialPosition: ControlPosition;
    currentValue: string;
  }
  
  export type ControlItem = Core.Item & {
    icon?: Partial<ICON.Props>;
    iconPosition?: 'end' | 'start';
  };
  
  export type ControlItemParsed = Core.ItemParsed & {
    icon?: Partial<ICON.Props>;
    iconPosition?: 'end' | 'start';
  };
  
  export type UseControlPositionReturn = {
    refs: Record<string, HTMLElement | null>;
    trackRef: React.RefObject<HTMLDivElement>;
    thumbRef: React.RefObject<HTMLDivElement>;
    update: (segment: HTMLElement | null, track: HTMLDivElement | null) => void;
    setElementRefs: (element: HTMLElement | null, key: string) => void;
  }
  
  export type ControlProps = {
    value?: string;
    items: ControlItem[];
    variant?: 'default' | 'accent';
    defaultValue?: string;
    onItemChange?: ((value: string) => void);
    className?: string;
    trapFocus?: boolean;
    orientation?: Core.Orientation;
  }
  
  export type ControlSegmentProps = {
    refs: Record<string, HTMLElement | null>;
    item: ControlItemParsed;
    value: string;
    variant?: 'default' | 'accent';
    trapFocus: boolean;
    orientation?: Core.Orientation;
    trackRef: React.RefObject<HTMLDivElement>;
    update: (segment: HTMLElement | null, track: HTMLDivElement | null) => void;
    onItemChange: (value: string) => void;
    setElementRefs: (element: HTMLElement | null, key: string) => void;
  }
  
  export type ControlThumbProps = {
    variant?: 'default' | 'accent';
    style?: React.CSSProperties;
    className?: string;
    transitionEasing: React.CSSProperties['transitionTimingFunction'];
    transitionProperty: React.CSSProperties['transitionProperty'];
    transitionDuration: React.CSSProperties['transitionDuration'];
  }
  
  export type ControlTrackProps = GroupProps & {
    variant?: 'default' | 'accent';
    className?: string;
  }

  export type createKeyDownRefScopeOptions<T extends HTMLElement> = {
    loop?: boolean;
    nested?: boolean;
    onKeyDown?: (event: React.KeyboardEvent<T>) => void;
    orientation?: Core.Orientation;
  }

  export interface DisclosureProps {
    style?: React.CSSProperties;
    isOpen: boolean;
    children?: React.ReactNode;
    transitionDuration?: React.CSSProperties['transitionDuration'] | number;
    transitionTimingFunction?: React.CSSProperties['transitionTimingFunction'];
    onTransitionEnd?: (() => void);
  }

  export type DividerSize = 'sm' | 'md' | 'lg';
  export type DividerVariant = 'default' | 'accent' | 'accent-text';

  export type DividerProps = {
    size?: DividerSize;
    icon?: Partial<ICON.Props>;
    label?: React.ReactNode;
    variant?: DividerVariant;
    decoration?: 'solid' | 'dashed' | 'dotted';
    iconPosition?: Core.Align;
    labelPosition?: Core.Align | 'center';
  }

  export type FloatingDir = 'ltr' | 'rtl';
  export type FloatingSide = 'bottom' | 'right' | 'left' | 'top';
  export type FloatingAlign = 'start' | 'end';
  export type FloatingWidth = 'target' | React.CSSProperties['width'] | null;
  export type FloatingStrategy = 'absolute' | 'fixed';
  export type FloatingPlacement = FloatingSide | `${FloatingSide}-${FloatingAlign}`;
  export type FloatingOffsetAxis = 'mainAxis' | 'crossAxis' | 'alignAxis';
  export type FloatingMiddlewareKey = 'inline' | 'shift' | 'size' | 'flip';
  
  export type FloatingOffsetAxisProps = { [Key in FloatingOffsetAxis]?: number };
  export type FloatingMiddlewareProps = { [Key in FloatingMiddlewareKey]?: boolean };
  
  export type FloatingPlacementProps = {
    value: FloatingPlacement;
    onChange?: ((placement: FloatingPlacement) => void);
    dependencies?: React.DependencyList | any[];
  }
  
  export type FloatingProps = {
    dir?: FloatingDir;
    isOpen: boolean;
    zIndex?: number;
    children: React.ReactNode;
    behavior?: 'click' | 'hover';
    disabled?: boolean;
    placement?: FloatingPlacement;
    placementDependencies?: React.DependencyList | any[];
    onPlacementChange?: ((placement: FloatingPlacement) => void);
    closeOnClickOutside?: boolean;
    clickOutsideIgnoreRefs?: React.RefObject<HTMLElement>[];
    closeOnEscape?: boolean;
    transitionProps?: Partial<TransitionProps>;
    width?: FloatingWidth;
    offset?: number | FloatingOffsetAxisProps;
    strategy?: FloatingStrategy;
    middleware?: FloatingMiddlewareProps;
    onOpen?: (() => void);
    onClose?: (() => void);
    onChange: (isOpen: boolean) => void;
  }
  
  export type FloatingContext = {
    x: number;
    y: number;
    width: FloatingWidth;
    zIndex: number;
    isOpen: boolean;
    behavior: 'click' | 'hover';
    disabled?: boolean;
    placement: FloatingPlacement;
    placementDependencies?: React.DependencyList | any[];
    onPlacementChange?: ((placement: FloatingPlacement) => void);
    transitionProps?: Partial<TransitionProps>;
    closeOnClickOutside: boolean;
    closeOnEscape: boolean;
    onClose: () => void;
    onChange: (isOpen: boolean) => void;
    getBoxId: () => string;
    getTargetId: () => string;
    reference: (node: HTMLElement) => void;
    floating: (node: HTMLDivElement) => void;
  }
  
  export type FloatingTargetProps = {
    style?: React.CSSProperties;
    refProp?: string;
    popupType?: React.AriaAttributes['aria-haspopup'];
    children: React.ReactElement;
  }
  
  export type FloatingBoxProps = {
    children: React.ReactNode;
    style?: React.CSSProperties;
  }
  
  export type UseFloatingConfig = {
    open: boolean;
    placement: FloatingPlacement;
    placementDependencies?: React.DependencyList | any[];
    onPlacementChange?: ((placement: FloatingPlacement) => void);
    floating: {
      update: () => void;
      refs: {
        reference: React.MutableRefObject<any>;
        floating: React.MutableRefObject<any>;
      };
    };
  }
  
  export type UseFloatingOptions = {
    open: boolean;
    width?: FloatingWidth;
    offset: number | FloatingOffsetAxisProps;
    strategy?: FloatingStrategy;
    middleware?: FloatingMiddlewareProps;
    placement: FloatingPlacement;
    placementDependencies?: React.DependencyList | any[];
    onPlacementChange?: ((placement: FloatingPlacement) => void);
    onChange: (isOpen: boolean) => void;
    onClose?: (() => void);
    onOpen?: (() => void);
  }

  export type IconButtonSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  export type IconButtonRadius = 'squared' | 'rounded' | 'round';
  export type IconButtonVariant = 'default' | 'accent';

  export type IconButtonProps = {
    icon?: Partial<ICON.Props>;
    size?: IconButtonSize;
    label?: string;
    radius?: IconButtonRadius;
    variant?: IconButtonVariant;
    isLoading?: boolean;
    isDisabled?: boolean;
    isReadonly?: boolean;
    isSelected?: boolean;
  }

  export type ImageProps = {
    alt: string;
    src?: any;
    fit?: React.CSSProperties['objectFit'];
    width?: React.CSSProperties['width'];
    height?: React.CSSProperties['height'];
    radius?: React.CSSProperties['borderRadius'];
    fallbackSrc?: string;
    onError?: ((event: React.SyntheticEvent<HTMLImageElement, Event>) => void);
  }

  export type LabelProps = {}

  export type SelectSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  export type SelectVariant = 'default' | 'accent';

  export type SelectItem = {
    value: string;
    label: string;    
    isLoading?: boolean;
    isDisabled?: boolean;
    isReadonly?: boolean;
  }
  
  export type SelectTargetProps = {
    size?: SelectSize;
    variant?: SelectVariant;
    isLoading?: boolean;
    isDisabled?: boolean;
    isReadonly?: boolean;
    isSelected?: boolean;
    placeholder?: string;
    value?: string;
  }
  
  export type SelectOptionProps = {
    isDisabled?: boolean;
    isReadonly?: boolean;
    isSelected?: boolean;
    isLoading?: boolean;
    size?: SelectSize;
    variant?: SelectVariant;
    value?: string;
    label: string;
  }
  
  export type SelectBoxProps = {
    size?: SelectSize;
    variant?: SelectVariant;
    children: React.ReactNode;
  }
  
  export type SelectListProps = {
    size?: SelectSize;
    variant?: SelectVariant;
    children: React.ReactNode;
    keyDownOptions?: Partial<createKeyDownRefScopeOptions<HTMLDivElement>>;
  }
  
  export type SelectProps = {
    dir?: FloatingProps['dir'];
    data: SelectItem[];
    isOpen: boolean;
    value?: string;
    label?: string;
    width?: FloatingProps['width'];
    zIndex?: FloatingProps['zIndex'];
    offset?: FloatingProps['offset'];
    size?: SelectSize;
    variant?: SelectVariant;
    strategy?: FloatingProps['strategy'];
    isLoading?: boolean;
    isDisabled?: boolean;
    isReadonly?: boolean;
    placement?: FloatingProps['placement'];
    middleware?: FloatingProps['middleware'];
    placeholder?: string;
    transitionProps?: Partial<TransitionProps>;
    placementDependencies?: FloatingProps['placementDependencies'];
    clickOutsideIgnoreRefs?: FloatingProps['clickOutsideIgnoreRefs'];
    closeOnClickOutside?: FloatingProps['closeOnClickOutside'];
    closeOnOptionClick?: boolean;
    closeOnEscape?: FloatingProps['closeOnEscape'];
    onPlacementChange?: FloatingProps['onPlacementChange'];
    onOpenChange: (isOpen: boolean) => void;
    onChange?: ((value?: string) => void);
    onClose?: (() => void);
    onOpen?: (() => void);
  }

  export type StackProps = {
    gap?: 'unset' | SizeExpanded;
    children?: React.ReactNode;
  }

  export type SwitchSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  export type SwitchRadius = 'squared' | 'rounded' | 'round';
  export type SwitchVariant = 'default' | 'accent';

  export type SwitchContext = {
    value?: string[];
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isDisabled?: boolean;
    isReadonly?: boolean;
    isLoading?: boolean;
    variant?: SwitchVariant;
    radius?: SwitchRadius;
    size?: SwitchSize;
  }

  export type SwitchGroupProps = GroupProps & {
    value: string[];
    onChange?: (value: string[]) => void;
    isDisabled?: boolean;
    isReadonly?: boolean;
    isLoading?: boolean;
    variant?: SwitchVariant;
    radius?: SwitchRadius;
    size?: SwitchSize;
  }

  export type SwitchProps = {
    label?: string;
    value?: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isReadonly?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    variant?: SwitchVariant;
    radius?: SwitchRadius;
    size?: SwitchSize;
  }

  export type TabsSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  export type TabsVariant ='default' | 'elevated' | 'accent' | 'accent-elevated' | 'accent-tonal'

  export type TabsKeyDownOptions = {
    onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
    preventDefault: boolean;
    parentSelector: string;
    childSelector: string;
    loop: boolean;
  };
  
  export type TabsItemProps = {
    grow?: boolean;
    size?: TabsSize;
    value: string;
    label?: string;
    variant?: TabsVariant;
    children?: React.ReactNode;
    iconLeft?: Partial<ICON.Props>;
    iconRight?: Partial<ICON.Props>;
    isLoading?: boolean;
    isDisabled?: boolean;
    isReadonly?: boolean;
  };
  
  export type TabsListProps = {
    grow?: boolean;
    withDivider?: boolean;
    dividerProps?: DividerProps;
  };
  
  export type TabsPanelProps = {
    value: string;
    style?: React.CSSProperties;
    variant?: TabsVariant;
    keepMounted?: boolean;
  };

  export type TabsProps = {
    size?: TabsSize;
    value: string;
    variant?: TabsVariant;
    children: React.ReactNode;
    className?: string;
    onChange: (value: string) => void;
    keyboardActivated?: boolean;
    keyboardOptions?: Partial<TabsKeyDownOptions>;
    orientation?: Orientation;
    isLoading?: boolean;
    isReadonly?: boolean;
    isDisabled?: boolean;
  };
  
  export type TabsContext = {
    size?: TabsSize;
    value: string;
    variant?: TabsVariant;
    onChange: (value: string) => void;
    getListId: () => string;
    getItemId: (v: string) => string;
    getPanelId: (v: string) => string;
    keyboardActivated?: boolean;
    keyboardOptions?: Partial<TabsKeyDownOptions>;
    orientation?: Orientation;
    isLoading?: boolean;
    isReadonly?: boolean;
    isDisabled?: boolean;
  };

  export type TableData = {
    head?: React.ReactNode[];
    body?: React.ReactNode[][];
    foot?: React.ReactNode[];
  };
  
  export type TableTdProps = {};
  
  export type TableTrProps = {};
  
  export type TableHeadProps = {};
  
  export type TableThProps = {};
  
  export type TableFootProps = {};
  
  export type TableBodyProps = {};
  
  export type TableRootProps = {
    className?: string;
    rowBorder?: boolean;
    rowStriped?: 'even' | 'odd';
    stickyHeader?: boolean;
  };
  
  export type TableProps = {
    data?: TableData;
    className?: string;
    rowBorder?: boolean;
    rowStriped?: 'even' | 'odd';
    stickyHeader?: boolean;
  };
  
  export type TableContext = {
    rowBorder?: boolean;
    rowStriped?: 'even' | 'odd';
    stickyHeader?: boolean;
  };

  export type TextProps = {
    span?: boolean | undefined;
    children?: React.ReactNode | undefined;
  }  

  export type TitleElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  export type TitleElementProps = { [K in TitleElement]?: boolean | undefined } & {
    component?: React.ElementType | undefined;
  };

  export interface TitleProps {
    h1?: boolean | undefined;
    h2?: boolean | undefined;
    h3?: boolean | undefined;
    h4?: boolean | undefined;
    h5?: boolean | undefined;
    h6?: boolean | undefined;
  }  

  export type ToastProps = Partial<TransitionProps> & {
    mounted: boolean;
    icon?: React.ReactNode | undefined;
    text?: string | undefined;
    title?: string | undefined;
    zIndex?: number | undefined;
    offset?: { x?: number | undefined; y: number | undefined } | undefined;
    onClose?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  }
  
  export type TransitionPhase = 'in' | 'out';

  export type TransitionStatus =
    | 'pre-entering'
    | 'pre-exiting'
    | 'entering'
    | 'exiting'
    | 'entered'
    | 'exited';

  export type TransitionStyle = {
    transitionProperty: React.CSSProperties['transitionProperty'];
    common?: React.CSSProperties | undefined;
    out: React.CSSProperties;
    in: React.CSSProperties;
  };

  export type TransitionActions = {
    onEntered?: (() => void) | undefined;
    onExited?: (() => void) | undefined;
    onEnter?: (() => void) | undefined;
    onExit?: (() => void) | undefined;
  };

  export type TransitionOptions = TransitionActions & {
    mounted: boolean;
    duration: number;
    exitDuration: number;
    timingFunction: React.CSSProperties['transitionTimingFunction'];
    reducedMotion?: boolean | undefined;
  };

  export type TransitionProps = TransitionActions & {
    mounted: boolean;
    duration?: number | undefined;
    transition?: TransitionStyle | undefined;
    keepMounted?: boolean | undefined;
    exitDuration?: number | undefined;
    timingFunction?: React.CSSProperties['transitionTimingFunction'] | undefined;
    children: (styles: React.CSSProperties) => JSX.Element;
  };

  export type TransitionStyleInput = {
    timingFunction: React.CSSProperties['transitionTimingFunction'];
    transition: TransitionStyle;
    duration: number;
    state: TransitionStatus;
  };

  export type UseTransitionReturn = {
    transitionTimingFunction: React.CSSProperties['transitionTimingFunction'];
    transitionStatus: TransitionStatus;
    transitionDuration: number;
  };

  export type UnstyledLinkProps = {};

  export type VisuallyHiddenProps = {};
};