import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@/core';
import { useAppDispatch } from '@/store';
import { LayoutNavItem } from './LayoutNavItem';

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
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const closeAllPanels = () => {
    dispatch({
      isSearchOpen: undefined,
      isMenuOpen: undefined,
    });
  };

  const isSelected = (to: string) => {
    return location.pathname === to ? true : undefined;
  };

  return (
    <nav className="layout-nav">
      <Box className="layout-nav-upper">
        {upperData.map(({ to, icon, label }, index, array) => (
          <LayoutNav.Item
            to={to}
            key={to}
            icon={icon}
            label={label}
            itemIndex={index}
            itemTotal={array.length - 1}
            onClick={closeAllPanels}
            selected={isSelected(to)}
            navigate={navigate}
          />
        ))}
      </Box>

      <Box className="layout-nav-lower">
        {lowerData.map(({ to, icon, label }, index, array) => (
          <LayoutNav.Item
            to={to}
            key={to}
            icon={icon}
            label={label}
            itemIndex={index}
            itemTotal={array.length - 1}
            onClick={closeAllPanels}
            selected={isSelected(to)}
            navigate={navigate}
          />
        ))}
      </Box>
    </nav>
  );
};

LayoutNav.displayName = '@v2/app/Layout.Nav';
LayoutNav.Item = LayoutNavItem;
