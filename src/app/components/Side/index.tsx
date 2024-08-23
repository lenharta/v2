import * as React from 'react';
import { Action } from '@core';
import { SideNav } from './SideNav';
import { SideSelect } from './SideSelect';

export type SideFactory = React.FC<{}> & {
  Select: typeof SideSelect;
  Nav: typeof SideNav;
};

export const Side: SideFactory = ({}) => {
  return (
    <aside className="v2-side">
      <div className="v2-side-layout">
        <Action.Group orientation="vertical" gap="xxs">
          <Action.Spacer className="v2-side-spacer" grow />
          <Action.Spacer className="v2-side-spacer" />
        </Action.Group>
      </div>
    </aside>
  );
};

Side.Nav = SideNav;
Side.Select = SideSelect;
Side.displayName = '@v2/Side';

// type ParsedRouteLink = App.RouteLink<{ icon?: Partial<IconProps> }>;

// function parseRouteLink(config: App.RouteConfig, icon?: Partial<IconProps>): ParsedRouteLink {
//   const { size = 'md', type = 'outline', name = 'shape-circle', ...rest } = icon || {};
//   return {
//     value: config.location.pathname,
//     label: config.metadata.title,
//     icon: { type, name, size, ...rest },
//   };
// }

// function getDirIconName(value: Theme.Dir): IconProps['name'] {
//   return value === 'ltr' ? 'text-left' : 'text-right';
// }

// function getModeIconName(value: Theme.Mode): IconProps['name'] {
//   return `mode-${value}`;
// }

// const store = useStore();
// const dispatch = useDispatch();
// const navigate = Router.useNavigate();
// const location = Router.useLocation();

// <Side.Nav
//   onClick={navigate}
//   location={location}
//   links={[
//     parseRouteLink(ROUTE_CONFIG_ABOUT, { type: store.icons }),
//     parseRouteLink(ROUTE_CONFIG_PROJECTS, { type: store.icons }),
//     parseRouteLink(ROUTE_CONFIG_STACK, { type: store.icons }),
//     parseRouteLink(ROUTE_CONFIG_ABOUT, { type: store.icons }),
//     parseRouteLink(ROUTE_CONFIG_ABOUT, { type: store.icons }),
//     // {
//     //   value: ROUTE_CONFIG_ABOUT.location.pathname,
//     //   label: ROUTE_CONFIG_ABOUT.metadata.title,
//     //   icon: { type: store.icons, name: ROUTE_CONFIG_ABOUT, size: 'md' },
//     // },
//     {
//       value: '/projects',
//       label: 'Projects',
//       icon: { type: store.icons, name: 'box', size: 'md' },
//     },
//     {
//       value: '/stack',
//       label: 'Stack',
//       icon: { type: store.icons, name: 'code-slash', size: 'md' },
//     },
//     {
//       value: '/demo',
//       label: 'Demo',
//       icon: { type: store.icons, name: 'layers', size: 'md' },
//     },
//     {
//       value: '/articles',
//       label: 'Articles',
//       icon: { type: store.icons, name: 'collection', size: 'md' },
//     },
//   ]}
// />

//  <Side.Select
//    name="accent"
//    store={store}
//    dispatch={dispatch}
//    group={{
//      value: store.accent,
//      label: 'select accent color',
//      icon: { type: store.icons, fill: store.accent },
//    }}
//    items={[
//      {
//        value: 'red',
//        label: 'red',
//        icon: { type: 'fill' },
//      },
//      {
//        value: 'orange',
//        label: 'orange',
//        icon: { type: 'fill' },
//      },
//      {
//        value: 'yellow',
//        label: 'yellow',
//        icon: { type: 'fill' },
//      },
//      {
//        value: 'green',
//        label: 'green',
//        icon: { type: 'fill' },
//      },
//      {
//        value: 'mint',
//        label: 'mint',
//        icon: { type: 'fill' },
//      },
//      {
//        value: 'teal',
//        label: 'teal',
//        icon: { type: 'fill' },
//      },
//      {
//        value: 'cyan',
//        label: 'cyan',
//        icon: { type: 'fill' },
//      },
//      {
//        value: 'blue',
//        label: 'blue',
//        icon: { type: 'fill' },
//      },
//      {
//        value: 'indigo',
//        label: 'indigo',
//        icon: { type: 'fill' },
//      },
//      {
//        value: 'purple',
//        label: 'purple',
//        icon: { type: 'fill' },
//      },
//      {
//        value: 'pink',
//        label: 'pink',
//        icon: { type: 'fill' },
//      },
//      {
//        value: 'brown',
//        label: 'brown',
//        icon: { type: 'fill' },
//      },
//    ]}
//  />

//  <Side.Select
//    name="mode"
//    store={store}
//    dispatch={dispatch}
//    group={{
//      value: store.mode,
//      label: 'select theme mode',
//      icon: { type: store.icons, name: getModeIconName(store.mode) },
//    }}
//    items={[
//      {
//        value: 'light',
//        label: 'light mode',
//        icon: { type: store.icons, name: getModeIconName('light') },
//      },
//      {
//        value: 'dark',
//        label: 'dark mode',
//        icon: { type: store.icons, name: getModeIconName('dark') },
//      },
//      {
//        value: 'dim',
//        label: 'dim mode',
//        icon: { type: store.icons, name: getModeIconName('dim') },
//      },
//    ]}
//  />

//  <Side.Select
//    name="dir"
//    store={store}
//    dispatch={dispatch}
//    group={{
//      value: store.dir,
//      label: 'select writing direction',
//      icon: { type: store.icons, name: getDirIconName(store.dir) },
//    }}
//    items={[
//      {
//        value: 'ltr',
//        label: 'left to right',
//        icon: { type: store.icons, name: getDirIconName('ltr') },
//      },
//      {
//        value: 'rtl',
//        label: 'right to left',
//        icon: { type: store.icons, name: getDirIconName('rtl') },
//      },
//    ]}
//  />
