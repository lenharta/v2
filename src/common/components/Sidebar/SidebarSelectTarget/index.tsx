import { Factory } from '@/types';
import { Action, Floating, Icon, Icons, factory } from '@/core';
import clsx from 'clsx';

interface SidebarSelectTargetProps {
  icon: keyof typeof Icons;
  label: string;
  value: string;
  selected?: boolean | undefined;
}

type SidebarSelectTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: typeof Action;
  props: SidebarSelectTargetProps;
}>;

const SidebarSelectTarget = factory<SidebarSelectTargetFactory>((props, ref) => {
  const { icon, label, value, selected, className, ...forwardedProps } = props;
  return (
    <Floating.Target>
      <Action
        {...forwardedProps}
        className={clsx('v2-sidebar-select-target', className)}
        selected={selected}
        value={value}
        label={label}
        icon={<Icon name={icon} />}
        ref={ref}
      />
    </Floating.Target>
  );
});

SidebarSelectTarget.displayName = '@v2/SidebarSelect.Target';
export { SidebarSelectTarget, type SidebarSelectTargetProps };
