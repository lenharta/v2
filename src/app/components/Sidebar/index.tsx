import React from 'react';
import { cx } from '@/app/utils';
import { ICON, Icon } from '@/core';
import { factory } from '@/core/factory';
import { objectKeys } from '@/utils';
import { SidebarItem } from './types';
import { Factory, Store } from '@/types';
import { useFocusContext } from '@/app';
import { useLocation, useNavigate } from 'react-router-dom';
import { useThemeDispatch, useThemeState } from '@/store';

import { SidebarGroup } from './SidebarGroup';
import { SidebarAction } from './SidebarAction';
import { SidebarSpacer } from './SidebarSpacer';
import { SidebarSelect } from './SidebarSelect';
import { SidebarDrawer } from './SidebarDrawer';
import { SidebarOption } from './SidebarOption';

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
    Select: typeof SidebarSelect;
    Option: typeof SidebarOption;
    Drawer: typeof SidebarDrawer;
  };
}>;

const linkGroupIcons: Record<string, ICON> = {
  ['link-home']: 'home',
  ['link-experience']: 'briefcase',
  ['link-projects']: 'code',
  ['link-toolbox']: 'boxToolbox',
  ['link-sandbox']: 'boxRegular',
};

const linkGroupData: Record<string, SidebarItem> = {
  ['link-home']: { label: 'Home', value: '/' },
  ['link-experience']: { label: 'Experience', value: '/experience' },
  ['link-projects']: { label: 'Projects', value: '/projects' },
  ['link-toolbox']: { label: 'Toolbox', value: '/toolbox' },
  ['link-sandbox']: { label: 'Sandbox', value: '/sandbox' },
};

const Swatch = ({ accent }: { accent: Store.Accent }) => (
  <Icon name="placeholder" fill={`var(--c-${accent})`} />
);

export const Sidebar = factory<SidebarFactory>((props, ref) => {
  const { ...forwardedProps } = props;

  const [activeGroup, setActiveGroup] = React.useState<string>();

  const location = useLocation();
  const navigate = useNavigate();

  const themeDispatch = useThemeDispatch();
  const themeState = useThemeState();
  const focusCTX = useFocusContext();

  const handleActiveGroup = (value: string) => {
    const shouldUpdate = value !== activeGroup || activeGroup === undefined;
    setActiveGroup(shouldUpdate ? value : undefined);
  };

  const MODE_ICON_LOOKUP: Record<Store.Mode, ICON> = {
    light: 'sun',
    dark: 'moon',
    dim: 'dim',
  };

  const DIR_ICON_LOOKUP: Record<Store.Dir, ICON> = {
    ltr: 'textLTR',
    rtl: 'textRTL',
  };

  return (
    <div {...forwardedProps} ref={ref} className={cx('sidebar')}>
      <Sidebar.Group>
        {objectKeys(linkGroupData).map((id, index) => {
          const item = linkGroupData[id];
          return (
            <Sidebar.Action
              id={id}
              key={id}
              icon={linkGroupIcons[id]}
              value={item.value}
              label={item.label}
              active={location.pathname === item.value}
              onEnter={(event) => navigate(event.currentTarget.value)}
              onClick={(event) => navigate(event.currentTarget.value)}
              onArrowUp={() => index === 0 && focusCTX.onFocusMenu()}
            />
          );
        })}
      </Sidebar.Group>

      <Sidebar.Spacer />

      <Sidebar.Group>
        <Sidebar.Select
          activeGroup={activeGroup}
          selectedValue={themeState.mode}
          onActionEscape={() => setActiveGroup(undefined)}
          onOptionEscape={() => setActiveGroup(undefined)}
          onActionClick={(event) => handleActiveGroup(event.currentTarget.value)}
          onActionEnter={(event) => handleActiveGroup(event.currentTarget.value)}
          onOptionClick={(event) => themeDispatch.setMode(event.currentTarget.value as Store.Mode)}
          onOptionEnter={(event) => themeDispatch.setMode(event.currentTarget.value as Store.Mode)}
          group={{
            value: 'mode-group',
            label: 'Theme Mode',
            icon: MODE_ICON_LOOKUP[themeState.mode],
          }}
          items={[
            { icon: MODE_ICON_LOOKUP.light, label: 'Light Mode', value: 'light' },
            { icon: MODE_ICON_LOOKUP.dark, label: 'Dark Mode', value: 'dark' },
            { icon: MODE_ICON_LOOKUP.dim, label: 'Dim Mode', value: 'dim' },
          ]}
        />

        <Sidebar.Select
          activeGroup={activeGroup}
          selectedValue={themeState.dir}
          onActionEscape={() => setActiveGroup(undefined)}
          onOptionEscape={() => setActiveGroup(undefined)}
          onActionClick={(event) => handleActiveGroup(event.currentTarget.value)}
          onActionEnter={(event) => handleActiveGroup(event.currentTarget.value)}
          onOptionClick={(event) => themeDispatch.setDir(event.currentTarget.value as Store.Dir)}
          onOptionEnter={(event) => themeDispatch.setDir(event.currentTarget.value as Store.Dir)}
          group={{
            value: 'direction-group',
            label: 'Writing Direction',
            icon: DIR_ICON_LOOKUP[themeState.dir],
          }}
          items={[
            { icon: DIR_ICON_LOOKUP.ltr, label: 'Left-to-Right', value: 'ltr' },
            { icon: DIR_ICON_LOOKUP.rtl, label: 'Right-to-Left', value: 'rtl' },
          ]}
        />

        <Sidebar.Select
          activeGroup={activeGroup}
          selectedValue={themeState.accent}
          onActionEscape={() => setActiveGroup(undefined)}
          onOptionEscape={() => setActiveGroup(undefined)}
          onActionClick={(event) => handleActiveGroup(event.currentTarget.value)}
          onActionEnter={(event) => handleActiveGroup(event.currentTarget.value)}
          onOptionClick={(event) => {
            themeDispatch.setAccent(event.currentTarget.value as Store.Accent);
          }}
          onOptionEnter={(event) => {
            themeDispatch.setAccent(event.currentTarget.value as Store.Accent);
          }}
          group={{
            value: 'accent-group',
            label: 'Accent Color',
            icon: <Swatch accent={themeState.accent} />,
          }}
          items={[
            { icon: <Swatch accent="red" />, label: 'Red', value: 'red' },
            { icon: <Swatch accent="orange" />, label: 'Orange', value: 'orange' },
            { icon: <Swatch accent="yellow" />, label: 'Yellow', value: 'yellow' },
            { icon: <Swatch accent="green" />, label: 'Green', value: 'green' },
            { icon: <Swatch accent="mint" />, label: 'Mint', value: 'mint' },
            { icon: <Swatch accent="teal" />, label: 'Teal', value: 'teal' },
            { icon: <Swatch accent="cyan" />, label: 'Cyan', value: 'cyan' },
            { icon: <Swatch accent="blue" />, label: 'Blue', value: 'blue' },
            { icon: <Swatch accent="indigo" />, label: 'Indigo', value: 'indigo' },
            { icon: <Swatch accent="purple" />, label: 'Purple', value: 'purple' },
            { icon: <Swatch accent="pink" />, label: 'Pink', value: 'pink' },
            { icon: <Swatch accent="brown" />, label: 'Brown', value: 'brown' },
            { icon: <Swatch accent="gray" />, label: 'Gray', value: 'gray' },
          ]}
        />

        <Sidebar.Action
          icon="settings"
          label="Settings"
          value="/settings"
          active={location.pathname === '/settings'}
          onEnter={(event) => navigate(event.currentTarget.value)}
          onClick={(event) => navigate(event.currentTarget.value)}
        />
      </Sidebar.Group>
    </div>
  );
});

Sidebar.displayName = '@v2/Sidebar';
Sidebar.Option = SidebarOption;
Sidebar.Drawer = SidebarDrawer;
Sidebar.Spacer = SidebarSpacer;
Sidebar.Action = SidebarAction;
Sidebar.Group = SidebarGroup;
Sidebar.Select = SidebarSelect;
