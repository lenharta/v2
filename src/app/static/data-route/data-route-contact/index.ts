import { Static } from '@/types';

const ROUTE_MAP_CONTACT_META: Static.RouteMeta = {
  tags: 'route/page/contact/social/email/phone',
  title: 'Andrew Lenhart | Contact',
  description: 'Contact page description will be placed here.',
};

const ROUTE_MAP_CONTACT_LINK: Static.RouteLink = {
  uid: 'route:contact',
  icon: 'at',
  value: '/contact',
  label: 'go to contact page',
};

const ROUTE_MAP_CONTACT: Static.RouteItem = {
  uid: 'route:contact',
  type: 'route',
  path: '/contact',
  meta: ROUTE_MAP_CONTACT_META,
  link: ROUTE_MAP_CONTACT_LINK,
};

export { ROUTE_MAP_CONTACT_META, ROUTE_MAP_CONTACT_LINK, ROUTE_MAP_CONTACT };
