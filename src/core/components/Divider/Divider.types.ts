import { Theme } from '@/types';

interface DividerProps {
  size?: Theme.SizeCompact | undefined;
  icon?: React.ReactNode | undefined;
  label?: React.ReactNode | undefined;
  variant?: 'default' | 'accent' | undefined;
  decoration?: 'solid' | 'dashed' | 'dotted' | undefined;
  iconPosition?: 'start' | 'end' | undefined;
  labelPosition?: 'start' | 'center' | 'end' | undefined;
}

export type { DividerProps };
