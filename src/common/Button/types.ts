import { Size, Orientation, ElementProps, ExoticRender, ExoticComponent } from '@/types';
import { SurfaceConfig } from '@/utils';

export interface ButtonContextValue {
  orientation?: Orientation;
  elevated?: boolean;
  disabled?: boolean;
  surface?: SurfaceConfig;
  loading?: boolean;
  size?: Size;
}

export interface UnstyledButtonProps extends ElementProps<'button'> {
  // ...
}

export interface ButtonProps extends UnstyledButtonProps {
  size?: Size;
  grow?: boolean;
  surface?: SurfaceConfig;
  loading?: boolean;
  elevated?: boolean;
  disabled?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  excludeTabOrder?: boolean;
}

export interface ButtonLoaderProps {}

export interface ButtonGroupProps extends ElementProps<'div'> {
  orientation?: Orientation;
  disabled?: boolean;
  elevated?: boolean;
  surface?: SurfaceConfig;
  loading?: boolean;
  size?: Size;
}

export type ButtonGroupRenderType = ExoticRender<HTMLDivElement, ButtonGroupProps>;
export type ButtonGroupComponentType = ExoticComponent<HTMLDivElement, ButtonGroupProps>;

export type UnstyledButtonRenderType = ExoticRender<HTMLButtonElement, UnstyledButtonProps>;
export type UnstyledButtonComponentType = ExoticComponent<HTMLButtonElement, UnstyledButtonProps>;

export interface ButtonComponents {
  Group: ButtonGroupComponentType;
}

export type ButtonRenderType = ExoticRender<HTMLButtonElement, ButtonProps>;
export type ButtonComponentType = ExoticComponent<HTMLButtonElement, ButtonProps> &
  ButtonComponents;
