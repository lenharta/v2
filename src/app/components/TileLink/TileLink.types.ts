import { Core } from '@/types';
import { LinkProps } from 'react-router-dom';
import { GroupProps } from '@/core';

interface TileLinkProps extends Partial<LinkProps> {
  label?: string | undefined;
  align?: 'center' | 'start' | 'end' | undefined;
  justify?: 'center' | 'start' | 'end' | undefined;
  variant?: 'default' | 'elevated' | 'accent' | 'accent-elevated' | undefined;
  leftContent?: React.ReactNode | undefined;
  rightContent?: React.ReactNode | undefined;
  loading?: boolean | undefined;
  readOnly?: boolean | undefined;
  disabled?: boolean | undefined;
  rotation?: boolean | undefined;
}

interface TileLinkGroupProps extends GroupProps {
  align?: 'center' | 'start' | 'end' | undefined;
  justify?: 'center' | 'start' | 'end' | undefined;
  variant?: 'default' | 'elevated' | 'accent' | 'accent-elevated' | undefined;
  loading?: boolean | undefined;
  readOnly?: boolean | undefined;
  disabled?: boolean | undefined;
  rotation?: boolean | undefined;
  orientation?: Core.Orientation | undefined;
}

interface TileLinkContextValue {
  align?: 'center' | 'start' | 'end' | undefined;
  justify?: 'center' | 'start' | 'end' | undefined;
  variant?: 'default' | 'elevated' | 'accent' | 'accent-elevated' | undefined;
  loading?: boolean | undefined;
  readOnly?: boolean | undefined;
  disabled?: boolean | undefined;
  rotation?: boolean | undefined;
  orientation?: Core.Orientation | undefined;
}

export type { TileLinkProps, TileLinkGroupProps, TileLinkContextValue };
