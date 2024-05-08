import React from 'react';
import { cx } from '@/app/utils';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { SidebarGroup } from './SidebarGroup';
import { SidebarAction } from './SidebarAction';
import { SidebarSpacer } from './SidebarSpacer';
import { useLocation, useNavigate } from 'react-router-dom';
import { ICON } from '@/core';
import { useFocusContext } from '@/app';
import { eventCodes } from '@/data';

export interface SidebarProps {
  children?: React.ReactNode;
}

export type SidebarFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  omits: 'children';
  props: SidebarProps;
  comps: {
    Group: typeof SidebarGroup;
    Action: typeof SidebarAction;
    Spacer: typeof SidebarSpacer;
  };
}>;

interface sidebarItem {
  id: string;
  icon: ICON;
  name: string;
  value: string;
}

const data: sidebarItem[] = [
  { id: 'route-home', value: '/', name: 'Home', icon: 'home' },
  { id: 'route-experience', value: '/experience', name: 'Experience', icon: 'briefcase' },
  { id: 'route-projects', value: '/projects', name: 'Projects', icon: 'code' },
  { id: 'route-toolbox', value: '/toolbox', name: 'Toolbox', icon: 'boxToolbox' },
  { id: 'route-sandbox', value: '/sandbox', name: 'Sandbox', icon: 'boxRegular' },
];

export const Sidebar = factory<SidebarFactory>((props, ref) => {
  const { ...forwardedProps } = props;

  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = React.useState(location.pathname);

  const focusCTX = useFocusContext();

  return (
    <div {...forwardedProps} ref={ref} className={cx('sidebar')}>
      <Sidebar.Group ref={focusCTX.sidebarRef}>
        {data.map(({ id, name, value, icon }, index) => (
          <Sidebar.Action
            id={id}
            key={id}
            icon={icon}
            label={name}
            value={value}
            selected={value === active ?? undefined}
            onKeyDown={(event) => {
              const onArrowUp = () => {
                if (index === 0) {
                  event.preventDefault();
                  event.stopPropagation();
                  focusCTX.onFocusMenu();
                }
              };

              const events = {
                [eventCodes.ArrowUp]: onArrowUp,
              }[event.code];

              events?.();
            }}
            onClick={(event) => {
              navigate(event.currentTarget.value);
              setActive(event.currentTarget.value);
            }}
          />
        ))}
      </Sidebar.Group>
      <Sidebar.Spacer />
    </div>
  );
});

Sidebar.displayName = '@v2/Sidebar';
Sidebar.Spacer = SidebarSpacer;
Sidebar.Action = SidebarAction;
Sidebar.Group = SidebarGroup;
