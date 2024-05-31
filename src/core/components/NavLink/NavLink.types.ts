import { Core } from '@/types';

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
  orientation?: Core.Orientation | undefined;
}

export type { NavLinkItem, NavLinkGroupProps, NavLinkProps };
