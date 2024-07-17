import { Core } from '@types';

interface FooterProps {}

interface FooterMetaProps {}

interface FooterMenuProps {
  data: Core.LinkGroup[];
}

interface FooterMenuGroupProps extends Omit<Core.LinkGroup, 'items'> {
  children?: React.ReactNode | undefined;
}

interface FooterMenuLinkProps extends Core.LinkItem {}

export type {
  FooterProps,
  FooterMetaProps,
  FooterMenuProps,
  FooterMenuLinkProps,
  FooterMenuGroupProps,
};
