import clsx from 'clsx';
import React from 'react';
import { factory } from '@/core/factory';
import { SidebarLink } from './SidebarLink';
import { SidebarSelect } from './SidebarSelect';
import { Action, Box, Icon } from '@/core/components';
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
import { createEventCallback } from '@/utils';
import { SidebarColor } from './SidebarColor';
import { createKeyDownGroup } from '@/core';

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
        data-sidebar-link-group
        value={location.pathname}
        orientation="vertical"
        onKeyDown={createKeyDownGroup({
          parentSelector: '[data-sidebar-link-group]',
          childSelector: '[data-sidebar-link-item]',
          orientation: 'vertical',
          loop: false,
        })}
      >
        <Sidebar.Link
          data-sidebar-link-item
          label="home"
          icon={<Icon name={GlobalRouteIcons.home} />}
          value={GlobalRoutePaths.home}
          pathname={location.pathname}
          closeActivePanels={closeActivePanels}
          navigate={navigate}
        />

        <Sidebar.Link
          data-sidebar-link-item
          label="experience"
          icon={<Icon name={GlobalRouteIcons.experience} />}
          value={GlobalRoutePaths.experience}
          pathname={location.pathname}
          closeActivePanels={closeActivePanels}
          navigate={navigate}
        />

        <Sidebar.Link
          data-sidebar-link-item
          label="projects"
          icon={<Icon name={GlobalRouteIcons.projects} />}
          value={GlobalRoutePaths.projects}
          pathname={location.pathname}
          closeActivePanels={closeActivePanels}
          navigate={navigate}
        />

        <Sidebar.Link
          data-sidebar-link-item
          label="toolbox"
          icon={<Icon name={GlobalRouteIcons.toolbox} />}
          value={GlobalRoutePaths.toolbox}
          pathname={location.pathname}
          closeActivePanels={closeActivePanels}
          navigate={navigate}
        />

        <Sidebar.Link
          data-sidebar-link-item
          label="sandbox"
          icon={<Icon name={GlobalRouteIcons.sandbox} />}
          value={GlobalRoutePaths.sandbox}
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

        <Sidebar.Select
          name="accent"
          icon={<Sidebar.Color accent={store.accent} />}
          label="accent color"
          groupId="accent"
          groupValue={store.accent}
          activeGroup={activeGroup}
          storeDispatch={dispatch}
          setActiveGroup={setActiveGroup}
          closeActivePanels={closeActivePanels}
          items={[
            {
              icon: <Sidebar.Color accent={GlobalAccentColors.red} />,
              label: 'red',
              value: GlobalAccentColors.red,
              onClick: () => dispatch({ accent: GlobalAccentColors.red }),
            },
            {
              icon: <Sidebar.Color accent={GlobalAccentColors.orange} />,
              label: 'orange',
              value: GlobalAccentColors.orange,
              onClick: () => dispatch({ accent: GlobalAccentColors.orange }),
            },
            {
              icon: <Sidebar.Color accent={GlobalAccentColors.yellow} />,
              label: 'yellow',
              value: GlobalAccentColors.yellow,
              onClick: () => dispatch({ accent: GlobalAccentColors.yellow }),
            },
            {
              icon: <Sidebar.Color accent={GlobalAccentColors.green} />,
              label: 'green',
              value: GlobalAccentColors.green,
              onClick: () => dispatch({ accent: GlobalAccentColors.green }),
            },
            {
              icon: <Sidebar.Color accent={GlobalAccentColors.mint} />,
              label: 'mint',
              value: GlobalAccentColors.mint,
              onClick: () => dispatch({ accent: GlobalAccentColors.mint }),
            },
            {
              icon: <Sidebar.Color accent={GlobalAccentColors.teal} />,
              label: 'teal',
              value: GlobalAccentColors.teal,
              onClick: () => dispatch({ accent: GlobalAccentColors.teal }),
            },
            {
              icon: <Sidebar.Color accent={GlobalAccentColors.cyan} />,
              label: 'cyan',
              value: GlobalAccentColors.cyan,
              onClick: () => dispatch({ accent: GlobalAccentColors.cyan }),
            },
            {
              icon: <Sidebar.Color accent={GlobalAccentColors.blue} />,
              label: 'blue',
              value: GlobalAccentColors.blue,
              onClick: () => dispatch({ accent: GlobalAccentColors.blue }),
            },
            {
              icon: <Sidebar.Color accent={GlobalAccentColors.indigo} />,
              label: 'indigo',
              value: GlobalAccentColors.indigo,
              onClick: () => dispatch({ accent: GlobalAccentColors.indigo }),
            },
            {
              icon: <Sidebar.Color accent={GlobalAccentColors.purple} />,
              label: 'purple',
              value: GlobalAccentColors.purple,
              onClick: () => dispatch({ accent: GlobalAccentColors.purple }),
            },
            {
              icon: <Sidebar.Color accent={GlobalAccentColors.pink} />,
              label: 'pink',
              value: GlobalAccentColors.pink,
              onClick: () => dispatch({ accent: GlobalAccentColors.pink }),
            },
            {
              icon: <Sidebar.Color accent={GlobalAccentColors.brown} />,
              label: 'brown',
              value: GlobalAccentColors.brown,
              onClick: () => dispatch({ accent: GlobalAccentColors.brown }),
            },
          ]}
        />

        <Sidebar.Link
          label="settings"
          icon={<Icon name={GlobalRouteIcons.settings} />}
          value={GlobalRoutePaths.settings}
          pathname={location.pathname}
          closeActivePanels={closeActivePanels}
          navigate={navigate}
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
