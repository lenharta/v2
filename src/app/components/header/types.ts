import { ElementProps, ExoticComponent, ExoticRender } from '@/types';

export interface HeaderSkipToProps extends Omit<ElementProps<'button'>, 'children'> {
  url?: string | undefined;
  show?: boolean | undefined;
  label?: string | undefined;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  navigate: (url: string) => void;
}

export type HeaderSkipToRenderType = ExoticRender<HTMLButtonElement, HeaderSkipToProps>;
export type HeaderSkipToComponentType = ExoticComponent<HTMLButtonElement, HeaderSkipToProps>;

export interface HeaderLogoProps extends ElementProps<'button'> {
  url?: string | undefined;
  show?: boolean | undefined;
  label?: string | undefined;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  navigate: (url: string) => void;
}

export type HeaderLogoRenderType = ExoticRender<HTMLButtonElement, HeaderLogoProps>;
export type HeaderLogoComponentType = ExoticComponent<HTMLButtonElement, HeaderLogoProps>;

export interface HeaderProps extends ElementProps<'header'> {}

export type HeaderRenderType = ExoticRender<HTMLDivElement, HeaderProps>;
export type HeaderComponentType = ExoticComponent<HTMLDivElement, HeaderProps> & {
  SkipTo: HeaderSkipToComponentType;
  Logo: HeaderLogoComponentType;
};
