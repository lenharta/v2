import clsx from 'clsx';
import React from 'react';
import { Factory } from '@/types';
import { Action, factory } from '@/core';

interface MenuTargetProps {
  children: React.ReactNode;
}

type MenuTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: MenuTargetProps;
}>;

const MenuTarget = factory<MenuTargetFactory>((props, ref) => {
  const { className, children, ...forwardedProps } = props;
  return (
    <Action
      {...forwardedProps}
      className={clsx('v2-menu-target', className)}
      label="menu target"
      icon={children}
      ref={ref}
    />
  );
});

MenuTarget.displayName = '@v2/Menu.Target';
export { MenuTarget, type MenuTargetProps };
