import { Factory } from '@/types';
import { Action, factory } from '@/core';

interface SidebarSelectTargetProps {
  icon: React.ReactNode;
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
  const { icon, label, value, selected, ...forwardedProps } = props;
  return (
    <Action
      {...forwardedProps}
      ref={ref}
      icon={icon}
      label={label}
      value={value}
      selected={selected}
    />
  );
});

SidebarSelectTarget.displayName = '@v2/SidebarSelect.Target';
export { SidebarSelectTarget, type SidebarSelectTargetProps };
