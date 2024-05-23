import clsx from 'clsx';
import { factory } from '@/core/factory';
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
import React from 'react';

interface SidebarProps {}

type SidebarFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SidebarProps;
  omits: 'children';
  comps: {
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

  return (
    <Box {...forwardedProps} ref={ref} component="div" className={clsx('v2-sidebar', className)}>
      <Action.Group orientation="vertical" value={location.pathname}>
        <Action
          label="Home"
          value={GlobalRoutePaths.home}
          icon={<Icon name={GlobalRouteIcons.home} />}
          onClick={(event) => navigate(event.currentTarget.value)}
          data-sidebar-item
        />

        <Action
          label="Experience"
          value={GlobalRoutePaths.experience}
          icon={<Icon name={GlobalRouteIcons.experience} />}
          onClick={(event) => navigate(event.currentTarget.value)}
          data-sidebar-item
        />

        <Action
          label="Projects"
          value={GlobalRoutePaths.projects}
          icon={<Icon name={GlobalRouteIcons.projects} />}
          onClick={(event) => navigate(event.currentTarget.value)}
          data-sidebar-item
        />

        <Action
          label="Toolbox"
          value={GlobalRoutePaths.toolbox}
          icon={<Icon name={GlobalRouteIcons.toolbox} />}
          onClick={(event) => navigate(event.currentTarget.value)}
          data-sidebar-item
        />

        <Action
          label="Sandbox"
          value={GlobalRoutePaths.sandbox}
          icon={<Icon name={GlobalRouteIcons.sandbox} />}
          onClick={(event) => navigate(event.currentTarget.value)}
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

        <Action
          label="Settings"
          value={GlobalRoutePaths.settings}
          icon={<Icon name={GlobalRouteIcons.settings} />}
          onClick={(event) => navigate(event.currentTarget.value)}
          data-sidebar-item
        />
      </Action.Group>
    </Box>
  );
});

Sidebar.Select = SidebarSelect;
Sidebar.displayName = '@v2/Sidebar';
export { Sidebar, type SidebarProps };
