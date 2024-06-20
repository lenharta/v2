import { Theme } from '@/types';
import { IconProps } from '@/core';

interface IconButtonProps {
  size?: Theme.Size | undefined;
  icon?: IconProps['name'] | undefined;
  variant?: 'default' | 'accent' | undefined;
}

export type { IconButtonProps };
