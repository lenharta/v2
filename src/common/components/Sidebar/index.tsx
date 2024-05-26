import clsx from 'clsx';
import React from 'react';
import { factory } from '@/core/factory';
import { SidebarLink } from './SidebarLink';
import { SidebarColor } from './SidebarColor';
import { SidebarSelect } from './SidebarSelect';
import { Action, Box, Icon } from '@/core/components';
import { createKeyDownGroup } from '@/core';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  Factory,
  GlobalAccentColors,
  GlobalRouteIcons,
  GlobalRoutePaths,
  GlobalThemeModes,
  GlobalWritingModes,
} from '@/types';

import {
  lookupThemeModeIcon,
  lookupWritingModeIcon,
  useStoreDispatch,
  useStoreState,
} from '@/store';
import { dataGlobalAccentColors } from '@/data';

interface SidebarProps {}

type SidebarFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SidebarProps;
  omits: 'children';
  comps: {
    Link: typeof SidebarLink;
    Color: typeof SidebarColor;
    Select: typeof SidebarSelect;
  };
}>;

const Sidebar = factory<SidebarFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;

  const store = useStoreState();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();

  const [activeGroup, setActiveGroup] = React.useState('');

  const closeActivePanels = () => {
    dispatch({
      menuOpen: undefined,
      resultOpen: undefined,
      splashOpen: undefined,
    });
  };

  return (
    <Box {...forwardedProps} className={clsx('v2-sidebar', className)} ref={ref}>
      <Action.Group
        data-sidebar-group
        value={location.pathname}
        orientation="vertical"
        onKeyDown={createKeyDownGroup({
          parentSelector: '[data-sidebar-group]',
          childSelector: '[data-sidebar-item]',
          orientation: 'vertical',
          loop: false,
        })}
      >
        <Sidebar.Link
          data-sidebar-item
          label="home"
          icon={<Icon name={GlobalRouteIcons.home} />}
          value={GlobalRoutePaths.home}
          pathname={location.pathname}
          closeActivePanels={closeActivePanels}
          navigate={navigate}
        />

        <Sidebar.Link
          data-sidebar-item
          label="experience"
          icon={<Icon name={GlobalRouteIcons.experience} />}
          value={GlobalRoutePaths.experience}
          pathname={location.pathname}
          closeActivePanels={closeActivePanels}
          navigate={navigate}
        />

        <Sidebar.Link
          data-sidebar-item
          label="projects"
          icon={<Icon name={GlobalRouteIcons.projects} />}
          value={GlobalRoutePaths.projects}
          pathname={location.pathname}
          closeActivePanels={closeActivePanels}
          navigate={navigate}
        />

        <Sidebar.Link
          data-sidebar-item
          label="toolbox"
          icon={<Icon name={GlobalRouteIcons.toolbox} />}
          value={GlobalRoutePaths.toolbox}
          pathname={location.pathname}
          closeActivePanels={closeActivePanels}
          navigate={navigate}
        />

        <Sidebar.Link
          data-sidebar-item
          label="sandbox"
          icon={<Icon name={GlobalRouteIcons.sandbox} />}
          value={GlobalRoutePaths.sandbox}
          pathname={location.pathname}
          closeActivePanels={closeActivePanels}
          navigate={navigate}
        />

        <Sidebar.Link
          data-sidebar-item
          label="settings"
          icon={<Icon name={GlobalRouteIcons.settings} />}
          value={GlobalRoutePaths.settings}
          pathname={location.pathname}
          closeActivePanels={closeActivePanels}
          navigate={navigate}
        />

        <Action.Spacer />

        <Sidebar.Select
          name="dir"
          icon={<Icon name={lookupWritingModeIcon[store.dir]} />}
          label="writing mode"
          groupId="writing"
          groupValue={store.dir}
          activeGroup={activeGroup}
          storeDispatch={dispatch}
          setActiveGroup={setActiveGroup}
          closeActivePanels={closeActivePanels}
          items={[
            {
              icon: <Icon name={lookupWritingModeIcon.ltr} />,
              value: 'ltr',
              label: 'left-to-right',
              onClick: () => dispatch({ dir: GlobalWritingModes.ltr }),
            },
            {
              icon: <Icon name={lookupWritingModeIcon.rtl} />,
              value: 'rtl',
              label: 'right-to-left',
              onClick: () => dispatch({ dir: GlobalWritingModes.rtl }),
            },
          ]}
        />

        <Sidebar.Select
          name="accent"
          icon={<Sidebar.Color accent={store.accent} />}
          label="accent color"
          groupId="accent"
          groupValue={store.accent}
          activeGroup={activeGroup}
          storeDispatch={dispatch}
          setActiveGroup={setActiveGroup}
          width="calc(var(--action-box) * 6)"
          closeActivePanels={closeActivePanels}
          items={dataGlobalAccentColors.map((token) => ({
            icon: <Sidebar.Color accent={GlobalAccentColors[token]} />,
            onClick: () => dispatch({ accent: GlobalAccentColors[token] }),
            value: GlobalAccentColors[token],
            label: token,
          }))}
        />

        <Sidebar.Select
          name="mode"
          icon={<Icon name={lookupThemeModeIcon[store.mode]} />}
          label="theme mode"
          groupId="theme"
          groupValue={store.mode}
          activeGroup={activeGroup}
          storeDispatch={dispatch}
          setActiveGroup={setActiveGroup}
          closeActivePanels={closeActivePanels}
          items={[
            {
              icon: <Icon name={lookupThemeModeIcon.light} />,
              label: 'Light Mode',
              value: 'light',
              onClick: () => dispatch({ mode: GlobalThemeModes.light }),
            },
            {
              icon: <Icon name={lookupThemeModeIcon.dark} />,
              label: 'Dark Mode',
              value: 'dark',
              onClick: () => dispatch({ mode: GlobalThemeModes.dark }),
            },
            {
              icon: <Icon name={lookupThemeModeIcon.dim} />,
              label: 'Dim Mode',
              value: 'dim',
              onClick: () => dispatch({ mode: GlobalThemeModes.dim }),
            },
          ]}
        />
      </Action.Group>
    </Box>
  );
});

Sidebar.Link = SidebarLink;
Sidebar.Color = SidebarColor;
Sidebar.Select = SidebarSelect;
Sidebar.displayName = '@v2/Sidebar';
export { Sidebar, type SidebarProps };
