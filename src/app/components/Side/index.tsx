import * as React from 'react';
import * as Router from 'react-router-dom';
import { Theme } from '@types';
import { Action, IconProps } from '@core';
import { useDispatch, useStore } from '@app';
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
                icon: { type: store.icons, name: 'box', size: 'md' },
              },
              {
                value: '/stack',
                label: 'Stack',
                icon: { type: store.icons, name: 'code-slash', size: 'md' },
              },
              {
                value: '/demo',
                label: 'Demo',
                icon: { type: store.icons, name: 'layers', size: 'md' },
              },
              {
                value: '/articles',
                label: 'Articles',
                icon: { type: store.icons, name: 'collection', size: 'md' },
              },
            ]}
          />

          <Action.Spacer grow className="v2-side-spacer" />

          <Side.Select
            name="accent"
            store={store}
            dispatch={dispatch}
            group={{
              value: store.accent,
              label: 'select accent color',
              icon: { type: store.icons, fill: store.accent },
            }}
            items={[
              {
                value: 'red',
                label: 'red',
                icon: { type: 'fill' },
              },
              {
                value: 'orange',
                label: 'orange',
                icon: { type: 'fill' },
              },
              {
                value: 'yellow',
                label: 'yellow',
                icon: { type: 'fill' },
              },
              {
                value: 'green',
                label: 'green',
                icon: { type: 'fill' },
              },
              {
                value: 'mint',
                label: 'mint',
                icon: { type: 'fill' },
              },
              {
                value: 'teal',
                label: 'teal',
                icon: { type: 'fill' },
              },
              {
                value: 'cyan',
                label: 'cyan',
                icon: { type: 'fill' },
              },
              {
                value: 'blue',
                label: 'blue',
                icon: { type: 'fill' },
              },
              {
                value: 'indigo',
                label: 'indigo',
                icon: { type: 'fill' },
              },
              {
                value: 'purple',
                label: 'purple',
                icon: { type: 'fill' },
              },
              {
                value: 'pink',
                label: 'pink',
                icon: { type: 'fill' },
              },
              {
                value: 'brown',
                label: 'brown',
                icon: { type: 'fill' },
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

          <Action.Spacer className="v2-side-spacer" />
        </Action.Group>
      </div>
    </aside>
  );
};

Side.Nav = SideNav;
Side.Select = SideSelect;
Side.displayName = '@v2/Side';
export { Side, type SideProps, type SideFactory };
