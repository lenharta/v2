import { Theme } from '@/types';
import { GroupProps } from '@/core';

interface ActionThemeProps {
  size?: Theme.SizeRegular | undefined;
  radius?: 'default' | Theme.SizeRegular | undefined;
  variant?: 'default' | 'default-elevated' | 'accent' | 'accent-elevated' | undefined;
}

interface ActionProps extends ActionThemeProps {
  icon?: React.ReactNode | undefined;
  value?: string | number | readonly string[] | undefined;
  label?: string | undefined;
  loading?: boolean | undefined;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  selected?: boolean | undefined;
}

interface ActionSpacerProps extends ActionThemeProps {
  grow?: boolean | undefined;
}

interface ActionGroupProps extends ActionThemeProps, GroupProps {
  icon?: React.ReactNode | undefined;
  value?: string | number | readonly string[] | undefined;
  loading?: boolean | undefined;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
}

interface ActionContextValue extends ActionThemeProps, GroupProps {
  icon?: React.ReactNode | undefined;
  value?: string | number | readonly string[] | undefined;
  loading?: boolean | undefined;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
}

export type { ActionProps, ActionSpacerProps, ActionGroupProps, ActionContextValue };
