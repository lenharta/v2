import React from 'react';
import { Core } from '@/types';
import { Action } from '@/core';
import { SideMenuProps } from './SideMenu.types';
import { useLocation, useNavigate } from 'react-router-dom';

const data: Core.LinkItem[] = [
  { value: '/experience', label: 'navigate to experience', icon: 'briefcase' },
  { value: '/projects', label: 'navigate to projects', icon: 'easel' },
  { value: '/toolbox', label: 'navigate to toolbox', icon: 'layers' },
  { value: '/sandbox', label: 'navigate to sandbox', icon: 'box' },
  { value: '/settings', label: 'navigate to settings', icon: 'gear' },
];

const SideMenu: React.FC<SideMenuProps> = (props) => {
  const { ...forwardedProps } = props;

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="v2-sidemenu" {...forwardedProps}>
      <div className="v2-sidemenu-inner">
        <Action.Group orientation="vertical" value={location.pathname}>
          {data.map((item) => (
            <Action
              onClick={(event) => navigate(event.currentTarget.value)}
              label={item.label}
              value={item.value}
              icon={item.icon}
              key={item.value}
            />
          ))}

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
