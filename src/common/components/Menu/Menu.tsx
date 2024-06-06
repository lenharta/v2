import React from 'react';
import { MenuProps } from './types';

type MenuFactory = React.FC<MenuProps> & {};

const Menu: MenuFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <span>Menu</span>
    </React.Fragment>
  );
};

Menu.displayName = '@v2/Menu.Root';
export { Menu };
