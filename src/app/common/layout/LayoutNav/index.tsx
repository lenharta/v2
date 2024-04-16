import * as React from 'react';
import { Box } from '@/core';
import { useAppDispatch } from '@/store';
import { LayoutNavItem } from './LayoutNavItem';
import { useLocation, useNavigate } from 'react-router-dom';

export type LayoutNavComponent = React.FC<{}> & {
  Item: typeof LayoutNavItem;
};

const upperData = [
  { label: 'Home', to: '/', icon: 'home' },
  { label: 'Experience', to: '/experience', icon: 'briefcase' },
  { label: 'Projects', to: '/projects', icon: 'code' },
  { label: 'Toolbox', to: '/toolbox', icon: 'boxMultiple' },
  { label: 'Sandbox', to: '/sandbox', icon: 'boxRegular' },
] as const;

const lowerData = [
  { label: 'Demo', to: '/demo', icon: 'cube' },
  { label: 'Contact', to: '/contact', icon: 'mention' },
  { label: 'Preferences', to: '/preferences', icon: 'settings' },
] as const;

export const LayoutNav: LayoutNavComponent = ({}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const closePanels = () => {
    dispatch({
      isSearchOpen: undefined,
      isMenuOpen: undefined,
    });
  };

  return (
    <nav className="layout-nav">
      <Box className="layout-nav-upper">
        {upperData.map(({ to, icon, label }) => (
          <LayoutNav.Item
            to={to}
            key={to}
            icon={icon}
            label={label}
            navigate={navigate}
            selected={location.pathname === to || undefined}
            onClick={closePanels}
          />
        ))}
      </Box>

      <Box className="layout-nav-lower">
        {lowerData.map(({ to, icon, label }) => (
          <LayoutNav.Item
            to={to}
            key={to}
            icon={icon}
            label={label}
            navigate={navigate}
            selected={location.pathname === to || undefined}
            onClick={closePanels}
          />
        ))}
      </Box>
    </nav>
  );
};

LayoutNav.displayName = '@v2/app/Layout.Nav';
LayoutNav.Item = LayoutNavItem;
