import React from 'react';
import { Floating } from '@/core';
import { SidebarSelectTarget } from '../SidebarSelectTarget';
import { SidebarSelectDrawer } from '../SidebarSelectDrawer';
import { SidebarSelectOption } from '../SidebarSelectOption';
import { useClickOutside } from '@/hooks';

interface SidebarSelectProps {
  icon?: React.ReactNode | undefined;
  label: string;
  groupId: string;
  groupValue?: string | undefined;
  activeGroup: string;
  setActiveGroup: (activeGroup: string) => void;
  closeActivePanels: () => void;
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
  const {
    icon,
    label,
    items,
    groupId,
    groupValue,
    activeGroup,
    setActiveGroup,
    closeActivePanels,
  } = props;

  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Floating
      isOpen={open && activeGroup === groupId ? true : false}
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
        closeActivePanels={closeActivePanels}
      />
    </Floating>
  );
};

SidebarSelect.Target = SidebarSelectTarget;
SidebarSelect.Option = SidebarSelectOption;
SidebarSelect.Drawer = SidebarSelectDrawer;
SidebarSelect.displayName = '@v2/Sidebar.Select';
export { SidebarSelect, type SidebarSelectProps };
