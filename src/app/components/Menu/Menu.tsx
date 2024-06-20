import React from 'react';
import { MenuProps } from './Menu.types';

const Menu: React.FC<MenuProps> = (props) => {
  const { ...forwardedProps } = props;
  return (
    <div className="v2-menu" {...forwardedProps}>
      <span>Menu</span>
    </div>
  );
};

Menu.displayName = '@v2/Menu';
export { Menu };
