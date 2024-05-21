import clsx from 'clsx';
import { Factory } from '@/types';
import { createEventCallback } from '@/utils';
import { Action, ActionProps, Icon, Icons, factory, useFloatingContext } from '@/core';

interface SidebarSelectOptionProps extends ActionProps {
  icon: keyof typeof Icons;
}

type SidebarSelectOptionFactory = Factory.Config<{
  comp: 'button';
  ref: HTMLButtonElement;
  props: SidebarSelectOptionProps;
}>;

const SidebarSelectOption = factory<SidebarSelectOptionFactory>((props, ref) => {
  const { className, value, icon, label, ...forwardedProps } = props;
  const ctx = useFloatingContext();
  return (
    <Action
      {...forwardedProps}
      className={clsx('v2-sidebar-select-option', className)}
      onClick={createEventCallback(forwardedProps.onClick, () => ctx.onChange(ctx.isOpen))}
      label={label}
      value={value}
      role="menuitem"
      icon={<Icon name={icon} />}
      ref={ref}
    />
  );
});

SidebarSelectOption.displayName = '@v2/SidebarSelect.Option';
export { SidebarSelectOption, type SidebarSelectOptionProps };
