import * as React from 'react';
import { Theme } from '@/types';

interface CheckGridProps {
  size?: Theme.SizeRegular | undefined;
  variant?: 'default' | 'accent' | undefined;
}

interface CheckGridRowProps {
  children?: React.ReactNode | undefined;
}

interface CheckGridCellProps {
  children?: React.ReactNode | undefined;
}

export type { CheckGridProps, CheckGridRowProps, CheckGridCellProps };
