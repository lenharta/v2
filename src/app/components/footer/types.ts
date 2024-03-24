export interface FooterMenuItemProps {
  value: string;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  navigate?: (url: string) => void;
}

export interface FooterMenuGroupProps {
  group: string;
  items: FooterMenuItemProps[];
}

export interface FooterMenuProps {
  groups: FooterMenuGroupProps[];
}

export interface FooterProps {}

export type FooterMenuComponent = React.FC<FooterMenuProps>;
export type FooterMenuItemComponent = React.FC<FooterMenuItemProps>;
export type FooterMenuGroupComponent = React.FC<FooterMenuProps>;

export type FooterComponent = React.FC<FooterProps> & {
  Menu: FooterMenuComponent;
};
