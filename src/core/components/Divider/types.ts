import { Core, Theme } from '@/types';
import React from 'react';

interface DividerThemeProps {
  variant: 'default' | 'elevated';
  size: Theme.SizeCompact;
}

interface DividerProps extends Partial<DividerThemeProps> {
  icon?: React.ReactNode | undefined;
  label?: React.ReactNode | undefined;
  position?: Core.Align | 'center' | undefined;
  orientation?: Theme.Orientation | undefined;
  iconPosition?: Core.Align | undefined;
}

interface DividerContentProps extends DividerThemeProps {
  icon?: React.ReactNode | undefined;
  label?: React.ReactNode | undefined;
}

interface DividerLabelProps extends DividerThemeProps {
  label?: React.ReactNode | undefined;
  className?: string | undefined;
}

interface DividerSeparatorProps extends DividerThemeProps {
  show?: boolean | undefined;
  className?: string | undefined;
}

export type { DividerProps, DividerLabelProps, DividerContentProps, DividerSeparatorProps };
