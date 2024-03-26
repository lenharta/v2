import { ElementProps, ExoticComponent, ExoticRender } from '@/types';

export interface FooterMenuItemProps extends ElementProps<'button'> {
  value: string;
  label: string;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  navigate: (url: string) => void;
}

export type FooterMenuItemRenderType = ExoticRender<HTMLButtonElement, FooterMenuItemProps>;
export type FooterMenuItemComponentType = ExoticComponent<HTMLButtonElement, FooterMenuItemProps>;

export interface FooterMenuGroupProps extends ElementProps<'div'> {
  group: string;
  items: FooterMenuItemProps[];
}

export type FooterMenuGroupRenderType = ExoticRender<HTMLDivElement, FooterMenuGroupProps>;
export type FooterMenuGroupComponentType = ExoticComponent<HTMLDivElement, FooterMenuGroupProps>;

export interface FooterMenuProps extends ElementProps<'nav'> {
  groups: FooterMenuGroupProps[];
}

export type FooterMenuRenderType = ExoticRender<HTMLElement, FooterMenuProps>;
export type FooterMenuComponentType = ExoticComponent<HTMLElement, FooterMenuProps>;

export interface FooterProps extends ElementProps<'footer'> {}

export type FooterRenderType = ExoticRender<HTMLElement, FooterMenuItemProps>;

export type FooterComponentType = ExoticComponent<HTMLElement, FooterMenuItemProps> & {
  Menu: FooterMenuComponentType;
};
