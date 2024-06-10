import { Theme } from '@/types';
import { ICON_MAP } from './icon-library';

type Icons = keyof typeof ICON_MAP;

interface IconProps {
  size?: Theme.Size | undefined;
  name?: keyof (typeof ICON_MAP)['fill'] | undefined;
  scheme?: 'accent' | Theme.Color | undefined;
  variant?: 'fill' | 'outline' | undefined;
  style?: React.CSSProperties | undefined;
}

export type { IconProps, Icons };
