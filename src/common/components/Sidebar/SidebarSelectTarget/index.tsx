import clsx from 'clsx';
import { Factory } from '@/types';
import { Action, Floating, factory, useFloatingContext } from '@/core';
import { createEventCallback } from '@/utils';

interface SidebarSelectTargetActions<T = React.KeyboardEvent<HTMLButtonElement>> {
  onTab?: ((event: T) => void) | undefined;
  onEnd?: ((event: T) => void) | undefined;
  onHome?: ((event: T) => void) | undefined;
  onEnter?: ((event: T) => void) | undefined;
  onPageUp?: ((event: T) => void) | undefined;
  onPageDown?: ((event: T) => void) | undefined;
  onShiftTab?: ((event: T) => void) | undefined;
  onArrowRight?: ((event: T) => void) | undefined;
  onArrowLeft?: ((event: T) => void) | undefined;
  onArrowDown?: ((event: T) => void) | undefined;
  onArrowUp?: ((event: T) => void) | undefined;
}

interface SidebarSelectTargetProps extends SidebarSelectTargetActions {
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
    onTab,
    onEnd,
    onHome,
    onEnter,
    onPageUp,
    onPageDown,
    onArrowUp,
    onArrowDown,
    onArrowLeft,
    onArrowRight,
    onShiftTab,
    ...forwardedProps
  } = props;

  const ctx = useFloatingContext();

  return (
    <Floating.Target>
      <Action
        {...forwardedProps}
        data-sidebar-item
        ref={ref}
        icon={icon}
        value={value}
        label={label}
        selected={groupId === activeGroup}
        className={clsx('v2-sidebar-select-target', className)}
        onKeyDown={createEventCallback(forwardedProps.onKeyDown, (event) => {
          const fireEvents = {
            ArrowRight: () => {
              event.preventDefault();
              event.stopPropagation();
              onArrowRight?.(event);
              if (ctx.isOpen) {
                const drawerNode = document.querySelector('[data-sidebar-drawer]')!;
                (drawerNode.childNodes as NodeListOf<HTMLButtonElement>)[0]?.focus();
              }
            },
          }[event.code];

          fireEvents?.();
        })}
      />
    </Floating.Target>
  );
});

SidebarSelectTarget.displayName = '@v2/SidebarSelect.Target';
export { SidebarSelectTarget, type SidebarSelectTargetProps };
