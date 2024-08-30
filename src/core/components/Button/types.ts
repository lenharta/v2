import { Theme } from '@/types';
import { UnstyledButtonProps, GroupProps, IconProps } from '@/core';

interface ButtonThemeProps {
  size?: Theme.SizeExpanded | undefined;
  align?: 'start' | 'end' | 'center' | undefined;
  justify?: 'start' | 'end' | 'center' | undefined;
  variant?: Theme.Variant | undefined;
  fullWidth?: boolean | undefined;
}

interface ButtonProps extends UnstyledButtonProps, ButtonThemeProps {
  value?: string | number | readonly string[] | undefined;
  iconLeft?: Partial<IconProps> | undefined;
  iconRight?: Partial<IconProps> | undefined;
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonIconProps {
  icon: Partial<IconProps> | undefined;
  position: 'left' | 'right';
  className: string;
}

interface ButtonGroupProps extends UnstyledButtonProps, ButtonThemeProps, GroupProps {
  value?: string | number | readonly string[] | undefined;
  component?: any;
  className?: string;
}

interface ButtonContextValue extends UnstyledButtonProps, ButtonThemeProps, GroupProps {
  value?: string | number | readonly string[] | undefined;
}

export type { ButtonProps, ButtonGroupProps, ButtonContextValue };
