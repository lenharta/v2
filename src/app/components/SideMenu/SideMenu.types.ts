import { Store } from '@/types';
import { ActionProps } from '@/core';

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

interface SideMenuSelectOptionProps extends ActionProps {
  // getOptionId: (value: string) => string;
}

interface SideMenuSelectTargetProps extends ActionProps {
  // getTargetId: (group: string) => string;
}

export type {
  SideMenuProps,
  SideMenuSelectProps,
  SideMenuSelectDrawerProps,
  SideMenuSelectOptionProps,
  SideMenuSelectTargetProps,
};
