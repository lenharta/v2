import clsx from 'clsx';
import { Factory } from '@/types';
import { createEventCallback } from '@/utils';
import { Action, ActionProps, factory, useFloatingContext } from '@/core';

interface SidebarSelectOptionProps extends ActionProps {
  icon?: React.ReactNode | undefined;
  groupId: string;
  groupValue?: string | undefined;
  activeGroup: string;
  setActiveGroup: (activeGroup: string) => void;
}

type SidebarSelectOptionFactory = Factory.Config<{
  comp: 'button';
  ref: HTMLButtonElement;
  props: SidebarSelectOptionProps;
}>;

const SidebarSelectOption = factory<SidebarSelectOptionFactory>((props, ref) => {
  const {
    className,
    value,
    icon,
    label,
    groupId,
    groupValue,
    activeGroup,
    setActiveGroup,
    ...forwardedProps
  } = props;

  const ctx = useFloatingContext();

  return (
    <Action
      {...forwardedProps}
      ref={ref}
      icon={icon}
      value={value}
      label={label}
      role="menuitem"
      selected={value === groupValue ? true : undefined}
      className={clsx('v2-sidebar-select-option', className)}
      onClick={createEventCallback(forwardedProps.onClick, () => {
        ctx.onChange(false);
        setActiveGroup('');
      })}
    />
  );
});

SidebarSelectOption.displayName = '@v2/SidebarSelect.Option';
export { SidebarSelectOption, type SidebarSelectOptionProps };
