export declare namespace Theme {
  export type Dir = 'ltr' | 'rtl';
  export type Mode = 'light' | 'dim' | 'dark';
  export type Status = 'info' | 'error' | 'success' | `warning`;
  export type Orientation = 'vertical' | 'horizontal';

  export type SizeCompact = 'sm' | 'md' | 'lg';
  export type SizeRegular = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  export type SizeExpanded = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

  export type Color = ColorWarm | ColorCool;
  export type ColorWarm = 'red' | 'orange' | 'yellow' | 'pink' | 'brown';
  export type ColorCool = 'green' | 'mint' | 'teal' | 'cyan' | 'blue' | 'indigo' | 'purple';
  export type ColorAlpha = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  export type ColorShade = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

  export type Attributes = 'dir' | 'mode' | 'accent';

  export type Interaction =
    | 'enabled'
    | 'hovered'
    | 'pressed'
    | 'focused'
    | 'disabled'
    | 'selected'
    | 'expanded';

  export type Behavior =
    | 'movable'
    | 'clickable'
    | 'togglable'
    | 'expandable'
    | 'selectable'
    | 'draggable'
    | 'droppable'
    | 'hoverable'
    | 'scrollable'
    | 'resizable'
    | 'dismissible'
    | 'sortable'
    | 'zoomable'
    | 'swipable'
    | 'editable';
}
