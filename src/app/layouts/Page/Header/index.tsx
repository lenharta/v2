import * as React from 'react';
import { Link } from 'react-router-dom';
import { useThemeCTX } from '@/store';
import { Avatar, Icon } from '@/common';
import clsx from 'clsx';

type PageHeaderElementProps = React.ComponentPropsWithoutRef<'header'>;
type PageHeaderAttributeProps = React.RefAttributes<HTMLElement>;
type PageHeaderBaseProps = PageHeaderElementProps & PageHeaderAttributeProps;

export interface PageHeaderProps extends PageHeaderBaseProps {}

const _PageHeader = (props: PageHeaderProps, ref: React.ForwardedRef<HTMLElement>) => {
  const { className, children, ...otherProps } = props;
  const clxss = clsx('Page-header', className);
  const theme = useThemeCTX();
  return (
    <header {...otherProps} className={clxss} ref={ref}>
      <nav className="Page-nav">
        <Link
          to="/"
          children={<Icon name="shield" type="filled" />}
          aria-label="navigate to home page"
          className="PageHeader-logo"
        />
        <Avatar
          to="/"
          children={<Icon name={theme.state.avatar} />}
          aria-label="navigate to home page"
          className="PageHeader-avatar"
        />
      </nav>
    </header>
  );
};

export type PageHeaderComponent = React.ForwardRefExoticComponent<PageHeaderProps>;
export const PageHeader = React.forwardRef(_PageHeader) as PageHeaderComponent;
PageHeader.displayName = '@v2/Page.Header';
