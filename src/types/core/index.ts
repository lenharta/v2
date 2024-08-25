import { IconProps } from '@core';

export declare namespace Core {
  export type Extend<P = {}, O = {}> = O & Omit<P, keyof O>;

  export type CSS = React.CSSProperties;
  export type Axis = 'x' | 'y';
  export type Side = 'bottom' | 'right' | 'left' | 'top';
  export type Rect = Coords & Dimensions;
  export type Align = 'center' | 'start' | 'end';
  export type Length = 'height' | 'width';
  export type Placement = Side | `${Side}-${Align}`;
  export type Orientation = 'horizontal' | 'vertical';

  export type Sides = { [key in Side]: number };
  export type Coords = { [key in Axis]: number };
  export type Dimensions = { [key in Length]: number };
  export type ClientRect = Rect & Sides;

  export type ScrollOptions = { behavior?: ScrollBehavior };
  export type ScrollPosition = { [Key in Axis]: number };
  export type ScrollToOptions = ScrollToPosition & ScrollOptions;
  export type ScrollToPosition = { left?: number; top?: number };

  export type CodeLanguage = 'js' | 'jsx' | 'ts' | 'tsx' | 'html' | 'css' | 'scss' | 'json' | 'bash'; 
  export type CodeLanguageProps = Partial<Record<CodeLanguage, boolean>>

  export type Element = React.ElementType | React.JSXElementConstructor<any>;
  export type ElementRef<T extends Element> = { ref: React.ComponentPropsWithRef<T>['ref'] };
  export type ElementProps<T extends Element> = React.ComponentPropsWithoutRef<T>;
  export type BaseProps<T extends Element, P = {}> = Extend<ElementProps<T>, P>;

  export type ViableRef<T> = React.Ref<T> | undefined;

  export type Item = {
    value: string;
    label?: string | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
  };

  export type ItemParsed = {
    value: string;
    label: string;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
  };

  export type ItemGroup = {
    group: string;
    items: (string | Item | ItemGroup)[];
  };

  export type ItemGroupParsed = {
    group: string;
    items: (ItemParsed | ItemGroupParsed)[];
  };

  interface ItemStateProps {
    loading?: boolean | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    selected?: boolean | undefined;
  }

  export type ContentProps = {
    leftContent?: React.ReactNode | undefined;
    rightContent?: React.ReactNode | undefined;
  };

  export type InlineMediaQuery = {
    styles: React.CSSProperties;
    query: string;
  };

  export type InlineStyle = {
    selector: string;
    styles?: React.CSSProperties | undefined;
    media?: InlineMediaQuery[] | undefined;
  };

  /// REFACTOR ABOVE THIS LINE ----------------------------------------------------------

  interface Name {
    middle?: string | undefined;
    first: string;
    last: string;
  }

  interface Location {
    city: { name: string; code: string };
    state: { name: string; code: string };
  }

  interface ItemIconProp {
    icon: Partial<IconProps & { position: 'start' | 'end' }>;
  }

  interface LinkItem extends Partial<ItemIconProp> {
    id: string;
    value: string | number | readonly string[];
    label: string;
  }

  interface LinkGroup extends Partial<ItemIconProp> {
    group: LinkItem;
    items: LinkItem[];
  }

  export type GenericStore<T extends Record<string, any>> = {
    dispatch: React.Dispatch<React.SetStateAction<T>>;
    state: T;
  };

  export type Clxss<K extends string = string> = Record<K, string>;
  
  export type ClxssPrefixFunc = (suffix: string) => string;
  
  export type ClxssPrefixOptions = { prefixer: ClxssPrefixFunc; isPrefix: boolean; prefix: string }
  
  export type ClxssOptions = ClxssPrefixOptions & { rootKey: string };

  export type ClxssProps<K extends string> = { classNames: Partial<Clxss<K>>; className: string }

  export function useClxss<K extends string>(init: Clxss<K>, props: Partial<ClxssProps<K> & ClxssOptions>): Clxss<K>;

  export function getClxssKeys<K extends string>(init: Clxss<K>): K[]

  export function parseClxssOptions(options: Partial<ClxssOptions>): ClxssOptions;
  
  export function resolveClxssNames<K extends string>(init: Clxss<K>, classNames?: Partial<Clxss<K>>): Clxss<K>;

  // export function reduceClxssNames<K extends string>(cb: (previous: Clxss<K>, update: Clxss<K>) => U, initialValue: U): U;

};
