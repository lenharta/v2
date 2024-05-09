import React from 'react';
import { cx } from '@/app/utils';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { ICON, Icon } from '@/core';
import { createEventCallback } from '@/utils';
import { eventCodes } from '@/data';

export interface SidebarActionEvents {
  onEnter?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onEscape?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onArrowUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onArrowDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onArrowLeft?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onArrowRight?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

export interface SidebarActionProps extends SidebarActionEvents {
  icon?: ICON | React.ReactNode | undefined;
  label?: string | undefined;
  active?: boolean | undefined;
  children?: React.ReactNode;
}

export type SidebarActionFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  omits: 'children';
  props: SidebarActionProps;
}>;

export const SidebarAction = factory<SidebarActionFactory>((props, ref) => {
  const {
    icon,
    value,
    label,
    active,
    onEnter,
    onEscape,
    onArrowUp,
    onArrowDown,
    onArrowLeft,
    onArrowRight,
    ...forwardedProps
  } = props;

  const isIconElement = typeof icon === 'object';
  const iconElement = isIconElement ? icon : <Icon name={icon as ICON} />;

  const onKeyDown = createEventCallback(forwardedProps.onKeyDown, (event) => {
    const { code } = event ?? {};

    const events = {
      [eventCodes.Enter]: () => {
        event.stopPropagation();
        event.preventDefault();
        onEnter?.(event);
      },
      [eventCodes.Escape]: () => {
        event.stopPropagation();
        event.preventDefault();
        onEscape?.(event);
      },
      [eventCodes.ArrowUp]: () => {
        event.stopPropagation();
        event.preventDefault();
        onArrowUp?.(event);
      },
      [eventCodes.ArrowDown]: () => {
        event.stopPropagation();
        event.preventDefault();
        onArrowDown?.(event);
      },
      [eventCodes.ArrowLeft]: () => {
        event.stopPropagation();
        event.preventDefault();
        onArrowLeft?.(event);
      },
      [eventCodes.ArrowRight]: () => {
        event.stopPropagation();
        event.preventDefault();
        onArrowRight?.(event);
      },
    }[code];

    events?.();
  });

  return (
    <button
      {...forwardedProps}
      ref={ref}
      title={label}
      value={value}
      onKeyDown={onKeyDown}
      className={cx('sidebar-action')}
      aria-label={label?.toLowerCase()}
      data-active={active || undefined}
    >
      <span className={cx('sidebar-action-inner')} children={iconElement} />
    </button>
  );
});

SidebarAction.displayName = '@v2/Sidebar.Action';
