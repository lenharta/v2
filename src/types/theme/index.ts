export declare namespace Theme {
  export type Dir = 'ltr' | 'rtl';
  export type Mode = 'light' | 'dim' | 'dark';
  export type Status = 'info' | 'error' | 'success' | `warning`;
  export type Orientation = 'vertical' | 'horizontal';

  export type Emphasis = 'max' | 'med' | 'low' | 'min';
  export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  export type HeadingProps = Partial<{ [K in HeadingLevel]: boolean }>;

  export type SizeCompact = 'sm' | 'md' | 'lg';
  export type SizeRegular = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  export type SizeExpanded = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

  export type Color = ColorWarm | ColorCool;
  export type ColorWarm = 'red' | 'orange' | 'yellow' | 'pink' | 'brown';
  export type ColorCool = 'green' | 'mint' | 'teal' | 'cyan' | 'blue' | 'indigo' | 'purple';
  export type ColorAlpha = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  export type ColorShade = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

  export type State = {
    dir: Theme.Dir;
    mode: Theme.Mode;
    icons: 'fill' | 'outline';
    accent: Theme.Color;
    contrast: 'yes' | 'no';
  };

  export type AttributeKey = Extract<keyof State, 'dir' | 'mode' | 'accent' | 'contrast'>;
  export type AttributeSuffix = 'dir' | 'color-mode' | 'color-accent' | 'color-contrast';
  export type Attribute = `data-prefers-${AttributeSuffix}`;

  type SchemeColor = 'base' | 'accent';
  type SchemeVariant = 'default' | 'elevated';
  type SchemeSurface = `${SchemeColor}-${SchemeVariant}`;

  export type Variant =
    | 'default'
    | 'elevated'
    | 'default-accent'
    | 'elevated-accent'
    | `default-${Color}`
    | `elevated-${Color}`
    | 'default-accent-tonal'
    | 'elevated-accent-tonal'
    | `default-${Color}-tonal`
    | `elevated-${Color}-tonal`;

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

  interface GroupProps {
    gap?: SizeExpanded | undefined;
    orientation?: 'vertical' | 'horizontal' | undefined;
  }

  interface TypographyProps {
    lead?: Theme.SizeExpanded | undefined;
    size?: Theme.SizeExpanded | undefined;
    weight?: 'lgt' | 'reg' | 'med' | 'bld' | 'blk' | undefined;
    surface?: 'base' | 'accent' | 'neutral' | 'contrast' | Theme.Color | undefined;
    emphasis?: 'max' | 'med' | 'low' | 'min' | undefined;
    // TODO: configure below
    // inline?: boolean | undefined;
    // inherit?: boolean | undefined;
    // gradient?: boolean | undefined;
    // truncate?: 'start' | 'end' | undefined;
    // lineClamp?: boolean | undefined;
  }

  interface IconProps {
    size?: SizeRegular | undefined;
    type?: 'fill' | 'outline' | undefined;
    // emphasis?: 'min' | 'low' | 'med' | 'max' | undefined;
  }

  interface IconMap {
    dir: {
      ltr: Partial<IconProps> & { name: 'text-left'; surface: 'base' };
      rtl: Partial<IconProps> & { name: 'text-right'; surface: 'base' };
    };
    mode: {
      light: Partial<IconProps> & { name: 'mode-light'; surface: 'base' };
      dark: Partial<IconProps> & { name: 'mode-dark'; surface: 'base' };
      dim: Partial<IconProps> & { name: 'mode-dim'; surface: 'base' };
    };
    accent: {
      red: Partial<IconProps> & { name: 'shape-circle'; surface: 'red' };
      orange: Partial<IconProps> & { name: 'shape-circle'; surface: 'orange' };
      yellow: Partial<IconProps> & { name: 'shape-circle'; surface: 'yellow' };
      green: Partial<IconProps> & { name: 'shape-circle'; surface: 'green' };
      mint: Partial<IconProps> & { name: 'shape-circle'; surface: 'mint' };
      teal: Partial<IconProps> & { name: 'shape-circle'; surface: 'teal' };
      cyan: Partial<IconProps> & { name: 'shape-circle'; surface: 'cyan' };
      blue: Partial<IconProps> & { name: 'shape-circle'; surface: 'blue' };
      indigo: Partial<IconProps> & { name: 'shape-circle'; surface: 'indigo' };
      purple: Partial<IconProps> & { name: 'shape-circle'; surface: 'purple' };
      pink: Partial<IconProps> & { name: 'shape-circle'; surface: 'pink' };
      brown: Partial<IconProps> & { name: 'shape-circle'; surface: 'brown' };
    };
  }
}
