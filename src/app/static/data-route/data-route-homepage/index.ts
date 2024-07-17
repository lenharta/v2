import { Static } from '@types';

const ROUTE_MAP_HOMEPAGE_META: Static.RouteMeta = {
  tags: 'route/page/home/homepage/overview/index/intro',
  title: 'Andrew Lenhart | Home',
  description: 'Home page description will be placed here.',
};

const ROUTE_MAP_HOMEPAGE_LINK: Static.RouteLink = {
  uid: 'route:homepage',
  icon: 'house-door',
  value: '/',
  label: 'go to homepage page',
};

const ROUTE_MAP_HOMEPAGE: Static.RouteItem = {
  uid: 'route:homepage',
  type: 'route',
  path: '/',
  meta: ROUTE_MAP_HOMEPAGE_META,
  link: ROUTE_MAP_HOMEPAGE_LINK,
};

export { ROUTE_MAP_HOMEPAGE_META, ROUTE_MAP_HOMEPAGE_LINK, ROUTE_MAP_HOMEPAGE };
