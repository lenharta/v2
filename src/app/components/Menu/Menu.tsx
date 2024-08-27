import React from 'react';
import { MenuTarget } from './MenuTarget';
import { MenuDisplay } from './MenuDisplay';
import { MenuProvider } from './MenuContext';

export interface MenuProps {}

export type MenuComponent = React.FC<MenuProps> & {
  Target: typeof MenuTarget;
  Display: typeof MenuDisplay;
};

export const Menu: MenuComponent = ({}) => {
  return (
    <React.Fragment>
      <MenuProvider value={{}}>
        <Menu.Target />
        <Menu.Display />
      </MenuProvider>
    </React.Fragment>
  );
};

Menu.Target = MenuTarget;
Menu.Display = MenuDisplay;
Menu.displayName = '@v2/Menu';
