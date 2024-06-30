import { UnstyledButtonProps, GroupProps } from '@/core';

interface ButtonThemeProps {}

interface ButtonProps extends UnstyledButtonProps, ButtonThemeProps {
  value?: string | number | readonly string[] | undefined;
  leftContent?: React.ReactNode | undefined;
  rightContent?: React.ReactNode | undefined;
}

interface ButtonGroupProps extends UnstyledButtonProps, ButtonThemeProps, GroupProps {
  value?: string | number | readonly string[] | undefined;
}

interface ButtonContextValue extends UnstyledButtonProps, ButtonThemeProps, GroupProps {
  value?: string | number | readonly string[] | undefined;
}

export type { ButtonProps, ButtonGroupProps, ButtonContextValue };
