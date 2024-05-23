import clsx from 'clsx';
import React from 'react';
import { Factory } from '@/types';
import { Box, Floating, Icons, factory } from '@/core';
import { SidebarSelectOption } from '../SidebarSelectOption';

interface SidebarSelectDrawerProps {
  // children: React.ReactNode;
  items: {
    icon: keyof typeof Icons;
    value: string;
    label: string;
  }[];
}

type SidebarSelectDrawerFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SidebarSelectDrawerProps;
}>;

const SidebarSelectDrawer = factory<SidebarSelectDrawerFactory>((props, ref) => {
  const { className, items, ...forwardedProps } = props;
  return (
    <Floating.Box>
      <Box
        {...forwardedProps}
        className={clsx('v2-sidebar-select-drawer', className)}
        role="menubar"
        ref={ref}
      >
        {items.map((item) => (
          <SidebarSelectOption
            label={item.label}
            value={item.value}
            icon={item.icon}
            key={item.value}
          />
        ))}
      </Box>
    </Floating.Box>
  );
});

SidebarSelectDrawer.displayName = '@v2/SidebarSelect.Drawer';
export { SidebarSelectDrawer, type SidebarSelectDrawerProps };
