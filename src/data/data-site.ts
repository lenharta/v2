import { Site } from '@/types';

const SITE_ROUTE_MAP_HOME: Site.RouteMap = {
  index: true,
  id: 'home',
  path: '/home',
  icon: 'home',
};

const SITE_ROUTE_MAP_EXPERIENCE: Site.RouteMap = {
  id: 'experience',
  path: '/experience',
  icon: 'work',
};

const SITE_ROUTE_MAP_PROJECTS: Site.RouteMap = {
  id: 'projects',
  path: '/projects',
  icon: 'project',
};

const SITE_ROUTE_MAP_SANDBOX: Site.RouteMap = {
  id: 'sandbox',
  path: '/sandbox',
  icon: 'stack',
  routes: [
    { id: 'accordion', icon: 'stack', path: '/sandbox/accordion', index: true },
    { id: 'action', icon: 'stack', path: '/sandbox/action' },
    { id: 'box', icon: 'stack', path: '/sandbox/box' },
    { id: 'button', icon: 'stack', path: '/sandbox/button' },
    { id: 'checkbox', icon: 'stack', path: '/sandbox/checkbox' },
    { id: 'control', icon: 'stack', path: '/sandbox/control' },
    { id: 'disclosure', icon: 'stack', path: '/sandbox/disclosure' },
    { id: 'divider', icon: 'stack', path: '/sandbox/divider' },
    { id: 'floating', icon: 'stack', path: '/sandbox/floating' },
    { id: 'icon', icon: 'stack', path: '/sandbox/icon' },
    { id: 'image', icon: 'stack', path: '/sandbox/image' },
    { id: 'label', icon: 'stack', path: '/sandbox/label' },
    { id: 'navlink', icon: 'stack', path: '/sandbox/navlink' },
    { id: 'radio', icon: 'stack', path: '/sandbox/radio' },
    { id: 'spacing', icon: 'stack', path: '/sandbox/spacing' },
    { id: 'stack', icon: 'stack', path: '/sandbox/stack' },
    { id: 'tabs', icon: 'stack', path: '/sandbox/tabs' },
    { id: 'text', icon: 'stack', path: '/sandbox/text' },
    { id: 'textbox', icon: 'stack', path: '/sandbox/textbox' },
    { id: 'tile', icon: 'stack', path: '/sandbox/tile' },
    { id: 'title', icon: 'stack', path: '/sandbox/title' },
    { id: 'toggle', icon: 'stack', path: '/sandbox/toggle' },
    { id: 'transition', icon: 'stack', path: '/sandbox/transition' },
    { id: 'unstyled', icon: 'stack', path: '/sandbox/unstyled' },
  ],
};

const SITE_ROUTE_MAP_SETTINGS: Site.RouteMap = {
  id: 'settings',
  path: '/settings',
  icon: 'settings',
};

const SITE_ROUTE_MAP_TOOLBOX: Site.RouteMap = {
  id: 'toolbox',
  path: '/toolbox',
  icon: 'toolbox',
};

const SITE_ROUTE_MAP_CONTACT: Site.RouteMap = {
  id: 'contact',
  path: '/contact',
  icon: 'ampersand',
};

const SITE_ROUTE_MAP = {
  home: SITE_ROUTE_MAP_HOME,
  experience: SITE_ROUTE_MAP_EXPERIENCE,
  projects: SITE_ROUTE_MAP_PROJECTS,
  sandbox: SITE_ROUTE_MAP_SANDBOX,
  settings: SITE_ROUTE_MAP_TOOLBOX,
  toolbox: SITE_ROUTE_MAP_SETTINGS,
  contact: SITE_ROUTE_MAP_CONTACT,
};

export {
  SITE_ROUTE_MAP_HOME,
  SITE_ROUTE_MAP_CONTACT,
  SITE_ROUTE_MAP_TOOLBOX,
  SITE_ROUTE_MAP_SANDBOX,
  SITE_ROUTE_MAP_PROJECTS,
  SITE_ROUTE_MAP_SETTINGS,
  SITE_ROUTE_MAP_EXPERIENCE,
  SITE_ROUTE_MAP,
};
