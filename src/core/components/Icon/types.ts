import * as React from 'react';
import { Theme } from '@/types';
import { ICON_MAP } from './library';

interface IconProps extends Theme.IconProps {
  name?: keyof (typeof ICON_MAP)['fill'];
  style?: React.CSSProperties | undefined;
  fill?: 'base' | 'accent' | Theme.Color | undefined;
  alpha?: number | undefined;
}

export type { IconProps };
