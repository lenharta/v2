import { Static } from '@/types';

const ROUTE_MAP_SETTINGS_META: Static.RouteMeta = {
  tags: 'route/page/settings/controls/theme/language',
  title: 'Andrew Lenhart | Settings',
  description: 'Settings page description will be placed here.',
};

const ROUTE_MAP_SETTINGS_LINK: Static.RouteLink = {
  uid: 'route:settings',
  icon: 'gear',
  value: '/settings',
  label: 'go to settings page',
};

const ROUTE_MAP_SETTINGS: Static.RouteItem = {
  uid: 'route:settings',
  type: 'route',
  path: '/settings',
  meta: ROUTE_MAP_SETTINGS_META,
  link: ROUTE_MAP_SETTINGS_LINK,
};

export { ROUTE_MAP_SETTINGS_META, ROUTE_MAP_SETTINGS_LINK, ROUTE_MAP_SETTINGS };
