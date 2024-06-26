import { IconProps, UnstyledButtonProps } from '@/core';
import { Theme } from '@/types';

interface IconButtonThemeProps {
  size?: IconProps['size'] | undefined;
  type?: IconProps['type'] | undefined;
  radius?: Theme.SizeRegular | 'rd' | undefined;
  accent?: IconProps['accent'] | undefined;
  variant?: 'default' | 'default-elevated' | 'accent' | 'accent-elevated' | undefined;
}

interface IconButtonProps extends UnstyledButtonProps, IconButtonThemeProps {
  icon?: IconProps['name'] | undefined;
}

export type { IconButtonProps, IconButtonThemeProps };
