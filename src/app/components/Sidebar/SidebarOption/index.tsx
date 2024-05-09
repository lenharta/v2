import { cx } from '@/app/utils';
import { factory } from '@/core/factory';
import { Factory } from '@/types';
import { ICON, Icon } from '@/core';
import { eventCodes } from '@/data';
import { SidebarItem } from '../types';
import { createEventCallback } from '@/utils';

export interface SidebarOptionProps extends SidebarItem {
  icon?: ICON | React.ReactNode | undefined;
  active?: boolean | undefined;
  onEnter?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onEscape?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

export type SidebarOptionFactory = Factory.Config<{
  comp: 'button';
  ref: HTMLButtonElement;
  props: SidebarOptionProps;
}>;

export const SidebarOption = factory<SidebarOptionFactory>((props, ref) => {
  const { icon, value, label, active, onEscape, onEnter, ...forwardedProps } = props;

  const isIconElement = typeof icon === 'object';
  const iconElement = isIconElement ? icon : <Icon name={icon as ICON} />;

  const onKeyDown = createEventCallback(forwardedProps.onKeyDown, (event) => {
    const { code } = event ?? {};

    const handleEscape = () => {
      event.stopPropagation();
      event.preventDefault();
      onEscape?.(event);
    };

    const handleEnter = () => {
      event.stopPropagation();
      event.preventDefault();
      onEnter?.(event);
    };

    const events = {
      [eventCodes.Enter]: handleEnter,
      [eventCodes.Escape]: handleEscape,
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
      children={iconElement}
      className={cx('sidebar-option')}
      aria-label={label.toLowerCase()}
      data-active={active || undefined}
    />
  );
});

SidebarOption.displayName = '@v2/Sidebar.Option';
