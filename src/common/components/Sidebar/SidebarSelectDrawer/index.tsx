import clsx from 'clsx';
import React from 'react';
import { Factory } from '@/types';
import { Box, factory } from '@/core';

interface SidebarSelectDrawerProps {
  children: React.ReactNode;
}

type SidebarSelectDrawerFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SidebarSelectDrawerProps;
}>;

const SidebarSelectDrawer = factory<SidebarSelectDrawerFactory>((props, ref) => {
  const { className, children, ...forwardedProps } = props;
  return (
    <Box
      {...forwardedProps}
      className={clsx('v2-sidebar-select-drawer', className)}
      children={children}
      role="menubar"
      ref={ref}
    />
  );
});

SidebarSelectDrawer.displayName = '@v2/SidebarSelect.Drawer';
export { SidebarSelectDrawer, type SidebarSelectDrawerProps };
