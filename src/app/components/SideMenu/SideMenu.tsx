import * as React from 'react';
import { Theme } from '@/types';
import { Action, Icon } from '@/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatchContext, useStateContext } from '@/app/store';

import { SideMenuLink } from './SideMenuLink';
import { SideMenuProps } from './SideMenu.types';
import { SideMenuSelect } from './SideMenuSelect';

import {
  ROUTE_MAP_EXPERIENCE_LINK,
  ROUTE_MAP_PROJECTS_LINK,
  ROUTE_MAP_SANDBOX_LINK,
  ROUTE_MAP_SETTINGS_LINK,
  ROUTE_MAP_TOOLBOX_LINK,
} from '@/app/static';

type SideMenuFactory = React.FC<SideMenuProps> & {
  Link: typeof SideMenuLink;
  Select: typeof SideMenuSelect;
};

type PanelState = {
  dir: boolean;
  mode: boolean;
  accent: boolean;
};

const SideMenu: SideMenuFactory = (props) => {
  const { ...forwardedProps } = props;

  const state = useStateContext();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatchContext();

  const initialState: PanelState = {
    accent: false,
    mode: false,
    dir: false,
  };

  const [panels, setPanels] = React.useState(initialState);

  return (
    <div className="v2-sidemenu" {...forwardedProps}>
      <div className="v2-sidemenu-inner">
        <Action.Group orientation="vertical" value={location.pathname}>
          <SideMenu.Link
            item={ROUTE_MAP_EXPERIENCE_LINK}
            icon={{ type: state.icons }}
            onClick={navigate}
          />

          <SideMenu.Link
            item={ROUTE_MAP_PROJECTS_LINK}
            icon={{ type: state.icons }}
            onClick={navigate}
          />

          <SideMenu.Link
            item={ROUTE_MAP_TOOLBOX_LINK}
            icon={{ type: state.icons }}
            onClick={navigate}
          />

          <SideMenu.Link
            item={ROUTE_MAP_SANDBOX_LINK}
            icon={{ type: state.icons }}
            onClick={navigate}
          />

          <SideMenu.Link
            item={ROUTE_MAP_SETTINGS_LINK}
            icon={{ type: state.icons }}
            onClick={navigate}
          />

          <Action.Spacer grow />

          <SideMenu.Select
            icon={<Icon name={state.dir} type={state.icons} />}
            label="select writing direction"
            value={state.dir}
            isOpen={panels.dir}
            onOpenChange={(isOpen) => {
              dispatch({ menuOpen: undefined, searchOpen: undefined, sideOpen: isOpen });
              setPanels((current) => ({ ...current, ...initialState, dir: isOpen }));
            }}
            onChange={(value) => {
              dispatch({ dir: value as Theme.Dir });
            }}
            items={[
              {
                value: 'ltr',
                label: 'set writing direction left-to-right',
                icon: <Icon name="ltr" type={state.icons} />,
              },
              {
                value: 'rtl',
                label: 'set writing direction right-to-left',
                icon: <Icon name="rtl" type={state.icons} />,
              },
            ]}
          />

          <SideMenu.Select
            icon={<Icon accent={state.accent} type="fill" />}
            label="select accent"
            value={state.accent}
            isOpen={panels.accent}
            onOpenChange={(isOpen) => {
              dispatch({ menuOpen: undefined, searchOpen: undefined, sideOpen: isOpen });
              setPanels((current) => ({ ...current, ...initialState, accent: isOpen }));
            }}
            onChange={(value) => {
              dispatch({ accent: value as Theme.Color });
            }}
            items={[
              {
                value: 'red',
                label: 'set red accent mode',
                icon: <Icon name="shape-circle" accent="red" type="fill" />,
              },
              {
                value: 'orange',
                label: 'set orange accent mode',
                icon: <Icon name="shape-circle" accent="orange" type="fill" />,
              },
              {
                value: 'yellow',
                label: 'set yellow accent mode',
                icon: <Icon name="shape-circle" accent="yellow" type="fill" />,
              },
              {
                value: 'green',
                label: 'set green accent mode',
                icon: <Icon name="shape-circle" accent="green" type="fill" />,
              },
              {
                value: 'mint',
                label: 'set mint accent mode',
                icon: <Icon name="shape-circle" accent="mint" type="fill" />,
              },
              {
                value: 'teal',
                label: 'set teal accent mode',
                icon: <Icon name="shape-circle" accent="teal" type="fill" />,
              },
              {
                value: 'cyan',
                label: 'set cyan accent mode',
                icon: <Icon name="shape-circle" accent="cyan" type="fill" />,
              },
              {
                value: 'blue',
                label: 'set blue accent mode',
                icon: <Icon name="shape-circle" accent="blue" type="fill" />,
              },
              {
                value: 'indigo',
                label: 'set indigo accent mode',
                icon: <Icon name="shape-circle" accent="indigo" type="fill" />,
              },
              {
                value: 'purple',
                label: 'set purple accent mode',
                icon: <Icon name="shape-circle" accent="purple" type="fill" />,
              },
              {
                value: 'pink',
                label: 'set pink accent mode',
                icon: <Icon name="shape-circle" accent="pink" type="fill" />,
              },
              {
                value: 'brown',
                label: 'set brown accent mode',
                icon: <Icon name="shape-circle" accent="brown" type="fill" />,
              },
            ]}
          />

          <SideMenu.Select
            icon={<Icon name={`mode-${state.mode}`} type={state.icons} />}
            label="select theme mode"
            value={state.mode}
            isOpen={panels.mode}
            onOpenChange={(isOpen) => {
              dispatch({ menuOpen: undefined, searchOpen: undefined, sideOpen: isOpen });
              setPanels((current) => ({ ...current, ...initialState, mode: isOpen }));
            }}
            onChange={(value) => {
              dispatch({ mode: value as Theme.Mode });
            }}
            items={[
              {
                value: 'light',
                label: 'set theme mode light',
                icon: <Icon name="mode-light" type={state.icons} />,
              },
              {
                value: 'dark',
                label: 'set theme mode dark',
                icon: <Icon name="mode-dark" type={state.icons} />,
              },
              {
                value: 'dim',
                label: 'set theme mode dim',
                icon: <Icon name="mode-dim" type={state.icons} />,
              },
            ]}
          />

          <Action.Spacer />
        </Action.Group>
      </div>
    </div>
  );
};

SideMenu.Link = SideMenuLink;
SideMenu.Select = SideMenuSelect;
SideMenu.displayName = '@v2/SideMenu';
export { SideMenu };
