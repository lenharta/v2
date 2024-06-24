import { ActionProps } from '@/core';

interface SideMenuProps {}

type SideMenuSelectItem = {
  label: string;
  value: string | number | readonly string[];
  icon?: React.ReactNode | undefined;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  selected?: boolean | undefined;
};

interface SideMenuSelectProps {
  label: string;
  items: SideMenuSelectItem[];
  icon?: React.ReactNode | undefined;
  value: string | number | readonly string[];
  isOpen: boolean;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  selected?: boolean | undefined;
  onOptionChange: (value: string | number | readonly string[]) => void;
  onOpenChange: () => void;
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
