import clsx from 'clsx';
import { Factory } from '@/types';
import { Action, Floating, factory, useFloatingContext } from '@/core';
import { createEventCallback } from '@/utils';

interface SidebarSelectTargetProps {
  icon?: React.ReactNode | undefined;
  label: string;
  groupId: string;
  groupValue?: string | undefined;
  activeGroup: string;
  setActiveGroup: (activeGroup: string) => void;
}

type SidebarSelectTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: typeof Action;
  props: SidebarSelectTargetProps;
}>;

const SidebarSelectTarget = factory<SidebarSelectTargetFactory>((props, ref) => {
  const {
    icon,
    label,
    value,
    groupId,
    groupValue,
    className,
    activeGroup,
    setActiveGroup,
    ...forwardedProps
  } = props;

  const ctx = useFloatingContext();

  return (
    <Floating.Target>
      <Action
        {...forwardedProps}
        ref={ref}
        icon={icon}
        value={value}
        label={label}
        className={clsx('v2-sidebar-select-target', className)}
        selected={ctx.isOpen && groupId === activeGroup ? true : undefined}
        onClick={createEventCallback(
          forwardedProps.onClick,
          () => ctx.isOpen && setActiveGroup('')
        )}
      />
    </Floating.Target>
  );
});

SidebarSelectTarget.displayName = '@v2/SidebarSelect.Target';
export { SidebarSelectTarget, type SidebarSelectTargetProps };
