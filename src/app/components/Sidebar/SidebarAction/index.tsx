import React from 'react';
import { cx } from '@/app/utils';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { ICON, Icon } from '@/core';

export interface SidebarActionProps {
  icon?: ICON | undefined;
  label?: string | undefined;
  children?: React.ReactNode;
  selected?: boolean | undefined;
}

export type SidebarActionFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: SidebarActionProps;
}>;

const findContent = (props: SidebarActionProps) => {
  const { children, label = 'action', icon } = props;
  if (children) return children;
  if (icon) return <Icon name={icon} />;
  if (label) return label;
  return null;
};

export const SidebarAction = factory<SidebarActionFactory>((props, ref) => {
  const { icon, label = 'action', selected, children, ...forwardedProps } = props;
  return (
    <button
      {...forwardedProps}
      ref={ref}
      title={label}
      className={cx('sidebar-action')}
      aria-label={label.toLowerCase()}
      data-selected={selected}
    >
      <span className={cx('sidebar-action-inner')}>
        <React.Fragment>{findContent({ children, label, icon })}</React.Fragment>
      </span>
    </button>
  );
});

SidebarAction.displayName = '@v2/Sidebar.Action';
