import clsx from 'clsx';
import * as React from 'react';
import { ThemeProps } from '@/types';
import { createThemeClxss } from '../create-theme-clxss';

export interface ThemeClxssProps extends ThemeProps {
  clxss: string;
  className?: string;
}

export function useThemeClxss(props: ThemeClxssProps): string {
  return React.useMemo(() => {
    const { clxss, className, ...otherProps } = props;
    const clxsses = createThemeClxss(otherProps).trim();
    return clsx(clxss, clxsses, className);
  }, [props]);
}
