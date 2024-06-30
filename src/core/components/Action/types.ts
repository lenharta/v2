import { UnstyledButtonProps, GroupProps } from '@/core';

interface ActionThemeProps {}

interface ActionProps extends UnstyledButtonProps, ActionThemeProps {
  value?: string | number | readonly string[] | undefined;
  icon?: React.ReactNode | undefined;
}

interface ActionSpacerProps extends ActionThemeProps {
  grow?: boolean | undefined;
}

interface ActionGroupProps extends UnstyledButtonProps, ActionThemeProps, GroupProps {
  value?: string | number | readonly string[] | undefined;
  icon?: React.ReactNode | undefined;
}

interface ActionContextValue extends UnstyledButtonProps, ActionThemeProps, GroupProps {
  value?: string | number | readonly string[] | undefined;
  icon?: React.ReactNode | undefined;
}

export type { ActionProps, ActionSpacerProps, ActionGroupProps, ActionContextValue };
