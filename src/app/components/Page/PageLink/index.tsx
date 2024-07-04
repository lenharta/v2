import clsx from 'clsx';
import * as React from 'react';
import * as Router from 'react-router-dom';
import { Icon, IconProps, Label, UnstyledLink } from '@/core';
import { Theme } from '@/types';

interface PageLinkProps extends Partial<Omit<Router.LinkProps, 'children'>> {
  to?: string | undefined;
  icon?: Partial<IconProps> | undefined;
  label?: string | undefined;
  className?: string | undefined;
  variant?:
    | 'base-default'
    | 'base-elevated'
    | 'accent-default'
    | 'accent-elevated'
    | 'accent-tonal'
    | 'accent-ghost'
    | `${Theme.Color}-tonal`
    | `${Theme.Color}-ghost`
    | `${Theme.Color}-default`
    | `${Theme.Color}-elevated`
    | undefined;
}

const PageLink: React.FC<PageLinkProps> & {} = (props) => {
  const { to = '/', icon, label, variant = 'base-elevated', className, ...forwardedProps } = props;

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
