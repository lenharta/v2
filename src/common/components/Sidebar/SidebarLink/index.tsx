import React from 'react';
import { Factory } from '@/types';
import { Action, factory } from '@/core';
import { createEventCallback } from '@/utils';

interface SidebarLinkProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  pathname: string;
  navigate: (value: string) => void;
  closeActivePanels: () => void;
}

type SidebarLinkFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: SidebarLinkProps;
  omits: 'children';
}>;

const SidebarLink = factory<SidebarLinkFactory>((props, ref) => {
  const { icon, value, label, pathname, navigate, closeActivePanels, ...forwardedProps } = props;

  const handleClick = createEventCallback(forwardedProps.onClick, (event) => {
    event.stopPropagation();
    navigate(event.currentTarget.value);
    closeActivePanels();
  });

  const isHome = value === '/' && pathname === '/' && pathname.length === 0;
  const isActive = value !== '/' && pathname.length > 0 && pathname.includes(value);

  return (
    <Action
      {...forwardedProps}
      ref={ref}
      icon={icon}
      value={value}
      label={label}
      onClick={handleClick}
      selected={isHome || isActive || undefined}
    />
  );
});

SidebarLink.displayName = '@v2/Sidebar.Link';
export { SidebarLink, type SidebarLinkProps };
