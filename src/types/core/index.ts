import { ICON } from '../icon';

export declare namespace Core {
  export type Extend<P = {}, O = {}> = O & Omit<P, keyof O>;
  export type Defined<T> = { [K in keyof T as undefined extends T[K] ? never : K]: T[K] };
  
  export type ViableRef<T> = React.Ref<T> | undefined;
  
  export type Element = React.ElementType | React.JSXElementConstructor<any>;  
  export type ElementRef<T extends Element> = { ref: React.ComponentPropsWithRef<T>['ref'] };
  export type ElementProps<T extends Element> = React.ComponentPropsWithoutRef<T>;
  export type ComponentProps<T extends Element, P = {}> = Extend<P, ElementProps<T>>;

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
  
  export type ContentProps = { leftContent?: React.ReactNode; rightContent?: React.ReactNode };
  
  export type InlineMediaQuery = { styles: React.CSSProperties; query: string };
  export type InlineStyle = { selector: string; styles?: React.CSSProperties; media?: InlineMediaQuery[]  };
  
  // CORE | COMPONENTS ===============================================================

  export type InheritedProps<T extends Element, P = {}> = Extend<ComponentProps<T>, P>;

  export type PressProps = {
    readOnly: boolean;
    disabled: boolean;
    selected: boolean;
    loading: boolean;
  };

  export type GroupComponentProps = {
    gap?: SizeExpanded;
    orientation?: Orientation;
    className?: string;
    children?: React.ReactNode;
  };

  export type IconComponentProps = Partial<ICON.Props> & {
    rootProps?: Omit<ComponentProps<'div'>, 'className'>;
    children?: React.ReactNode;
    className?: string;
  };

  export interface UnstyledButtonProps extends PressProps {
    children?: React.ReactNode;
    className?: string;
  }

  export interface ButtonProps extends UnstyledButtonProps {
    value?: string;
    iconLeft?: Partial<ICON.Props>;
    iconRight?: Partial<ICON.Props>;
    variant?: 'default' | 'accent';
    size?: SizeRegular;
  }

  export interface ButtonGroupProps extends PressProps {
    gap?: SizeExpanded;
    size?: SizeRegular;
    variant?: 'default' | 'accent';
    orientation?: Orientation;
    onValueChange?: (value: string) => void;
    children?: React.ReactNode;
    className?: string;
    value?: string;
  }

  export interface ButtonContext extends PressProps {
    value?: string;
    onValueChange?: (value: string) => void;
    orientation: Orientation;
    variant?: 'default' | 'accent';
    size?: SizeRegular;
    gap?: SizeExpanded;
  }

  export interface ActionProps extends UnstyledButtonProps {
    value?: string;
    icon?: Partial<ICON.Props>;
    variant?: 'default' | 'accent';
    size?: SizeRegular;
  }

  export interface ActionGroupProps extends Partial<PressProps> {
    gap?: SizeExpanded;
    size?: SizeRegular;
    variant?: 'default' | 'accent';
    orientation?: Orientation;
    onValueChange?: (value: string) => void;
    children?: React.ReactNode;
    className?: string;
    value?: string;
  }

  export interface ActionSpacerProps {
    grow?: boolean;
    variant?: 'default' | 'accent';
    className?: string;
  }

  export interface ActionContext extends Partial<PressProps> {
    value?: string;
    onValueChange?: (value: string) => void;
    orientation: Orientation;
    variant?: 'default' | 'accent';
    size?: SizeRegular;
    gap?: SizeExpanded;
  }
};