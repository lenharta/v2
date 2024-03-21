import { ElementProps, ExoticComponent, ExoticRender, Orientation, Size } from '@/types';
import { Side } from '@floating-ui/react';

export interface ButtonContextValue {
  orientation: Orientation;
  size: Size;
}

export interface UnstyledButtonProps extends ElementProps<'button'> {
  // ...
}

export interface ButtonProps extends UnstyledButtonProps {
  size?: Size;
  loading?: boolean;
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
  size?: Size;
}

export type ButtonLoaderComponent = React.FC<ButtonLoaderProps>;
export type ButtonContentComponent = React.FC<ButtonContentProps>;

export type ButtonGroupComponentRender = ExoticRender<HTMLDivElement, ButtonGroupProps>;
export type ButtonGroupComponent = ExoticComponent<HTMLDivElement, ButtonGroupProps>;

export type UnstyledButtonComponentRender = ExoticRender<HTMLButtonElement, UnstyledButtonProps>;
export type UnstyledButtonComponent = ExoticComponent<HTMLButtonElement, UnstyledButtonProps>;

export interface ButtonComponents {
  Content: ButtonContentComponent;
  Loader: ButtonLoaderComponent;
  Group: ButtonGroupComponent;
}

export type ButtonComponentRender = ExoticRender<HTMLButtonElement, ButtonProps>;
export type ButtonComponent = ExoticComponent<HTMLButtonElement, ButtonProps> & ButtonComponents;
