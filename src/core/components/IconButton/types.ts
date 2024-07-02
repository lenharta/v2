import { IconProps, UnstyledButtonProps } from '@/core';

interface IconButtonThemeProps {
  type?: IconProps['type'] | undefined;
}

interface IconButtonProps extends UnstyledButtonProps, IconButtonThemeProps {
  icon?: IconProps['name'] | undefined;
}

export type { IconButtonProps, IconButtonThemeProps };
