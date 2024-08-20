import clsx from 'clsx';
import * as React from 'react';
import * as Router from 'react-router-dom';
import { Icon, IconProps, UnstyledLink } from '@core';

interface PageLinkProps extends Partial<Omit<Router.LinkProps, 'children'>> {
  to?: string | undefined;
  icon?: Partial<IconProps> | undefined;
  label?: string | undefined;
  className?: string | undefined;
  variant?: string | undefined;
}

const PageLink: React.FC<PageLinkProps> & {} = (props) => {
  const { to = '/', icon, label, variant = 'solid-default', className, ...forwardedProps } = props;

  if (!label && !forwardedProps['aria-label']) {
    console.warn('[@v2/Page.Link]: programmer must provvide aria-label for accessibility purposes');
  }

  return (
    <UnstyledLink
      to={to}
      className={clsx('v2-page-link', `v2-page-link--${variant}`, className)}
      aria-label={label}
      {...forwardedProps}
    >
      <div className="v2-page-link-layout">
        {label}
        {icon && <Icon {...icon} />}
      </div>
    </UnstyledLink>
  );
};

PageLink.displayName = '@v2/Page.Link';
export { PageLink, type PageLinkProps };
