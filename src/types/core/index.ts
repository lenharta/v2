import React from 'react';
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
  
  export type ComponentProps<T, P = {}> = T extends React.ElementType
    ? Extend<P, React.ComponentPropsWithoutRef<T>>
    : P;

  export type ComponentRefProps<T, P = {}> = T extends React.ElementType
    ? Extend<P, React.ComponentPropsWithRef<T>>
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

  export type ComponentRenderBaseProps<T, P = {}> = T extends React.ElementType
    ? P & Filter<React.ComponentPropsWithoutRef<T>, keyof P>
    : P;

  export type ComponentReturnBaseProps<T, P = {}> = T extends React.ElementType
    ? P & Filter<React.ComponentPropsWithRef<T>, keyof P>
    : P;

  export type ComponentRenderProps<T, P, U> = U extends keyof any
    ? Omit<ComponentRenderBaseProps<T, P & { component: T }>, U>
    : ComponentRenderBaseProps<T, P>;

  export type ComponentReturnProps<T, P, U> = U extends keyof any
    ? Omit<ComponentReturnBaseProps<T, P>, U>
    : ComponentReturnBaseProps<T, P>;

  export type ComponentRenderFunction<P extends FactoryPayload> = NamedComponent & {
    (props: ComponentRenderProps<P['element'], P['props'], P['excluded']>, ref: React.ForwardedRef<P['ref']>): React.ReactNode;
  };

  export type ComponentReturnFunction<P extends FactoryPayload> = NamedComponent & FactoryElements<P['elements']> & {
    (props: ComponentReturnProps<P['element'], P['props'], P['excluded']>): React.ReactNode;
  };
  
  export type PolymorphicRef<T> = T extends React.ElementType
    ? React.ComponentPropsWithRef<T>['ref']
    : never;
  
  export type PolymorphicProps<T, P = {}> = T extends React.ElementType
    ? Extend<P, React.ComponentPropsWithoutRef<T> & Partial<{ component: T; ref: PolymorphicRef<T> }>>
    : Extend<P, Partial<{ component: React.ElementType }>>;

  export type PolymorphicRenderProps<T, P, U> = U extends keyof any
    ? Omit<PolymorphicProps<T, P>, U>
    : PolymorphicProps<T, P>

  export type PolymorphicReturnProps<T, P, U> = U extends keyof any
    ? Omit<PolymorphicProps<T, P>, U>
    : PolymorphicProps<T, P>
  
  export type PolymorphicRenderFunction<P extends FactoryPayload> = NamedComponent & {
    (props: PolymorphicRenderProps<P['element'], P['props'], P['excluded']>, ref: React.ForwardedRef<P['ref']>): React.ReactNode;
  };
  
  export type PolymorphicReturnFunction<P extends FactoryPayload> = NamedComponent & FactoryElements<P['elements']> & {
    <T = P['element']>(props: PolymorphicReturnProps<T, P['props'], P['excluded']>): React.ReactNode;
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

  export type AccordionValue<V> = V extends true ? string[] : string | null;

  export type AccordionItemContext = {
    variant: 'default' | 'accent';
    value: string;
  }

  export type AccordionContext<V extends boolean = false> = {
    variant: 'default' | 'accent';
    children?: React.ReactNode;
    disabled?: boolean;
    trapFocus?: boolean;
    chevronRotation: boolean;
    chevronPosition: 'start' | 'end';
    getPanelId: (id: string) => string;
    getTargetId: (id: string) => string;
    isValueActive: (value: string) => boolean;
    onValueChange: (value: AccordionValue<V>) => void;
  }

  export type AccordionProps<V extends boolean = false> = {
    value: AccordionValue<V>;
    variant?: 'default' | 'accent';
    children?: React.ReactNode;
    multiple?: V;
    disabled?: boolean;
    trapFocus?: boolean;
    chevronRotation?: boolean;
    chevronPosition?: 'start' | 'end';
    onValueChange: (value: AccordionValue<V>) => void;
  }

  export type AccordionItemProps = {
    className?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    variant?: 'default' | 'accent';
    value: string;
  }

  export type AccordionPanelProps = {
    className?: string;
    children?: React.ReactNode;
    variant?: 'default' | 'accent';
  }

  export type AccordionTargetProps = {
    trapFocus?: boolean;
    className?: string;
    disabled?: boolean;
    children?: React.ReactNode;
    variant?: 'default' | 'accent';
    chevron?: React.ReactNode;
  }

  export type AccordionTargetIconProps = {
    chevron?: React.ReactNode;
    chevronPosition?: 'start' | 'end';
    chevronRotation?: boolean;
    className?: string;
    variant?: 'default' | 'accent';
    active?: boolean;
  }

  export type UnstyledButtonProps = {
    isLoading?: boolean;
    isReadonly?: boolean;
    isDisabled?: boolean;
    children?: React.ReactNode;
    className?: string;
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

  export type ActionProps = UnstyledButtonProps & {
    variant?: 'default' | 'accent';
    value?: string;
    size?: SizeRegular;
    icon?: Partial<ICON.Props>;
  }

  export type ActionGroupProps = {
    isReadonly?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
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

  export type CheckboxIconName = `checkbox-${CheckboxIconState}-${CheckboxIconShape}`
  export type CheckboxIconState = 'mixed' | 'checked' | 'unchecked';
  export type CheckboxIconShape = 'circle' | 'square';
  
  export type CheckboxStateProps = {
    isChecked?: boolean;
    isLoading?: boolean;
    isReadonly?: boolean;
    isDisabled?: boolean;
    isIndeterminate?: boolean;
  }

  export type CheckboxValue<Multiple = false> = Multiple extends true 
    ? string[] 
    : string;

  export type CheckboxChangeHandler<Multiple = false> = Multiple extends true
    ? (value: string[]) => void
    : (event: React.ChangeEvent<HTMLInputElement>) => void;

  export type CheckboxValueProps<Multiple = false> = {
    onChange: CheckboxChangeHandler<Multiple>;
    value: CheckboxValue<Multiple>;
  }

  export type CheckboxContext = InlineInputProps & {
    isLoading?: boolean;
    isReadonly?: boolean;
    isDisabled?: boolean;
    orientation?: Orientation;
    onValueChange?: (value: string) => void;
    shape?: CheckboxIconShape;
    value: string[];
    gap?: SizeGap;
  }

  export type CheckboxGroupProps = BaseInputState & GroupProps & {
    onValueChange: (value: string[]) => void;
    shape?: CheckboxIconShape;
    value: string[];
  }

  export type CheckboxProps<Mulitple = false> = InlineInputProps & CheckboxStateProps & CheckboxValueProps<Mulitple> & {
    label: string;
    icon?: Partial<ICON.Props>;
    shape?: CheckboxIconShape;
  }
  
  export type CheckboxIconProps = CheckboxStateProps & {
    icon?: Partial<ICON.Props>;
    shape?: CheckboxIconShape;
  }

  export type ParseCheckboxIconState = {
    (props: CheckboxStateProps): CheckboxIconState;
  }

  export type ParseCheckboxIconName = {
    (state: CheckboxIconState, shape: CheckboxIconShape): {
      name: CheckboxIconName
    }
  }

  export type ParseCheckboxIconProps = {
    (props: { 
      icon?: Partial<ICON.Props>; 
      state: CheckboxIconState; 
      shape: CheckboxIconShape;
    }): {
      type: ICON.Type;
      name: ICON.Name;
      fill: ICON.Color;
    }
  }

  export type ChipContext = {
    variant?: 'default' | 'accent';
    value?: string | string[];
    size?: SizeRegular;
    isLoading?: boolean;
    isReadonly?: boolean;
    
  }

  export type ChipGroupProps = GroupProps & {}
  
  export type ChipProps = {}

  export interface DisclosureProps {
    style?: React.CSSProperties;
    isOpen: boolean;
    children?: React.ReactNode;
    transitionDuration?: React.CSSProperties['transitionDuration'] | number;
    transitionTimingFunction?: React.CSSProperties['transitionTimingFunction'];
    onTransitionEnd?: (() => void);
  }
};