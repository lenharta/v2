import { Theme } from '@/types';
import { ICON_MAP } from './library';

interface IconProps {
  size?: Theme.SizeExpanded | undefined;
  type?: 'fill' | 'outline' | undefined;
  name?: keyof (typeof ICON_MAP)['fill'];
  accent?: Theme.Color | undefined;
  'data-testid'?: string | undefined;
}

export type { IconProps };
