import clsx from 'clsx';
import React from 'react';
import { App, Factory } from '@/types';
import { SidebarSelectOption } from '../SidebarSelectOption';
import { Box, Floating, createKeyDownGroup, factory } from '@/core';

interface SidebarSelectDrawerProps {
  name: keyof App.Store;
  groupId: string;
  groupValue?: string | undefined;
  activeGroup: string;
  storeDispatch?: ((value: Partial<App.Store>) => void) | undefined;
  setActiveGroup: (activeGroup: string) => void;
  closeActivePanels: () => void;
  items: {
    icon?: React.ReactNode | undefined;
    value: string;
    label: string;
    onClick?: (() => void) | undefined;
  }[];
}

type SidebarSelectDrawerFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SidebarSelectDrawerProps;
}>;

const SidebarSelectDrawer = factory<SidebarSelectDrawerFactory>((props, ref) => {
  const {
    name,
    items,
    groupId,
    className,
    groupValue,
    activeGroup,
    storeDispatch,
    setActiveGroup,
    closeActivePanels,
    ...forwardedProps
  } = props;

  return (
    <Floating.Box>
      <Box
        {...forwardedProps}
        ref={ref}
        role="menubar"
        className={clsx('v2-sidebar-select-drawer', className)}
        data-sidebar-drawer
      >
        {items.map((item) => (
          <SidebarSelectOption
            key={item.value}
            name={name}
            icon={item.icon}
            value={item.value}
            label={item.label}
            onClick={item.onClick}
            groupId={groupId}
            groupValue={groupValue}
            activeGroup={activeGroup}
            setActiveGroup={setActiveGroup}
            storeDispatch={storeDispatch}
            data-sidebar-item
            onKeyDown={createKeyDownGroup({
              parentSelector: '[data-sidebar-drawer]',
              childSelector: '[data-sidebar-item]',
              orientation: 'horizontal',
              preventDefault: false,
            })}
          />
        ))}
      </Box>
    </Floating.Box>
  );
});

SidebarSelectDrawer.displayName = '@v2/SidebarSelect.Drawer';
export { SidebarSelectDrawer, type SidebarSelectDrawerProps };
