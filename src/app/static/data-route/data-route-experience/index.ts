import { Static } from '@types';

const ROUTE_MAP_EXPERIENCE_META: Static.RouteMeta = {
  tags: 'route/page/experience/work/history',
  title: 'Andrew Lenhart | Experience',
  description: 'Experience page description will be placed here.',
};

const ROUTE_MAP_EXPERIENCE_LINK: Static.RouteLink = {
  uid: 'route:experience',
  icon: 'briefcase',
  value: '/experience',
  label: 'go to experience page',
};

const ROUTE_MAP_EXPERIENCE: Static.RouteItem = {
  uid: 'route:experience',
  type: 'route',
  path: '/experience',
  meta: ROUTE_MAP_EXPERIENCE_META,
  link: ROUTE_MAP_EXPERIENCE_LINK,
};

export { ROUTE_MAP_EXPERIENCE_META, ROUTE_MAP_EXPERIENCE_LINK, ROUTE_MAP_EXPERIENCE };
