import { Static } from '@/types';

const ROUTE_MAP_SANDBOX_META: Static.RouteMeta = {
  tags: 'route/page/demo/library/tokens/components/site/story/stories/examples',
  title: 'Andrew Lenhart | Sandbox',
  description: 'Sandbox page description will be placed here.',
};

const ROUTE_MAP_SANDBOX_LINK: Static.RouteLink = {
  uid: 'route:sandbox',
  icon: 'box-seam',
  value: '/sandbox',
  label: 'go to sandbox page',
};

const ROUTE_MAP_SANDBOX: Static.RouteItem = {
  uid: 'route:sandbox',
  type: 'route',
  path: '/sandbox',
  meta: ROUTE_MAP_SANDBOX_META,
  link: ROUTE_MAP_SANDBOX_LINK,
};

export { ROUTE_MAP_SANDBOX_META, ROUTE_MAP_SANDBOX_LINK, ROUTE_MAP_SANDBOX };
