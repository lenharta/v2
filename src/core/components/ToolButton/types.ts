import { IconProps, UnstyledButtonProps } from '@/core';

interface ToolButtonThemeProps {
  type?: IconProps['type'] | undefined;
}

interface ToolButtonProps extends UnstyledButtonProps, ToolButtonThemeProps {
  icon?: IconProps['name'] | undefined;
}

export type { ToolButtonProps, ToolButtonThemeProps };
