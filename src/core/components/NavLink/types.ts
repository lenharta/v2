import { Theme } from '@/types';

interface NavLinkItem {
  value: string;
  label?: string | undefined;
  leftContent?: React.ReactNode | undefined;
  rightContent?: React.ReactNode | undefined;
}

interface NavLinkProps extends NavLinkItem {
  value: string;
  label?: string | undefined;
  leftContent?: React.ReactNode | undefined;
  rightContent?: React.ReactNode | undefined;
}

interface NavLinkGroupProps {
  orientation?: Theme.Orientation | undefined;
}

export type { NavLinkItem, NavLinkGroupProps, NavLinkProps };
