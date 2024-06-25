import { Theme } from '@/types';
import { GroupProps } from '@/core';

interface ButtonThemeProps {
  size?: Theme.SizeRegular | undefined;
  radius?: Theme.SizeRegular | undefined;
  variant?: 'default' | 'default-elevated' | 'accent' | 'accent-elevated' | undefined;
}

interface ButtonProps extends ButtonThemeProps {
  value?: string | number | readonly string[] | undefined;
  loading?: boolean | undefined;
  readOnly?: boolean | undefined;
  disabled?: boolean | undefined;
  selected?: boolean | undefined;
  leftContent?: React.ReactNode | undefined;
  rightContent?: React.ReactNode | undefined;
}

interface ButtonGroupProps extends ButtonThemeProps, GroupProps {
  value?: string | number | readonly string[] | undefined;
  loading?: boolean | undefined;
  readOnly?: boolean | undefined;
  disabled?: boolean | undefined;
}

interface ButtonContextValue extends ButtonThemeProps, GroupProps {
  value?: string | number | readonly string[] | undefined;
  loading?: boolean | undefined;
  readOnly?: boolean | undefined;
  disabled?: boolean | undefined;
}

export type { ButtonProps, ButtonGroupProps, ButtonContextValue };
