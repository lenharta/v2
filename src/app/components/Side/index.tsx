import * as React from 'react';
import * as Router from 'react-router-dom';
import { Theme } from '@/types';
import { Action, IconProps } from '@/core';
import { useDispatch, useStore } from '@/app';
import { SideNav } from './SideNav';
import { SideSelect } from './SideSelect';

interface SideProps {}

type SideFactory = React.FC<SideProps> & {
  Select: typeof SideSelect;
  Nav: typeof SideNav;
};

function getDirIconName(value: Theme.Dir): IconProps['name'] {
  return value === 'ltr' ? 'text-left' : 'text-right';
}

function getModeIconName(value: Theme.Mode): IconProps['name'] {
  return `mode-${value}`;
}

const Side: SideFactory = ({}) => {
  const store = useStore();
  const dispatch = useDispatch();
  const navigate = Router.useNavigate();
  const location = Router.useLocation();

  return (
    <aside className="v2-app-side">
      <div className="v2-app-side-layout">
        <Action.Group orientation="vertical" gap="xxs">
          <Side.Nav
            onClick={navigate}
            location={location}
            links={[
              {
                value: '/about',
                label: 'go to about page',
                icon: { name: 'shape-circle', type: store.icons },
              },
              {
                value: '/projects',
                label: 'go to projects page',
                icon: { name: 'shape-circle', type: store.icons },
              },
              {
                value: '/articles',
                label: 'go to articles page',
                icon: { name: 'shape-circle', type: store.icons },
              },
              {
                value: '/stack',
                label: 'go to stack page',
                icon: { name: 'shape-circle', type: store.icons },
              },
              {
                value: '/elements',
                label: 'go to elements page',
                icon: { name: 'shape-circle', type: store.icons },
              },
            ]}
          />

          <Action.Spacer grow />

          <Side.Select
            name="dir"
            store={store}
            dispatch={dispatch}
            group={{
              value: store.dir,
              label: 'select writing direction',
              icon: { type: store.icons, name: getDirIconName(store.dir) },
            }}
            items={[
              {
                value: 'ltr',
                label: 'left to right',
                icon: { type: store.icons, name: getDirIconName('ltr') },
              },
              {
                value: 'rtl',
                label: 'right to left',
                icon: { type: store.icons, name: getDirIconName('rtl') },
              },
            ]}
          />

          <Side.Select
            name="accent"
            store={store}
            dispatch={dispatch}
            group={{
              value: store.accent,
              label: 'select accent color',
              icon: { type: 'fill', name: 'shape-circle', surface: store.accent },
            }}
            items={[
              {
                value: 'red',
                label: 'red',
                icon: { type: store.icons, name: 'shape-circle', surface: 'red' },
              },
              {
                value: 'orange',
                label: 'orange',
                icon: { type: store.icons, name: 'shape-circle', surface: 'orange' },
              },
              {
                value: 'yellow',
                label: 'yellow',
                icon: { type: store.icons, name: 'shape-circle', surface: 'yellow' },
              },
              {
                value: 'green',
                label: 'green',
                icon: { type: store.icons, name: 'shape-circle', surface: 'green' },
              },
              {
                value: 'mint',
                label: 'mint',
                icon: { type: store.icons, name: 'shape-circle', surface: 'mint' },
              },
              {
                value: 'teal',
                label: 'teal',
                icon: { type: store.icons, name: 'shape-circle', surface: 'teal' },
              },
              {
                value: 'cyan',
                label: 'cyan',
                icon: { type: store.icons, name: 'shape-circle', surface: 'cyan' },
              },
              {
                value: 'blue',
                label: 'blue',
                icon: { type: store.icons, name: 'shape-circle', surface: 'blue' },
              },
              {
                value: 'indigo',
                label: 'indigo',
                icon: { type: store.icons, name: 'shape-circle', surface: 'indigo' },
              },
              {
                value: 'purple',
                label: 'purple',
                icon: { type: store.icons, name: 'shape-circle', surface: 'purple' },
              },
              {
                value: 'pink',
                label: 'pink',
                icon: { type: store.icons, name: 'shape-circle', surface: 'pink' },
              },
              {
                value: 'brown',
                label: 'brown',
                icon: { type: store.icons, name: 'shape-circle', surface: 'brown' },
              },
            ]}
          />

          <Side.Select
            name="mode"
            store={store}
            dispatch={dispatch}
            group={{
              value: store.mode,
              label: 'select theme mode',
              icon: { type: store.icons, name: getModeIconName(store.mode) },
            }}
            items={[
              {
                value: 'light',
                label: 'light mode',
                icon: { type: store.icons, name: getModeIconName('light') },
              },
              {
                value: 'dark',
                label: 'dark mode',
                icon: { type: store.icons, name: getModeIconName('dark') },
              },
              {
                value: 'dim',
                label: 'dim mode',
                icon: { type: store.icons, name: getModeIconName('dim') },
              },
            ]}
          />

          <Action.Spacer />
        </Action.Group>
      </div>
    </aside>
  );
};

Side.Nav = SideNav;
Side.Select = SideSelect;
Side.displayName = '@v2/Side';
export { Side, type SideProps, type SideFactory };
