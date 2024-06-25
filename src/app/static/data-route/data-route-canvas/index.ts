import { Static } from '@/types';

const ROUTE_MAP_CANVAS_META = {
  tags: 'route/page/canvas/construction/devleopment',
  title: 'Andrew Lenhart | Canvas',
  description: 'Canvas page description will be placed here.',
};

const ROUTE_MAP_CANVAS_LINK: Static.RouteLink = {
  uid: 'route:canvas',
  icon: 'kanban',
  value: '/canvas',
  label: 'go to canvas page',
};

const ROUTE_MAP_CANVAS: Static.RouteItem = {
  uid: 'route:canvas',
  type: 'route',
  path: '/canvas',
  meta: ROUTE_MAP_CANVAS_META,
  link: ROUTE_MAP_CANVAS_LINK,
};

export { ROUTE_MAP_CANVAS_META, ROUTE_MAP_CANVAS_LINK, ROUTE_MAP_CANVAS };
