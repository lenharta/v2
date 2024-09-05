import React from 'react';
import { Core } from '@/types';
import { MenuTarget } from './MenuTarget';
import { MenuDisplay } from './MenuDisplay';
import { MenuProvider } from './MenuContext';

export type MenuProps = {};

export type MenuComponent = Core.NamedComponent & {
  (props: MenuProps): React.ReactNode;
  Display: typeof MenuDisplay;
  Target: typeof MenuTarget;
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
