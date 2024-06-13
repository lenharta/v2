import React from 'react';
import { Store, Theme } from '@/types';
import { IconProps } from '@/core';

interface TileThemeProps {
  scheme: 'default' | `accent` | `color-${Theme.Color}`;
  variant: 'default' | 'elevated';
}

interface TileLinkContext extends TileThemeProps {
  store: Store.State;
  navigate: (to: string) => void;
  orientation: Theme.Orientation;
  iconPosition?: 'start' | 'end' | undefined;
}

interface TileLinkItem extends Partial<TileThemeProps> {
  icon?: IconProps['name'] | undefined;
  value: string;
  label: string;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  disabled?: boolean | undefined;
}

interface TileLinkGroupProps extends Partial<TileThemeProps> {
  children?: React.ReactNode | undefined;
  orientation?: Theme.Orientation | undefined;
  iconPosition?: 'start' | 'end' | undefined;
}

interface TileLinkProps extends Partial<TileThemeProps> {
  icon?: IconProps['name'] | undefined;
  iconPosition?: 'start' | 'end' | undefined;
  label: string;
  value: string;
}

export type { TileLinkProps, TileLinkItem, TileLinkGroupProps, TileLinkContext };
