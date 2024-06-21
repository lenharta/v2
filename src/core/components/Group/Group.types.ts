import { Core, Theme } from '@/types';

interface GroupThemeProps {
  gap?: 'default' | Theme.SizeRegular | undefined;
}

interface GroupProps extends GroupThemeProps {
  children?: React.ReactNode | undefined;
  orientation?: Core.Orientation | undefined;
}

export type { GroupProps, GroupThemeProps };
