import { Core, Theme } from '@/types';

interface DividerThemeProps {
  size?: Theme.SizeCompact | undefined;
  variant?: 'default' | 'accent' | undefined;
  decoration?: 'solid' | 'dashed' | 'dotted' | undefined;
  labelPosition?: Core.Align | 'center' | undefined;
  iconPosition?: Core.Align | undefined;
}

interface DividerProps extends DividerThemeProps {
  icon?: React.ReactNode | undefined;
  label?: React.ReactNode | undefined;
}

export type { DividerProps };
