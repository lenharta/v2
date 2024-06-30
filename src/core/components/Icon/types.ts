import { Theme } from '@/types';
import { ICON_MAP } from './library';

interface IconProps extends Theme.IconProps {
  name?: keyof (typeof ICON_MAP)['fill'];
}

export type { IconProps };
