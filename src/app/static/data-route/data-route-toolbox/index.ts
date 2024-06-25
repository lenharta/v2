import { Static } from '@/types';

const ROUTE_MAP_TOOLBOX_META: Static.RouteMeta = {
  tags: 'route/page/tools/stack/tech/technology/javascript/typescript/react/html/css/scss/sass',
  title: 'Andrew Lenhart | Toolbox',
  description: 'Toolbox page description will be placed here.',
};

const ROUTE_MAP_TOOLBOX_LINK: Static.RouteLink = {
  uid: 'route:toolbox',
  icon: 'layers',
  value: '/toolbox',
  label: 'go to toolbox page',
};

const ROUTE_MAP_TOOLBOX: Static.RouteItem = {
  uid: 'route:toolbox',
  type: 'route',
  path: '/toolbox',
  meta: ROUTE_MAP_TOOLBOX_META,
  link: ROUTE_MAP_TOOLBOX_LINK,
};

export { ROUTE_MAP_TOOLBOX_META, ROUTE_MAP_TOOLBOX_LINK, ROUTE_MAP_TOOLBOX };
