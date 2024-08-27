import * as React from 'react';
import { Core } from '@/types';

interface DividerThemeProps {
  decoration?: 'solid' | 'dashed' | 'dotted' | undefined;
  iconPosition?: Core.Align | undefined;
  labelPosition?: Core.Align | 'center' | undefined;
}

interface DividerProps extends DividerThemeProps {
  icon?: React.ReactNode | undefined;
  label?: React.ReactNode | undefined;
}

export type { DividerProps };
