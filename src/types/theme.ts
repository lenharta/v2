export declare namespace Theme {
  export type Dir = 'ltr' | 'rtl';
  export type Mode = 'light' | 'dark' | 'dim';

  export type Color = ColorWarm & ColorCool;
  export type ColorCool = 'teal' | 'cyan' | 'blue' | 'indigo' | 'purple' | 'pink';
  export type ColorWarm = 'brown' | 'red' | 'orange' | 'yellow' | 'green' | 'mint';
  export type ColorScheme = 'primary' | 'secondary' | 'accent';

  export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  export type SizeCompact = Extract<Size, 'sm' | 'md' | 'lg'>;
  export type SizeExpanded = 'xxs' | Size | 'xxl';

  export type ColorConfig = {
    hex: string;
    rgb: string;
    hsl: string;
  };
}
