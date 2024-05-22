import React from 'react';
import { Floating, Icons } from '@/core';
import { SidebarSelectTarget } from '../SidebarSelectTarget';
import { SidebarSelectDrawer } from '../SidebarSelectDrawer';
import { SidebarSelectOption } from '../SidebarSelectOption';

interface SidebarSelectProps {
  icon: keyof typeof Icons;
  label: string;
  value: string;
  items: {
    label: string;
    value: string;
    icon: keyof typeof Icons;
  }[];
}

type SidebarSelectComponent = React.FC<SidebarSelectProps> & {
  Target: typeof SidebarSelectTarget;
  Option: typeof SidebarSelectOption;
  Drawer: typeof SidebarSelectDrawer;
};

const SidebarSelect: SidebarSelectComponent = (props) => {
  const { icon, label, value, items } = props;
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Floating isOpen={open} onChange={setOpen} placement="right-start">
      <SidebarSelect.Target label={label} value={value} icon={icon} />
      <SidebarSelect.Drawer items={items} />
    </Floating>
  );
};

SidebarSelect.Target = SidebarSelectTarget;
SidebarSelect.Option = SidebarSelectOption;
SidebarSelect.Drawer = SidebarSelectDrawer;
SidebarSelect.displayName = '@v2/Sidebar.Select';
export { SidebarSelect, type SidebarSelectProps };
