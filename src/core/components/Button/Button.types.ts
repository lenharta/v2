import { Theme } from '@/types';
import { GroupProps } from '@/core';

type ButtonSize = 'default' | Theme.SizeRegular;
type ButtonRadius = 'default' | Theme.SizeRegular;
type ButtonVariant = 'default' | 'elevated' | 'accent' | 'accent-elevated';

interface ButtonThemeProps {
  size?: ButtonSize | undefined;
  radius?: ButtonRadius | undefined;
  variant?: ButtonVariant | undefined;
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

export type {
  ButtonSize,
  ButtonRadius,
  ButtonVariant,
  ButtonProps,
  ButtonGroupProps,
  ButtonContextValue,
};
