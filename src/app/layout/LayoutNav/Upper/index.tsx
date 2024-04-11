import { Box } from '@/core';
import { Action } from '@/app/action';
import { Store } from '@/types';

export type LayoutNavUpperComponent = React.FC<{
  navigate: (to: string) => void;
  dispatch: Store.AppDispatch;
}>;

const data = [
  { label: 'Home', to: '/', icon: 'home' },
  { label: 'Experience', to: '/experience', icon: 'briefcase' },
  { label: 'Projects', to: '/projects', icon: 'code' },
  { label: 'Toolbox', to: '/toolbox', icon: 'boxMultiple' },
  { label: 'Sandbox', to: '/sandbox', icon: 'boxRegular' },
  { label: 'Demo', to: '/demo', icon: 'cube' },
  { label: 'Contact', to: '/contact', icon: 'mention' },
] as const;

export const LayoutNavUpper: LayoutNavUpperComponent = ({ navigate, dispatch }) => {
  return (
    <Box className="layout-nav-upper">
      {data.map(({ to, icon, label }) => (
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
  );
};

LayoutNavUpper.displayName = '@v2/app/LayoutNav.Upper';
