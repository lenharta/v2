import { Theme } from '@/types';
import { UnstyledButtonProps, GroupProps, IconProps } from '@/core';

interface ButtonThemeProps {
  size?: Theme.SizeExpanded | undefined;
  align?: 'start' | 'end' | 'center' | undefined;
  justify?: 'start' | 'end' | 'center' | undefined;
  variant?:
    | 'base-default'
    | 'base-elevated'
    | 'accent-default'
    | 'accent-elevated'
    | 'accent-tonal'
    | 'accent-ghost'
    | `${Theme.Color}-tonal`
    | `${Theme.Color}-ghost`
    | `${Theme.Color}-default`
    | `${Theme.Color}-elevated`
    | undefined;
}

interface ButtonProps extends UnstyledButtonProps, ButtonThemeProps {
  value?: string | number | readonly string[] | undefined;
  iconLeft?: Partial<IconProps> | undefined;
  iconRight?: Partial<IconProps> | undefined;
}

interface ButtonGroupProps extends UnstyledButtonProps, ButtonThemeProps, GroupProps {
  value?: string | number | readonly string[] | undefined;
}

interface ButtonContextValue extends UnstyledButtonProps, ButtonThemeProps, GroupProps {
  value?: string | number | readonly string[] | undefined;
}

export type { ButtonProps, ButtonGroupProps, ButtonContextValue };
