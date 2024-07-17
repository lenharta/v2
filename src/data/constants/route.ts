import { App } from '@types';

const ROUTE_KEY_DATA: App.RouteMap['keys'] = [
  'home',
  'about',
  'stack',
  'projects',
  'articles',
  'elements',
  'settings',
];

const ROUTE_KEY_MAP: App.RouteMap['key'] = {
  home: 'home',
  about: 'about',
  stack: 'stack',
  projects: 'projects',
  articles: 'articles',
  elements: 'elements',
  settings: 'settings',
};

const ROUTE_LINK_MAP: App.RouteMap['link'] = {
  home: '/',
  about: '/about',
  stack: '/stack',
  projects: '/projects',
  articles: '/articles',
  elements: '/elements',
  settings: '/settings',
};

const ROUTE_LABEL_MAP: App.RouteMap['label'] = {
  home: 'Home',
  about: 'About',
  stack: 'Stack',
  projects: 'Projects',
  articles: 'Articles',
  elements: 'Elements',
  settings: 'Settings',
};

const ROUTE: App.RouteMap = {
  key: ROUTE_KEY_MAP,
  keys: ROUTE_KEY_DATA,
  link: ROUTE_LINK_MAP,
  label: ROUTE_LABEL_MAP,
};

export { ROUTE, ROUTE_KEY_MAP, ROUTE_KEY_DATA, ROUTE_LINK_MAP, ROUTE_LABEL_MAP };
