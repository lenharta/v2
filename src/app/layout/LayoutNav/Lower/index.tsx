import { Box } from '@/core';
import { Action } from '@/app/action';

export type LayoutNavLowerComponent = React.FC<{
  navigate: (to: string) => void;
}>;

const data = [
  { label: 'Contact', to: '/contact', icon: 'mention' },
  { label: 'Preferences', to: '/preferences', icon: 'wrench' },
] as const;

export const LayoutNavLower: LayoutNavLowerComponent = ({ navigate }) => {
  return (
    <Box className="layout-nav-lower">
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

LayoutNavLower.displayName = '@v2/app/LayoutNav.Lower';
