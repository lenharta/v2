import clsx from 'clsx';
import React from 'react';
import { Factory } from '@/types';
import { factory, Box } from '@/core';
import { NavLinkGroupProps } from '../types';

type NavLinkGroupFactory = Factory.Config<{
  comp: 'div';
  ref: HTMLDivElement;
  props: NavLinkGroupProps;
}>;

const NavLinkGroup = factory<NavLinkGroupFactory>((props, ref) => {
  const { orientation = 'horizontal', className, children, ...forwardedProps } = props;
  return (
    <Box
      {...forwardedProps}
      aria-orientation={orientation}
      data-orientation={orientation}
      className={clsx('v2-navlink-group', className)}
      ref={ref}
    >
      <React.Fragment>{children}</React.Fragment>
    </Box>
  );
});

NavLinkGroup.displayName = '@v2/NavLink.Group';
export { NavLinkGroup };
