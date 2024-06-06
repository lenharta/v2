import { Core, Theme } from '@/types';
import React from 'react';

interface DividerProps {
  icon?: React.ReactNode | undefined;
  label?: React.ReactNode | undefined;
  position?: Core.Align | 'center' | undefined;
  orientation?: Theme.Orientation | undefined;
  iconPosition?: Core.Align | undefined;
}

interface DividerContentProps {
  show: boolean;
  label?: React.ReactNode | undefined;
  position?: Core.Align | undefined;
  className?: string | undefined;
}

interface DividerSeparatorProps {
  className?: string | undefined;
}

export type { DividerProps, DividerContentProps, DividerSeparatorProps };
