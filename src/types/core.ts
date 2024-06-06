export declare namespace Core {
  export type CSS = React.CSSProperties;

  export type ViableRef<T> = React.Ref<T> | undefined;

  // export type KeyboardSide = 'left-side' | 'right-side';
  // export type KeyboardRegion = 'general keys' | 'modifier keys';
  // export type KeyboardLocation = KeyboardRegion | KeyboardSide;

  // export type KeyboardKey = keyof typeof DATA_EVENT_MAP_KEYBOARD_KEYS;
  // export type KeyboardKeyCode = keyof typeof DATA_EVENT_MAP_KEYBOARD_KEYCODES;
  // export type KeyboardDataObject = { key: KeyboardKey; code: number; location: KeyboardLocation[] };

  export type Axis = 'x' | 'y';
  export type Side = 'bottom' | 'right' | 'left' | 'top';
  export type Align = 'center' | 'start' | 'end';
  export type Length = 'height' | 'width';
  export type Placement = Side | `${Side}-${Align}`;
  export type Orientation = 'horizontal' | 'vertical';

  export type CoordProps = { [key in Axis]: number };
  export type SideProps = { [key in Side]: number };
  export type RectProps = CoordProps & DimensionProps;
  export type DimensionProps = { [key in Length]: number };
  export type ClientRectProps = RectProps & SideProps;

  export type TitleElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  export type TitleElementProps = Record<TitleElement, boolean | undefined>;

  export type ContentProps = {
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

  export type ScrollPosition = { [Key in Axis]: number };

  export type ScrollOptions = {
    behavior?: ScrollBehavior;
  };

  export type ScrollToOptions = ScrollOptions & {
    left?: number;
    top?: number;
  };
}
