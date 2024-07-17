import * as React from 'react';
import { Action } from '@core';

interface MenuProps {}

type MenuFactory = React.FC<MenuProps> & {};

const Menu: MenuFactory = ({}) => {
  return (
    <React.Fragment>
      <Action
        icon={{ name: 'dots-horizontal', type: 'outline' }}
        onClick={(event) => console.log(event.currentTarget.value)}
        aria-label="menu button"
      />
    </React.Fragment>
  );
};

Menu.displayName = '@v2/App.Menu';
export { Menu, type MenuProps, type MenuFactory };
