import { Static, Store } from '@/types';
import { ActionProps, IconProps } from '@/core';

interface SideMenuProps {}

type SideMenuSelectValue = Store.State['accent'] | Store.State['mode'] | Store.State['dir'];

type SideMenuSelectItem = {
  label: string;
  value: SideMenuSelectValue;
  icon?: React.ReactNode | undefined;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  selected?: boolean | undefined;
};

interface SideMenuLinkProps {
  icon: Partial<IconProps>;
  item: Static.RouteItem['link'];
  onClick: (to: string) => void;
  location?: Location | undefined;
}

interface SideMenuSelectProps {
  label: string;
  items: SideMenuSelectItem[];
  icon?: React.ReactNode | undefined;
  value: SideMenuSelectValue;
  isOpen: boolean;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  selected?: boolean | undefined;
  onOpenChange?: (isOpen: boolean) => void;
  onChange: (value: SideMenuSelectValue) => void;
  onClose?: (() => void) | undefined;
  onOpen?: (() => void) | undefined;
}

interface SideMenuSelectDrawerProps {}

interface SideMenuSelectOptionProps extends ActionProps {}

interface SideMenuSelectTargetProps extends ActionProps {}

export type {
  SideMenuProps,
  SideMenuLinkProps,
  SideMenuSelectProps,
  SideMenuSelectDrawerProps,
  SideMenuSelectOptionProps,
  SideMenuSelectTargetProps,
};
