import { Icon, IconName, Title } from '@/common';
import { UnstyledButton } from '@/common/Button/Unstyled';
import * as React from 'react';

// import { MenuButton } from '@/app/components';
//  <MenuButton />

type PageNavItemProps = Partial<{
  icon?: IconName;
  label?: string;
  onClick?: () => void;
}>;

const PageNavItem = (props: PageNavItemProps) => {
  const { icon = 'person', label = 'nav-item', onClick } = props;
  return (
    <UnstyledButton
      onClick={onClick}
      aria-label={label}
      children={<Icon name={icon} aria-label={`${label}-icon`} />}
    />
  );
};

type PageHeaderElementProps = React.ComponentPropsWithoutRef<'header'>;
type PageHeaderAttributeProps = React.RefAttributes<HTMLElement>;
type PageHeaderBaseProps = PageHeaderElementProps & PageHeaderAttributeProps;

export interface PageHeaderProps extends PageHeaderBaseProps {}

const _PageHeader = (props: PageHeaderProps, ref: React.ForwardedRef<HTMLElement>) => {
  const { className, children, ...otherProps } = props;
  return (
    <header {...otherProps} ref={ref} className="page-header">
      <nav className="page-header-nav">
        <PageNavItem />
        <PageNavItem />
        <PageNavItem />
        <PageNavItem />
        <PageNavItem />
      </nav>
    </header>
  );
};

export type PageHeaderComponent = React.ForwardRefExoticComponent<PageHeaderProps>;
export const PageHeader = React.forwardRef(_PageHeader) as PageHeaderComponent;
PageHeader.displayName = '@v2/Page.Header';
