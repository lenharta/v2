import { Static } from '@/types';

const ROUTE_MAP_PROJECTS_META: Static.RouteMeta = {
  tags: 'route/page/project/app/demo/showcase',
  title: 'Andrew Lenhart | Projects',
  description: 'Projects page description will be placed here.',
};

const ROUTE_MAP_PROJECTS_LINK: Static.RouteLink = {
  uid: 'route:projects',
  icon: 'easel',
  value: '/projects',
  label: 'go to projects page',
};

const ROUTE_MAP_PROJECTS: Static.RouteItem = {
  uid: 'route:projects',
  type: 'route',
  path: '/projects',
  meta: ROUTE_MAP_PROJECTS_META,
  link: ROUTE_MAP_PROJECTS_LINK,
};

export { ROUTE_MAP_PROJECTS_META, ROUTE_MAP_PROJECTS_LINK, ROUTE_MAP_PROJECTS };
