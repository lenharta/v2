import * as React from 'react';
import { useDispatch, useStore } from '@/app/store';
import { SideMenuTarget } from './SideMenuTarget';
import { SideMenuGroup } from './SideMenuGroup';

export type SideMenuProps = {};

export type SideMenuComponent = {
  (props: SideMenuProps): React.ReactNode;
  displayName?: string;
  Target: typeof SideMenuTarget;
  Group: typeof SideMenuGroup;
};

export const SideMenu: SideMenuComponent = ({}: SideMenuProps) => {
  const dispatch = useDispatch();
  const store = useStore();

  return (
    <div className="v2-side-menu">
      <SideMenu.Group>
        <SideMenu.Target
          group="accent"
          store={store}
          dispatch={dispatch}
          items={[
            {
              value: 'red',
              label: 'Red',
              icon: { name: 'shape-circle', fill: 'red' },
            },
            {
              value: 'orange',
              label: 'Orange',
              icon: { name: 'shape-circle', fill: 'orange' },
            },
            {
              value: 'yellow',
              label: 'Yellow',
              icon: { name: 'shape-circle', fill: 'yellow' },
            },
            {
              value: 'green',
              label: 'Green',
              icon: { name: 'shape-circle', fill: 'green' },
            },
            {
              value: 'teal',
              label: 'Teal',
              icon: { name: 'shape-circle', fill: 'teal' },
            },
            {
              value: 'cyan',
              label: 'Cyan',
              icon: { name: 'shape-circle', fill: 'cyan' },
            },
            {
              value: 'blue',
              label: 'Blue',
              icon: { name: 'shape-circle', fill: 'blue' },
            },
            {
              value: 'purple',
              label: 'Purple',
              icon: { name: 'shape-circle', fill: 'purple' },
            },
            {
              value: 'magenta',
              label: 'Magenta',
              icon: { name: 'shape-circle', fill: 'magenta' },
            },
            {
              value: 'stone',
              label: 'Stone',
              icon: { name: 'shape-circle', fill: 'stone' },
            },
            {
              value: 'grey',
              label: 'Grey',
              icon: { name: 'shape-circle', fill: 'grey' },
            },
            {
              value: 'slate',
              label: 'Slate',
              icon: { name: 'shape-circle', fill: 'slate' },
            },
          ]}
        />

        <SideMenu.Target
          group="mode"
          store={store}
          dispatch={dispatch}
          items={[
            { value: 'dim', label: 'Dim Mode', icon: { name: 'mode-dim' } },
            { value: 'dark', label: 'Dark Mode', icon: { name: 'mode-dark' } },
            { value: 'light', label: 'Light Mode', icon: { name: 'mode-light' } },
          ]}
        />

        <SideMenu.Target
          group="dir"
          store={store}
          dispatch={dispatch}
          items={[
            { value: 'ltr', label: 'Left-To-Right', icon: { name: 'text-left' } },
            { value: 'rtl', label: 'Right-To-Left', icon: { name: 'text-right' } },
          ]}
        />
      </SideMenu.Group>
    </div>
  );
};

SideMenu.Group = SideMenuGroup;
SideMenu.Target = SideMenuTarget;
SideMenu.displayName = '@v2/Side.Menu';
