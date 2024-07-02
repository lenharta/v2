import * as React from 'react';
import * as Router from 'react-router-dom';
import { Theme } from '@/types';
import { Action, IconProps } from '@/core';
import { useDispatch, useStore } from '@/app';
import { SideSelect } from './SideSelect';
import { SideNav } from './SideNav';

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
    <aside className="v2-side">
      <div className="v2-side-layout">
        <Action.Group orientation="vertical" gap="xxs">
          <Side.Nav
            onClick={navigate}
            location={location}
            links={[
              {
                value: '/about',
                label: 'About',
                icon: { type: store.icons, name: 'person', size: 'md' },
              },
              {
                value: '/projects',
                label: 'Projects',
                icon: { type: store.icons, name: 'folder', size: 'md' },
              },
              {
                value: '/stack',
                label: 'Stack',
                icon: { type: store.icons, name: 'layers', size: 'md' },
              },
              {
                value: '/elements',
                label: 'Elements',
                icon: { type: store.icons, name: 'grid', size: 'md' },
              },
              {
                value: '/articles',
                label: 'Articles',
                icon: { type: store.icons, name: 'chat-left', size: 'md' },
              },
            ]}
          />

          <Action.Spacer grow />

          <Side.Select
            name="accent"
            store={store}
            dispatch={dispatch}
            group={{
              value: store.accent,
              label: 'select accent color',
              icon: { type: store.icons, surface: store.accent },
            }}
            items={[
              {
                value: 'red',
                label: 'red',
                icon: { type: 'fill', surface: 'red' },
              },
              {
                value: 'orange',
                label: 'orange',
                icon: { type: 'fill', surface: 'orange' },
              },
              {
                value: 'yellow',
                label: 'yellow',
                icon: { type: 'fill', surface: 'yellow' },
              },
              {
                value: 'green',
                label: 'green',
                icon: { type: 'fill', surface: 'green' },
              },
              {
                value: 'mint',
                label: 'mint',
                icon: { type: 'fill', surface: 'mint' },
              },
              {
                value: 'teal',
                label: 'teal',
                icon: { type: 'fill', surface: 'teal' },
              },
              {
                value: 'cyan',
                label: 'cyan',
                icon: { type: 'fill', surface: 'cyan' },
              },
              {
                value: 'blue',
                label: 'blue',
                icon: { type: 'fill', surface: 'blue' },
              },
              {
                value: 'indigo',
                label: 'indigo',
                icon: { type: 'fill', surface: 'indigo' },
              },
              {
                value: 'purple',
                label: 'purple',
                icon: { type: 'fill', surface: 'purple' },
              },
              {
                value: 'pink',
                label: 'pink',
                icon: { type: 'fill', surface: 'pink' },
              },
              {
                value: 'brown',
                label: 'brown',
                icon: { type: 'fill', surface: 'brown' },
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
