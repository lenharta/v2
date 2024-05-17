import React from 'react';
import { MenuGrid } from './MenuGrid';
import { MenuPanel } from './MenuPanel';
import { MenuTarget } from './MenuTarget';

interface MenuProps {}

type MenuComponent = React.FC<MenuProps> & {
  Target: typeof MenuTarget;
  Panel: typeof MenuPanel;
  Grid: typeof MenuGrid;
};

const Menu: MenuComponent = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <Menu.Target children={<Menu.Grid />} />
      <Menu.Panel />
    </React.Fragment>
  );
};

Menu.Grid = MenuGrid;
Menu.Panel = MenuPanel;
Menu.Target = MenuTarget;
Menu.displayName = '@v2/Menu';
export { Menu, type MenuProps };
