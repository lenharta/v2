import { Theme } from '@types';
import { IconProps } from '../Icon/types';

interface ToolBtnThemeProps {
  size?: Theme.SizeRegular | undefined;
  variant?: Theme.Variant | undefined;
}

interface ToolBtnProps extends ToolBtnThemeProps {
  icon?: Partial<IconProps> | undefined;
}

export type { ToolBtnProps };
