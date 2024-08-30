import { ICON } from '../icon';

export declare namespace Core {
  export type Extend<P = {}, O = {}> = O & Omit<P, keyof O>;
  export type Defined<T> = { [K in keyof T as undefined extends T[K] ? never : K]: T[K] };
  
  export type CSS<T extends string> = Record<T, string>;
  export type Element = React.ElementType | React.JSXElementConstructor<any>;  
  export type ElementProps<T extends Element> = React.ComponentPropsWithoutRef<T>;
  export type ComponentProps<T extends Element, P = {}> = Extend<P, ElementProps<T>>;

  export type ViableRef<T> = React.Ref<T> | undefined;
  export type ElementRef<T extends Element> = { ref: React.ComponentPropsWithRef<T>['ref'] };
  
  export type Booleanish = boolean | "false" | "true";
  export type AriaChecked = Booleanish | "mixed" | undefined;

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

  /// $$$ TYPES | CORE | COMPONENTS

  export type InheritProps<T extends Element, P = {}> = Extend<ComponentProps<T>, P>;
  
  export type GroupProps<P = {}> = P & Partial<{ gap: SizeGap; orientation: Orientation }>;
  export type LayoutProps<P = {}> = P & { children?: React.ReactNode; className?: string };
  export type ContentProps<P = {}> = P & { leftContent?: React.ReactNode; rightContent?: React.ReactNode };

  export type InputStateKey = 'readOnly' | 'disabled' | 'selected' | 'loading';
  export type InputStateProps<P = {}> = P & Partial<{ [K in InputStateKey]: boolean }>;

  export type GroupComponentProps = GroupProps<{
    children?: React.ReactNode;
    className?: string;
  }>;

  export type IconComponentProps = Partial<ICON.Props> & {
    rootProps?: Omit<ComponentProps<'div'>, 'className'>;
    children?: React.ReactNode;
    className?: string;
  };

  /// $$$ TYPES | CORE | COMPONENTS | BUTTON

  export interface UnstyledButtonProps extends Partial<InputStateProps> {
    children?: React.ReactNode;
    className?: string;
  }

  export interface ButtonProps extends UnstyledButtonProps {
    fullWidth?: boolean;
    iconLeft?: Partial<ICON.Props>;
    iconRight?: Partial<ICON.Props>;
    size?: SizeRegular;
    value?: string;
    variant?: 'default' | 'accent';
  }
  
  export interface ButtonGroupProps extends Partial<InputStateProps> {
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
  
  export interface ButtonContext extends Partial<InputStateProps> {
    fullWidth?: boolean;
    onValueChange?: (value: string) => void;
    orientation: Orientation;
    size?: SizeRegular;
    value?: string;
    variant?: 'default' | 'accent';
  }

  /// $$$ TYPES | CORE | COMPONENTS | ACTION

  export interface ActionProps extends UnstyledButtonProps {
    icon?: Partial<ICON.Props>;
    size?: SizeRegular;
    value?: string;
    variant?: 'default' | 'accent';
  }

  export interface ActionGroupProps extends Partial<InputStateProps> {
    children?: React.ReactNode;
    className?: string;
    gap?: SizeExpanded;
    onValueChange?: (value: string) => void;
    orientation?: Orientation;
    size?: SizeRegular;
    value?: string;
    variant?: 'default' | 'accent';
  }

  export interface ActionSpacerProps {
    className?: string;
    grow?: boolean;
    variant?: 'default' | 'accent';
  }

  export interface ActionContext extends Partial<InputStateProps> {
    onValueChange?: (value: string) => void;
    orientation: Orientation;
    size?: SizeRegular;
    value?: string;
    variant?: 'default' | 'accent';
  }

  /// $$$ TYPES | CORE | COMPONENTS | INLINE-INPUT

  export interface InlineInputProps extends Partial<InputStateProps> {
    mixed?: boolean;
    checked?: boolean;
  }

  /// $$$ TYPES | CORE | COMPONENTS | CHECKBOX

  export type CheckboxCssKey = 'root' | 'input'
  export type CheckboxCssObject = Record<CheckboxCssKey, string>
  export type CheckboxIconName = `checkbox-${CheckboxIconState}-${CheckboxIconShape}`
  export type CheckboxIconState = 'mixed' | 'checked' | 'unchecked';
  export type CheckboxIconShape = 'circle' | 'square';
  
  export interface CheckboxStateProps {
    mixed?: boolean;
    checked?: boolean;
    loading?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
  }

  export type CheckboxValue<Multiple = false> = Multiple extends true 
    ? string[] 
    : string;

  export type CheckboxChangeHandler<Multiple = false> = Multiple extends true
    ? (value: string[]) => void
    : (event: React.ChangeEvent<HTMLInputElement>) => void;

  export interface CheckboxValueProps<Multiple = false> {
    onValueChange: CheckboxChangeHandler<Multiple>;
    value: CheckboxValue<Multiple>;
  }

  export interface CheckboxContext extends Partial<InputStateProps> {
    onChange?: (value: string) => void;
    shape?: CheckboxIconShape;
    value: string[];
  }

  export interface CheckboxGroupProps extends Partial<InputStateProps>, GroupProps {
    onChange: (value: string[]) => void;
    shape?: CheckboxIconShape;
    value: string[];
  }

  export interface CheckboxProps<Mulitple = false> extends CheckboxStateProps, CheckboxValueProps<Mulitple> {
    label: string;
    icon?: Partial<ICON.Props>;
    shape?: CheckboxIconShape;
    // rootProps?: InlineInputProps;
  }
  
  export interface CheckboxIconProps extends CheckboxStateProps {
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
};