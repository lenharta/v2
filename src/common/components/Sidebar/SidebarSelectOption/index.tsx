import clsx from 'clsx';
import { App, Factory } from '@/types';
import { createEventCallback } from '@/utils';
import { Action, ActionProps, factory, useFloatingContext } from '@/core';

interface SidebarSelectOptionProps extends ActionProps {
  icon?: React.ReactNode | undefined;
  name: keyof App.Store;
  groupId: string;
  groupValue?: string | undefined;
  activeGroup: string;
  setActiveGroup: (activeGroup: string) => void;
  storeDispatch?: ((value: Partial<App.Store>) => void) | undefined;
}

type SidebarSelectOptionFactory = Factory.Config<{
  comp: 'button';
  ref: HTMLButtonElement;
  props: SidebarSelectOptionProps;
  omits: 'name';
}>;

const SidebarSelectOption = factory<SidebarSelectOptionFactory>((props, ref) => {
  const {
    name,
    icon,
    label,
    value,
    groupId,
    className,
    groupValue,
    activeGroup,
    setActiveGroup,
    storeDispatch,
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
        ctx.onClose();
      })}
      onKeyDown={createEventCallback(forwardedProps.onKeyDown, (event) => {
        const fireEvents = {
          Enter: () => {
            event.preventDefault();
            event.stopPropagation();
            storeDispatch?.({ [name]: event.currentTarget.value as any });
            ctx.onClose();
          },
        }[event.code];

        fireEvents?.();
      })}
    />
  );
});

SidebarSelectOption.displayName = '@v2/SidebarSelect.Option';
export { SidebarSelectOption, type SidebarSelectOptionProps };
