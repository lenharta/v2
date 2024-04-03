import { Size5, Orientation, ElementProps, ExoticRender, ExoticComponent } from '@/types';

export interface ButtonContextValue {
  orientation?: Orientation | undefined;
  disabled?: boolean | undefined;
  loading?: boolean | undefined;
  size?: Size5 | undefined;
}

export interface UnstyledButtonProps extends ElementProps<'button'> {
  // ...
}

export interface ButtonProps extends UnstyledButtonProps {
  size?: Size5 | undefined;
  grow?: boolean | undefined;
  scheme?: 'default' | undefined;
  loading?: boolean | undefined;
  disabled?: boolean | undefined;
  leftContent?: React.ReactNode | undefined;
  rightContent?: React.ReactNode | undefined;
  excludeTabOrder?: boolean | undefined;
}

export interface ButtonLoaderProps {}

export interface ButtonGroupProps extends ElementProps<'div'> {
  orientation?: Orientation | undefined;
  disabled?: boolean | undefined;
  loading?: boolean | undefined;
  size?: Size5 | undefined;
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
