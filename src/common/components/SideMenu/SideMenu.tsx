import React from 'react';
import { SideMenuProps } from './types';

type SideMenuFactory = React.FC<SideMenuProps> & {};

const SideMenu: SideMenuFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <span>SideMenu</span>
    </React.Fragment>
  );
};

SideMenu.displayName = '@v2/SideMenu.Root';
export { SideMenu };
