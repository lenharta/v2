import React from 'react';
import { App } from '@/types';
import { Floating, FloatingProps } from '@/core';
import { SidebarSelectTarget } from '../SidebarSelectTarget';
import { SidebarSelectDrawer } from '../SidebarSelectDrawer';
import { SidebarSelectOption } from '../SidebarSelectOption';

interface SidebarSelectProps extends Partial<FloatingProps> {
  name: keyof App.Store;
  icon?: React.ReactNode | undefined;
  label: string;
  groupId: string;
  groupValue?: string | undefined;
  activeGroup: string;
  storeDispatch?: ((value: Partial<App.Store>) => void) | undefined;
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
    name,
    icon,
    label,
    items,
    groupId,
    groupValue,
    activeGroup,
    storeDispatch,
    setActiveGroup,
    closeActivePanels,
    ...floatingProps
  } = props;

  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Floating
      isOpen={open}
      onChange={setOpen}
      placement="right-start"
      onOpen={() => setActiveGroup(groupId)}
      onClose={() => setActiveGroup('')}
      {...floatingProps}
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
        name={name}
        items={items}
        groupId={groupId}
        groupValue={groupValue}
        activeGroup={activeGroup}
        storeDispatch={storeDispatch}
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
