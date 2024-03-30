import { Location, NavigateFunction } from 'react-router-dom';
import { ElementProps, ExoticComponent, ExoticRender } from '@/types';

export interface HeaderSkipToProps extends Omit<ElementProps<'a'>, 'children'> {
  url?: string | undefined;
  show?: boolean | undefined;
  label?: string | undefined;
  location?: Location | undefined;
  disabled?: boolean | undefined;
  onClick?: ((event: React.MouseEvent<HTMLAnchorElement>) => void) | undefined;
}

export type HeaderSkipToRenderType = ExoticRender<HTMLAnchorElement, HeaderSkipToProps>;
export type HeaderSkipToComponentType = ExoticComponent<HTMLAnchorElement, HeaderSkipToProps>;

export interface HeaderLogoProps extends ElementProps<'button'> {
  url?: string | undefined;
  show?: boolean | undefined;
  label?: string | undefined;
  location?: Location | undefined;
  navigate: NavigateFunction;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
}

export type HeaderLogoRenderType = ExoticRender<HTMLButtonElement, HeaderLogoProps>;
export type HeaderLogoComponentType = ExoticComponent<HTMLButtonElement, HeaderLogoProps>;

export interface HeaderProps extends ElementProps<'header'> {}

export type HeaderRenderType = ExoticRender<HTMLDivElement, HeaderProps>;
export type HeaderComponentType = ExoticComponent<HTMLDivElement, HeaderProps>;
