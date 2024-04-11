import { Box } from '@/core';
import { Action } from '@/app/action';

export type LayoutNavUpperComponent = React.FC<{
  navigate: (to: string) => void;
}>;

const data = [
  { label: 'Home', to: '/', icon: 'home' },
  { label: 'Experience', to: '/experience', icon: 'briefcase' },
  { label: 'Projects', to: '/projects', icon: 'code' },
  { label: 'Toolbox', to: '/toolbox', icon: 'boxMultiple' },
  { label: 'Sandbox', to: '/sandbox', icon: 'boxRegular' },
  { label: 'Demo', to: '/demo', icon: 'cube' },
] as const;

export const LayoutNavUpper: LayoutNavUpperComponent = ({ navigate }) => {
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
        />
      ))}
    </Box>
  );
};

LayoutNavUpper.displayName = '@v2/app/LayoutNav.Upper';
