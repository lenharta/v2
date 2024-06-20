import { IconProps } from '@/core';

interface ToolButtonProps {
  icon?: IconProps['name'] | undefined;
  size?: IconProps['size'] | undefined;
  variant?: 'default' | 'elevated' | 'accent' | undefined;
  iconVariant?: IconProps['variant'] | undefined;
}

export type { ToolButtonProps };
