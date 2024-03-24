import {
  Side,
  Size,
  Orientation,
  SurfaceConfig,
  ElementProps,
  ExoticRender,
  ExoticComponent,
} from '@/types';

export interface ButtonContextValue {
  orientation?: Orientation;
  disabled?: boolean;
  loading?: boolean;
  size?: Size;
}

export interface UnstyledButtonProps extends ElementProps<'button'> {
  // ...
}

export interface ButtonProps extends UnstyledButtonProps {
  size?: Size;
  grow?: boolean;
  loading?: boolean;
  surface?: SurfaceConfig;
  disabled?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  excludeTabOrder?: boolean;
}

export interface ButtonContentProps {
  position: Extract<Side, 'left' | 'right'>;
  children?: React.ReactNode;
}

export interface ButtonLoaderProps {}

export interface ButtonGroupProps extends ElementProps<'div'> {
  orientation?: Orientation;
  disabled?: boolean;
  loading?: boolean;
  size?: Size;
}

export type ButtonLoaderComponent = React.FC<ButtonLoaderProps>;
export type ButtonContentComponent = React.FC<ButtonContentProps>;

export type ButtonGroupRenderType = ExoticRender<HTMLDivElement, ButtonGroupProps>;
export type ButtonGroupComponent = ExoticComponent<HTMLDivElement, ButtonGroupProps>;

export type UnstyledButtonRenderType = ExoticRender<HTMLButtonElement, UnstyledButtonProps>;
export type UnstyledButtonComponent = ExoticComponent<HTMLButtonElement, UnstyledButtonProps>;

export interface ButtonComponents {
  Content: ButtonContentComponent;
  Loader: ButtonLoaderComponent;
  Group: ButtonGroupComponent;
}

export type ButtonRenderType = ExoticRender<HTMLButtonElement, ButtonProps>;
export type ButtonComponent = ExoticComponent<HTMLButtonElement, ButtonProps> & ButtonComponents;
