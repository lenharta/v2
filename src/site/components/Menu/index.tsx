import * as React from 'react';
import { MenuNav } from './Nav';
import { MenuLogo } from './Logo';
import { MenuPanel } from './Panel';
import { MenuTarget } from './Target';
import { MenuFooter } from './Footer';

export type MenuComponent = React.FC & {
  Footer: typeof MenuFooter;
  Target: typeof MenuTarget;
  Panel: typeof MenuPanel;
  Logo: typeof MenuLogo;
  Nav: typeof MenuNav;
};

export const Menu: MenuComponent = () => {
  return (
    <React.Fragment>
      <Menu.Target />
      <Menu.Panel />
    </React.Fragment>
  );
};

Menu.displayName = '@v2/site/Menu';
Menu.Footer = MenuFooter;
Menu.Target = MenuTarget;
Menu.Panel = MenuPanel;
Menu.Logo = MenuLogo;
Menu.Nav = MenuNav;
