import clsx from 'clsx';
import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { Icon, IconProps, Label } from '@/core';

interface PageLinkProps extends Partial<Omit<LinkProps, 'children'>> {
  to?: string | undefined;
  icon?: Partial<IconProps> | undefined;
  label?: string | undefined;
  className?: string | undefined;
  variant?:
    | 'base-default'
    | 'base-elevated'
    | 'accent-default'
    | 'accent-text'
    | 'accent-elevated'
    | undefined;
}

type PageLinkFactory = React.FC<PageLinkProps> & {};

const PageLink: PageLinkFactory = (props) => {
  const { to = '/', icon, label, className, variant, ...forwardedProps } = props;

  if (!label && !forwardedProps['aria-label']) {
    console.warn('[@v2/Page.Link]: programmer must provvide aria-label for accessibility purposes');
  }

  return (
    <Link
      to={to}
      className={clsx('v2-page-link', `v2-page-link--${variant}`, className)}
      aria-label={label}
      {...forwardedProps}
    >
      <div className="v2-page-link-layout">
        {label && <Label component="div">{label}</Label>}
        {icon && <Icon {...icon} />}
      </div>
    </Link>
  );
};

PageLink.displayName = '@v2/Page.Link';
export { PageLink, type PageLinkProps, type PageLinkFactory };
