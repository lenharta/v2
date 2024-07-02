import { UnstyledButtonProps, GroupProps, IconProps } from '@/core';
import { Theme } from '@/types';

interface ActionThemeProps {
  surface?: 'base' | 'accent' | Theme.Color | undefined;
  variant?: 'default' | 'elevated' | undefined;
}

interface ActionProps extends UnstyledButtonProps, ActionThemeProps {
  icon?: Partial<IconProps> | undefined;
  value?: string | number | readonly string[] | undefined;
}

interface ActionSpacerProps extends ActionThemeProps {
  grow?: boolean | undefined;
}

interface ActionGroupProps extends UnstyledButtonProps, ActionThemeProps, GroupProps {
  icon?: Partial<IconProps> | undefined;
  value?: string | number | readonly string[] | undefined;
}

interface ActionContextValue extends UnstyledButtonProps, ActionThemeProps, GroupProps {
  icon?: Partial<IconProps> | undefined;
  value?: string | number | readonly string[] | undefined;
}

export type { ActionProps, ActionSpacerProps, ActionGroupProps, ActionContextValue };
