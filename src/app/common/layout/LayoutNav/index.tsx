import { Box } from '@/core';
import { Action } from '@/app/common/action';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store';

export type LayoutNavComponent = React.FC<{}> & {};

const upperData = [
  { label: 'Home', to: '/', icon: 'home' },
  { label: 'Experience', to: '/experience', icon: 'briefcase' },
  { label: 'Projects', to: '/projects', icon: 'code' },
  { label: 'Toolbox', to: '/toolbox', icon: 'boxMultiple' },
  { label: 'Sandbox', to: '/sandbox', icon: 'boxRegular' },
  { label: 'Demo', to: '/demo', icon: 'cube' },
  { label: 'Contact', to: '/contact', icon: 'mention' },
] as const;

export const LayoutNav: LayoutNavComponent = ({}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <nav className="layout-nav">
      <Box className="layout-nav-upper">
        {upperData.map(({ to, icon, label }) => (
          <Action
            to={to}
            key={label}
            icon={icon}
            label={label}
            navigate={navigate}
            className="layout-nav-item"
            onClick={() => {
              dispatch({
                isSearchOpen: undefined,
                isMenuOpen: undefined,
              });
            }}
          />
        ))}
      </Box>
      <Box className="layout-nav-lower"></Box>
    </nav>
  );
};

LayoutNav.displayName = '@v2/app/Layout.Nav';
