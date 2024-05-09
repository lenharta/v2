import React from 'react';
import { cx } from '@/app/utils';
import { ICON, Icon } from '@/core';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Sidebar } from '..';

export interface SidebarSelectProps {
  activeGroup: string | undefined;
  selectedValue: string;

  onActionClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onActionEnter: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onActionEscape: (event: React.KeyboardEvent<HTMLButtonElement>) => void;

  onOptionClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onOptionEnter: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onOptionEscape: (event: React.KeyboardEvent<HTMLButtonElement>) => void;

  group: { icon: ICON | React.ReactNode; value: string; label: string };
  items: { icon?: ICON | React.ReactNode | undefined; value: string; label: string }[];
}

export type SidebarSelectFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SidebarSelectProps;
}>;

export const SidebarSelect = factory<SidebarSelectFactory>((props, ref) => {
  const {
    items,
    group,
    activeGroup,
    selectedValue,
    onActionClick,
    onActionEnter,
    onActionEscape,
    onOptionClick,
    onOptionEnter,
    onOptionEscape,
    ...forwardedProps
  } = props;

  const uid = React.useId();
  const getDrawerId = (): string => `${group.value}${uid}drawer`;

  return (
    <div
      {...forwardedProps}
      ref={ref}
      className={cx('sidebar-select')}
      data-orientation="horizontal"
      aria-orientation="horizontal"
      aria-label={group.label}
    >
      <Sidebar.Action
        icon={group.icon}
        label={group.label}
        value={group.value}
        onClick={onActionClick}
        onEnter={onActionEnter}
        onEscape={onActionEscape}
        aria-controls={getDrawerId()}
        aria-haspopup="menu"
      />

      <Sidebar.Drawer
        id={getDrawerId()}
        mounted={group.value === activeGroup ? true : false}
        role="menu"
      >
        {items.map((item) => (
          <Sidebar.Option
            role="menuitem"
            key={item.value}
            icon={item.icon}
            value={item.value}
            label={item.label}
            onClick={onOptionClick}
            onEnter={onOptionEnter}
            onEscape={onOptionEscape}
          />
        ))}
      </Sidebar.Drawer>
    </div>
  );
});

SidebarSelect.displayName = '@v2/Sidebar.Select';
