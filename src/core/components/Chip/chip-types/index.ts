import React from 'react';
import { Theme } from '@/types';

interface ChipThemeProps {
  size: Theme.SizeCompact;
  variant: 'default' | 'elevated' | 'accent';
}

interface ChipContext {
  size: Theme.SizeCompact;
  variant: 'default' | 'elevated' | 'accent';
  orientation: Theme.Orientation;
  withBorder?: boolean | undefined;
  radius?: number | undefined;
}

interface ChipGroupProps extends Partial<ChipThemeProps> {
  value: string;
  children: React.ReactNode;
  onValueChange: (value: string) => void;
  orientation?: Theme.Orientation | undefined;
  withBorder?: boolean | undefined;
  radius?: number | undefined;
  variant?: 'default' | 'elevated' | 'accent' | undefined;
  size?: Theme.SizeCompact | undefined;
}

interface ChipProps extends Partial<ChipThemeProps> {
  label: string;
  size?: Theme.SizeCompact | undefined;
  value?: string | undefined;
  variant?: 'default' | 'elevated' | 'accent' | undefined;
  withBorder?: boolean | undefined;
  radius?: number | undefined;
  onChange?: ((event: React.ChangeEvent<HTMLButtonElement>) => void) | undefined;
}

export type { ChipContext, ChipGroupProps, ChipProps };
