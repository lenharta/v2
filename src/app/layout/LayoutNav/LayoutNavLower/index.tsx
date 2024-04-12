import { Box } from '@/core';
import { Store } from '@/types';

export type LayoutNavLowerComponent = React.FC<{
  navigate: (to: string) => void;
  dispatch: Store.AppDispatch;
}>;

const data = [
  { label: 'Contact', to: '/contact', icon: 'mention' },
  { label: 'Preferences', to: '/preferences', icon: 'wrench' },
] as const;

export const LayoutNavLower: LayoutNavLowerComponent = ({}) => {
  return <Box className="layout-nav-lower"></Box>;
};

LayoutNavLower.displayName = '@v2/app/LayoutNav.Lower';
