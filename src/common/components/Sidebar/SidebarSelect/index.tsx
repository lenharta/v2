import React from 'react';
import { Icon } from '@/core';
import { SidebarSelectTarget } from '../SidebarSelectTarget';
import { SidebarSelectDrawer } from '../SidebarSelectDrawer';
import { SidebarSelectOption } from '../SidebarSelectOption';
import { useStoreDispatch, useStoreState } from '@/store';

interface SidebarSelectProps {
  icon: string;
  label: string;
  value: string;
  selected?: boolean | undefined;
}

type SidebarSelectComponent = React.FC<SidebarSelectProps> & {
  Target: typeof SidebarSelectTarget;
  Option: typeof SidebarSelectOption;
  Drawer: typeof SidebarSelectDrawer;
};

const SidebarSelect: SidebarSelectComponent = (props) => {
  const { icon, label, value, selected } = props;
  const dispatch = useStoreDispatch();
  const store = useStoreState();

  return (
    <React.Fragment>
      <SidebarSelect.Target label={label} value={value} icon={icon} selected={selected} />
      <SidebarSelect.Drawer>
        <SidebarSelect.Option children={<Icon name="account" />} />
        <SidebarSelect.Option children={<Icon name="account" />} />
        <SidebarSelect.Option children={<Icon name="account" />} />
      </SidebarSelect.Drawer>
    </React.Fragment>
  );
};

SidebarSelect.Target = SidebarSelectTarget;
SidebarSelect.Option = SidebarSelectOption;
SidebarSelect.Drawer = SidebarSelectDrawer;
SidebarSelect.displayName = '@v2/Sidebar.Select';
export { SidebarSelect, type SidebarSelectProps };
