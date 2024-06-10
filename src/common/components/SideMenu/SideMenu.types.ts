import { Store, Theme } from '@/types';
import { FloatingBoxProps, FloatingTargetProps, IconProps } from '@/core';

type SideMenuCSS = Record<
  'root' | 'nav' | 'option' | 'panel' | 'select' | 'target' | 'panel',
  string
>;

type SideMenuPanelState = {
  accent: boolean;
  mode: boolean;
  dir: boolean;
};

type SideMenuNavItem = {
  label: string;
  value: string;
  icon?: IconProps['name'] | undefined;
  disabled?: boolean | undefined;
};

interface SideMenuProps {}

interface SideMenuNavProps {
  items: SideMenuNavItem[];
  value: string;
  store: Store.State;
  navigate: (to: string) => void;
}

type SideMenuSelectItem = {
  value: string;
  label: string;
  icon?: IconProps['name'] | undefined;
  color?: React.CSSProperties['color'] | undefined;
  disabled?: boolean | undefined;
};

type SideMenuSelectGroup<T extends SideMenuPanelState = SideMenuPanelState> = {
  group: keyof T;
  items: SideMenuSelectItem[];
  disabled?: boolean | undefined;
};

interface SideMenuSelectProps<T extends SideMenuPanelState = SideMenuPanelState> {
  open: T;
  group: keyof T;
  store: Store.State;
  items: SideMenuSelectItem[];
  disabled: boolean | undefined;
  dispatch: (store: Partial<Store.State>) => void;
  onOpenChange: (state: T) => void;
}

interface SideMenuTargetProps<T extends SideMenuPanelState = SideMenuPanelState>
  extends Partial<FloatingTargetProps> {
  open: T;
  group: keyof T;
  store: Store.State;
  scheme: Theme.Scheme;
  variant: 'default' | 'elevated';
  disabled?: boolean | undefined;
}

interface SideMenuPanelProps<T extends SideMenuPanelState = SideMenuPanelState>
  extends Partial<FloatingBoxProps> {
  open: T;
  group: keyof T;
  items: SideMenuSelectItem[];
  store: Store.State;
  scheme: Theme.Scheme;
  disabled?: boolean | undefined;
  variant: 'default' | 'elevated';
  dispatch: (store: Partial<Store.State>) => void;
  onOpenChange: (state: T) => void;
}

interface SideMenuOptionProps<T extends SideMenuPanelState = SideMenuPanelState> {
  open: T;
  group: keyof T;
  value: string;
  label: string;
  store: Store.State;
  icon?: IconProps['name'] | undefined;
  color?: React.CSSProperties['color'] | undefined;
  disabled?: boolean | undefined;
  dispatch: (store: Partial<Store.State>) => void;
  onOpenChange: (state: T) => void;
}

export type {
  SideMenuCSS,
  SideMenuNavItem,
  SideMenuSelectItem,
  SideMenuSelectGroup,
  SideMenuProps,
  SideMenuNavProps,
  SideMenuOptionProps,
  SideMenuPanelProps,
  SideMenuSelectProps,
  SideMenuTargetProps,
  SideMenuPanelState,
};
