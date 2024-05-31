import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { NavLinkProps } from './NavLink.types';
import { NavLinkGroup } from './Group';

type NavLinkFactory = Factory.Config<{
  ref: HTMLAnchorElement;
  comp: 'a';
  props: NavLinkProps;
  comps: {
    Group: typeof NavLinkGroup;
  };
}>;

const NavLink = factory<NavLinkFactory>((props, ref) => {
  const { value, label, className, children, leftContent, rightContent, ...forwardedProps } = props;

  return (
    <Link
      {...forwardedProps}
      className={clsx('v2-navlink', className)}
      aria-label={label}
      to={value}
      ref={ref}
    >
      <div className="v2-navlink-inner">
        {leftContent && <div data-position="left">{leftContent}</div>}
        <div>{label || children || null}</div>
        {rightContent && <div data-position="right">{rightContent}</div>}
      </div>
    </Link>
  );
});

NavLink.Group = NavLinkGroup;
NavLink.displayName = '@v2/NavLink';
