import React from 'react';
import { SideMenuProps } from './SideMenu.types';

const SideMenu: React.FC<SideMenuProps> = (props) => {
  const { ...forwardedProps } = props;
  return (
    <div className="v2-sidemenu" {...forwardedProps}>
      <span>SideMenu</span>
    </div>
  );
};

SideMenu.displayName = '@v2/SideMenu';
export { SideMenu };
