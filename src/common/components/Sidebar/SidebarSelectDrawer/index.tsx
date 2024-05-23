import clsx from 'clsx';
import { Factory } from '@/types';
import { Box, Floating, factory } from '@/core';
import { SidebarSelectOption } from '../SidebarSelectOption';

interface SidebarSelectDrawerProps {
  groupId: string;
  groupValue?: string | undefined;
  activeGroup: string;
  setActiveGroup: (activeGroup: string) => void;
  items: {
    icon?: React.ReactNode | undefined;
    value: string;
    label: string;
    onClick?: (() => void) | undefined;
  }[];
}

type SidebarSelectDrawerFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SidebarSelectDrawerProps;
}>;

const SidebarSelectDrawer = factory<SidebarSelectDrawerFactory>((props, ref) => {
  const { className, items, groupValue, groupId, activeGroup, setActiveGroup, ...forwardedProps } =
    props;
  return (
    <Floating.Box>
      <Box
        {...forwardedProps}
        className={clsx('v2-sidebar-select-drawer', className)}
        role="menubar"
        ref={ref}
      >
        {items.map((item) => (
          <SidebarSelectOption
            onClick={item.onClick}
            activeGroup={activeGroup}
            setActiveGroup={setActiveGroup}
            groupValue={groupValue}
            groupId={groupId}
            label={item.label}
            value={item.value}
            icon={item.icon}
            key={item.value}
          />
        ))}
      </Box>
    </Floating.Box>
  );
});

SidebarSelectDrawer.displayName = '@v2/SidebarSelect.Drawer';
export { SidebarSelectDrawer, type SidebarSelectDrawerProps };
