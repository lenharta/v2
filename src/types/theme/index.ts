export declare namespace Theme {
  export interface State { 
    dir: WritingDir; 
    mode: ColorScheme;
    icons: IconVariant; 
    accent: ColorName; 
    contrast: ColorOption; 
  }
  
  export type StoreKey = 'dir' | 'mode' | 'accent' | 'contrast';
  export type StoreAttributeKey = 'dir' | `color-${Exclude<StoreKey, 'dir'>}`;
  export type StoreAttribute = `data-prefers-${StoreAttributeKey}`;

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

  export type IconVariant = 'fill' | 'outline';
  export type BaseVariant = 'default' | 'accent';

  export type Status = 'info' | 'warn' | 'error' | 'success';

  export type InteractionProps = {
    enabled: boolean;
    hovered: boolean;
    pressed: boolean;
    focused: boolean;
    disabled: boolean;
    selected: boolean;
    expanded: boolean;
  }

  export type BehaviorProps = {
    movable: boolean;
    clickable: boolean;
    togglable: boolean;
    expandable: boolean;
    selectable: boolean;
    draggable: boolean;
    droppable: boolean;
    hoverable: boolean;
    scrollable: boolean;
    resizable: boolean;
    dismissible: boolean;
    sortable: boolean;
    zoomable: boolean;
    swipable: boolean;
    editable: boolean;
  };

  export interface GroupProps {
    gap?: SizeExpanded;
  }
  
  export interface ActionProps {
    variant?: BaseVariant;
    radius?: SizeRadius;
    size?: SizeRegular;
  }

  export interface ButtonProps {
    variant?: BaseVariant;
    radius?: SizeRadius;
    size?: SizeRegular;
  }

  export interface SwitchProps {
    variant?: BaseVariant;
    radius?: SizeRadius;
    size?: SizeRegular;
  }

  export interface CheckboxProps {
    variant?: BaseVariant;
    radius?: SizeRadius;
    size?: SizeRegular;
  }

  export interface TabsProps {
    variant?: BaseVariant;
    radius?: SizeRadius;
    size?: SizeRegular;
  }

  export interface SelectProps {
    variant?: BaseVariant;
    radius?: SizeRadius;
    size?: SizeRegular;
  }

  export interface ActionGroupProps extends GroupProps, ActionProps {}
  export interface ButtonGroupProps extends GroupProps, ButtonProps {}
  export interface SwitchGroupProps extends GroupProps, SwitchProps {}
  export interface CheckboxGroupProps extends GroupProps, CheckboxProps {}

  export interface ActionContextProps extends GroupProps, ActionProps {}
  export interface ButtonContextProps extends GroupProps, ButtonProps {}
  export interface SwitchContextProps extends GroupProps, SwitchProps {}
  export interface CheckboxContextProps extends GroupProps, CheckboxProps {}
}


  // interface GroupProps {
  //   gap?: SizeExpanded | undefined;
  //   orientation?: 'vertical' | 'horizontal' | undefined;
  // }

  // interface TypographyProps {
  //   lead?: Theme.SizeExpanded | undefined;
  //   size?: Theme.SizeExpanded | undefined;
  //   weight?: 'lgt' | 'reg' | 'med' | 'bld' | 'blk' | undefined;
  //   surface?: 'base' | 'accent' | 'neutral' | 'contrast' | Theme.Color | undefined;
  //   emphasis?: 'max' | 'med' | 'low' | 'min' | undefined;
  //   // TODO: configure below
  //   // inline?: boolean | undefined;
  //   // inherit?: boolean | undefined;
  //   // gradient?: boolean | undefined;
  //   // truncate?: 'start' | 'end' | undefined;
  //   // lineClamp?: boolean | undefined;
  // }

  // interface IconProps {
  //   size?: SizeRegular | undefined;
  //   type?: 'fill' | 'outline' | undefined;
  //   // emphasis?: 'min' | 'low' | 'med' | 'max' | undefined;
  // }

  // interface IconMap {
  //   dir: {
  //     ltr: Partial<IconProps> & { name: 'text-left'; surface: 'base' };
  //     rtl: Partial<IconProps> & { name: 'text-right'; surface: 'base' };
  //   };
  //   mode: {
  //     light: Partial<IconProps> & { name: 'mode-light'; surface: 'base' };
  //     dark: Partial<IconProps> & { name: 'mode-dark'; surface: 'base' };
  //     dim: Partial<IconProps> & { name: 'mode-dim'; surface: 'base' };
  //   };
  //   accent: {
  //     red: Partial<IconProps> & { name: 'shape-circle'; surface: 'red' };
  //     orange: Partial<IconProps> & { name: 'shape-circle'; surface: 'orange' };
  //     yellow: Partial<IconProps> & { name: 'shape-circle'; surface: 'yellow' };
  //     green: Partial<IconProps> & { name: 'shape-circle'; surface: 'green' };
  //     mint: Partial<IconProps> & { name: 'shape-circle'; surface: 'mint' };
  //     teal: Partial<IconProps> & { name: 'shape-circle'; surface: 'teal' };
  //     cyan: Partial<IconProps> & { name: 'shape-circle'; surface: 'cyan' };
  //     blue: Partial<IconProps> & { name: 'shape-circle'; surface: 'blue' };
  //     indigo: Partial<IconProps> & { name: 'shape-circle'; surface: 'indigo' };
  //     purple: Partial<IconProps> & { name: 'shape-circle'; surface: 'purple' };
  //     pink: Partial<IconProps> & { name: 'shape-circle'; surface: 'pink' };
  //     brown: Partial<IconProps> & { name: 'shape-circle'; surface: 'brown' };
  //   };
  // }