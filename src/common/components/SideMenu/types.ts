import { IconProps } from '@/core';

type SideMenuCSS = Record<'root' | 'nav' | 'option' | 'panel' | 'select' | 'target', string>;

type SideMenuNavItem = { label: string; value: string; icon: IconProps['name'] };

interface SideMenuProps {}

interface SideMenuNavProps {
  data: SideMenuNavItem[];
  navigate: (to: string) => void;
}

export type { SideMenuCSS, SideMenuProps, SideMenuNavProps, SideMenuNavItem };
