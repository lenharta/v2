import React from 'react';
import { SideMenuProps } from './SideMenu.types';
import { Action } from '@/core';

const SideMenu: React.FC<SideMenuProps> = (props) => {
  const { ...forwardedProps } = props;
  return (
    <div className="v2-sidemenu" {...forwardedProps}>
      <div className="v2-sidemenu-inner">
        <Action.Group orientation="vertical">
          <Action label="action" icon="house-door" />
          <Action label="action" icon="briefcase" />
          <Action label="action" icon="easel" />
          <Action label="action" icon="layers" />
          <Action label="action" icon="box" />
          <Action label="action" icon="at" />
          <Action.Spacer grow />
          <Action label="action" icon="shape-circle" />
          <Action label="action" icon="shape-circle" />
          <Action label="action" icon="shape-circle" />
        </Action.Group>
      </div>
    </div>
  );
};

SideMenu.displayName = '@v2/SideMenu';
export { SideMenu };
