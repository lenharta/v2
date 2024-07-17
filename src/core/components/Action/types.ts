import { UnstyledButtonProps, GroupProps, IconProps } from '@core';
import { Theme } from '@types';

interface ActionThemeProps {
  accent?: boolean | undefined;
  elevated?: boolean | undefined;
  variant?: Theme.Variant | undefined;
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
