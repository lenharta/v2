import React from 'react';
import { Floating } from '@/core';
import { SidebarSelectTarget } from '../SidebarSelectTarget';
import { SidebarSelectDrawer } from '../SidebarSelectDrawer';
import { SidebarSelectOption } from '../SidebarSelectOption';

interface SidebarSelectProps {
  icon?: React.ReactNode | undefined;
  label: string;
  groupId: string;
  groupValue?: string | undefined;
  activeGroup: string;
  setActiveGroup: (activeGroup: string) => void;
  items: {
    label: string;
    value: string;
    icon?: React.ReactNode | undefined;
    onClick?: (() => void) | undefined;
  }[];
}

type SidebarSelectComponent = React.FC<SidebarSelectProps> & {
  Target: typeof SidebarSelectTarget;
  Option: typeof SidebarSelectOption;
  Drawer: typeof SidebarSelectDrawer;
};

const SidebarSelect: SidebarSelectComponent = (props) => {
  const { icon, label, groupId, groupValue, activeGroup, setActiveGroup, items } = props;
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Floating
      isOpen={open && groupId === activeGroup}
      onChange={setOpen}
      placement="right-start"
      onOpen={() => setActiveGroup(groupId)}
    >
      <SidebarSelect.Target
        icon={icon}
        label={label}
        groupId={groupId}
        groupValue={groupValue}
        activeGroup={activeGroup}
        setActiveGroup={setActiveGroup}
      />

      <SidebarSelect.Drawer
        items={items}
        groupId={groupId}
        groupValue={groupValue}
        activeGroup={activeGroup}
        setActiveGroup={setActiveGroup}
      />
    </Floating>
  );
};

SidebarSelect.Target = SidebarSelectTarget;
SidebarSelect.Option = SidebarSelectOption;
SidebarSelect.Drawer = SidebarSelectDrawer;
SidebarSelect.displayName = '@v2/Sidebar.Select';
export { SidebarSelect, type SidebarSelectProps };
