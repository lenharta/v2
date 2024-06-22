import { IconProps } from '@/core';

export declare namespace Core {
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

  export type LinkItem = {
    icon?: IconProps['name'] | undefined;
    value: string;
    label: string;
  };

  export type LinkItemGroup = {
    group: string;
    label: string;
    items: LinkItem[];
  };

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
}
