import * as React from 'react';
import { useAppDispatch, useAppState } from '@/store';
import { MenuFooter } from './Footer';
import { MenuTarget } from './Target';
import { MenuPanel } from './Panel';
import { MenuLogo } from './Logo';
import { MenuNav } from './Nav';

export type MenuComponent = React.FC & {
  Footer: typeof MenuFooter;
  Target: typeof MenuTarget;
  Panel: typeof MenuPanel;
  Logo: typeof MenuLogo;
  Nav: typeof MenuNav;
};

export const Menu: MenuComponent = () => {
  const dispatch = useAppDispatch();
  const state = useAppState();
  console.log(state);
  return (
    <React.Fragment>
      <Menu.Target state={state} dispatch={dispatch} />
      <Menu.Panel state={state} dispatch={dispatch} />
    </React.Fragment>
  );
};

Menu.displayName = '@v2/site/Menu';
Menu.Footer = MenuFooter;
Menu.Target = MenuTarget;
Menu.Panel = MenuPanel;
Menu.Logo = MenuLogo;
Menu.Nav = MenuNav;
