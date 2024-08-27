import { Theme } from '@/types';
import { IconProps, DividerProps } from '@/core';

interface TabsThemeProps {
  variant?: Theme.Variant | undefined;
}

interface TabsKeyDownOptions {
  onKeyDown?: ((event: React.KeyboardEvent<HTMLButtonElement>) => void) | undefined;
  preventDefault: boolean;
  parentSelector: string;
  childSelector: string;
  loop: boolean;
}

interface TabsItemProps extends Partial<TabsThemeProps> {
  value: string;
  label?: string | undefined;
  children?: React.ReactNode | undefined;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  loading?: boolean | undefined;
  iconRight?: Partial<IconProps> | undefined;
  iconLeft?: Partial<IconProps> | undefined;
}

interface TabsListProps {
  withDivider?: boolean | undefined;
  dividerProps?: DividerProps | undefined;
}

interface TabsPanelProps {
  value: string;
  style?: React.CSSProperties | undefined;
  keepMounted?: boolean | undefined;
}

interface TabsProps extends Partial<TabsThemeProps> {
  value: string;
  children: React.ReactNode;
  onValueChange: (value: string) => void;
  keyboardActivated?: boolean | undefined;
  keyboardOptions?: Partial<TabsKeyDownOptions> | undefined;
  orientation?: Theme.Orientation | undefined;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  loading?: boolean | undefined;
}

interface TabsContext extends TabsThemeProps {
  value: string;
  getListId: () => string;
  getItemId: (v: string) => string;
  getPanelId: (v: string) => string;
  onValueChange: (value: string) => void;
  keyboardActivated?: boolean | undefined;
  keyboardOptions?: Partial<TabsKeyDownOptions> | undefined;
  orientation?: Theme.Orientation | undefined;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  loading?: boolean | undefined;
}

export type {
  TabsProps,
  TabsContext,
  TabsThemeProps,
  TabsItemProps,
  TabsListProps,
  TabsPanelProps,
};
