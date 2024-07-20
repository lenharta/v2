import { Theme } from '@types';
import { IconProps } from '../Icon/types';

interface IconBtnThemeProps {
  size?: Theme.SizeRegular | undefined;
  variant?: Theme.Variant | undefined;
}

interface IconBtnProps extends IconBtnThemeProps {
  icon?: Partial<IconProps> | undefined;
}

export type { IconBtnProps };
