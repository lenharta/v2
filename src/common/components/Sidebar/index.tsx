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

interface SidebarProps {}

type SidebarFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SidebarProps;
  omits: 'children';
  comps: {
    Link: typeof SidebarLink;
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
    setActiveGroup('');
    dispatch({
      menuOpen: undefined,
      resultOpen: undefined,
      splashOpen: undefined,
      sidebarOpen: undefined,
    });
  };

  const handleHotKeyCapture = createEventCallback(forwardedProps.onKeyDownCapture, (event) => {
    if (event.code === 'Escape') {
      event.stopPropagation();
      event.preventDefault();
      closeActivePanels();
    }
  });

  return (
    <Box
      {...forwardedProps}
      onKeyDownCapture={handleHotKeyCapture}
      className={clsx('v2-sidebar', className)}
      component="div"
      ref={ref}
    >
      <Action.Group orientation="vertical" value={location.pathname}>
        <Sidebar.Link
          label="home"
          icon={<Icon name={GlobalRouteIcons.home} />}
          value={GlobalRoutePaths.home}
          pathname={location.pathname}
          closeActivePanels={closeActivePanels}
          navigate={navigate}
          data-sidebar-item
        />

        <Sidebar.Link
          label="experience"
          icon={<Icon name={GlobalRouteIcons.experience} />}
          value={GlobalRoutePaths.experience}
          pathname={location.pathname}
          closeActivePanels={closeActivePanels}
          navigate={navigate}
          data-sidebar-item
        />

        <Sidebar.Link
          label="projects"
          icon={<Icon name={GlobalRouteIcons.projects} />}
          value={GlobalRoutePaths.projects}
          pathname={location.pathname}
          closeActivePanels={closeActivePanels}
          navigate={navigate}
          data-sidebar-item
        />

        <Sidebar.Link
          label="toolbox"
          icon={<Icon name={GlobalRouteIcons.toolbox} />}
          value={GlobalRoutePaths.toolbox}
          pathname={location.pathname}
          closeActivePanels={closeActivePanels}
          navigate={navigate}
          data-sidebar-item
        />

        <Sidebar.Link
          label="sandbox"
          icon={<Icon name={GlobalRouteIcons.sandbox} />}
          value={GlobalRoutePaths.sandbox}
          pathname={location.pathname}
          closeActivePanels={closeActivePanels}
          navigate={navigate}
          data-sidebar-item
        />

        <Action.Spacer />

        <Sidebar.Select
          icon={<Icon name={lookupWritingModeIcon[store.dir]} />}
          label="writing mode"
          groupId="writing"
          groupValue={store.dir}
          activeGroup={activeGroup}
          setActiveGroup={setActiveGroup}
          closeActivePanels={closeActivePanels}
          data-sidebar-item
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
          icon={<Icon name={lookupThemeModeIcon[store.mode]} />}
          label="theme mode"
          groupId="theme"
          groupValue={store.mode}
          activeGroup={activeGroup}
          setActiveGroup={setActiveGroup}
          closeActivePanels={closeActivePanels}
          data-sidebar-item
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
          icon={<Icon name="palette" />}
          label="accent color"
          groupId="accent"
          groupValue={store.accent}
          closeActivePanels={closeActivePanels}
          activeGroup={activeGroup}
          setActiveGroup={setActiveGroup}
          data-sidebar-item
          items={[
            {
              icon: <div className="v2-sidebar-color-icon-red" />,
              label: 'red',
              value: GlobalAccentColors.red,
              onClick: () => dispatch({ accent: GlobalAccentColors.red }),
            },
            {
              icon: <div className="v2-sidebar-color-icon-orange" />,
              label: 'orange',
              value: GlobalAccentColors.orange,
              onClick: () => dispatch({ accent: GlobalAccentColors.orange }),
            },
            {
              icon: <div className="v2-sidebar-color-icon-yellow" />,
              label: 'yellow',
              value: GlobalAccentColors.yellow,
              onClick: () => dispatch({ accent: GlobalAccentColors.yellow }),
            },
            {
              icon: <div className="v2-sidebar-color-icon-green" />,
              label: 'green',
              value: GlobalAccentColors.green,
              onClick: () => dispatch({ accent: GlobalAccentColors.green }),
            },
            {
              icon: <div className="v2-sidebar-color-icon-mint" />,
              label: 'mint',
              value: GlobalAccentColors.mint,
              onClick: () => dispatch({ accent: GlobalAccentColors.mint }),
            },
            {
              icon: <div className="v2-sidebar-color-icon-teal" />,
              label: 'teal',
              value: GlobalAccentColors.teal,
              onClick: () => dispatch({ accent: GlobalAccentColors.teal }),
            },
            {
              icon: <div className="v2-sidebar-color-icon-cyan" />,
              label: 'cyan',
              value: GlobalAccentColors.cyan,
              onClick: () => dispatch({ accent: GlobalAccentColors.cyan }),
            },
            {
              icon: <div className="v2-sidebar-color-icon-blue" />,
              label: 'blue',
              value: GlobalAccentColors.blue,
              onClick: () => dispatch({ accent: GlobalAccentColors.blue }),
            },
            {
              icon: <div className="v2-sidebar-color-icon-indigo" />,
              label: 'indigo',
              value: GlobalAccentColors.indigo,
              onClick: () => dispatch({ accent: GlobalAccentColors.indigo }),
            },
            {
              icon: <div className="v2-sidebar-color-icon-purple" />,
              label: 'purple',
              value: GlobalAccentColors.purple,
              onClick: () => dispatch({ accent: GlobalAccentColors.purple }),
            },
            {
              icon: <div className="v2-sidebar-color-icon-pink" />,
              label: 'pink',
              value: GlobalAccentColors.pink,
              onClick: () => dispatch({ accent: GlobalAccentColors.pink }),
            },
            {
              icon: <div className="v2-sidebar-color-icon-brown" />,
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
          data-sidebar-item
        />
      </Action.Group>
    </Box>
  );
});

Sidebar.Link = SidebarLink;
Sidebar.Select = SidebarSelect;
Sidebar.displayName = '@v2/Sidebar';
export { Sidebar, type SidebarProps };
