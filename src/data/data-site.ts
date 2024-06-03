const SITE_ROUTE_MAP_LANDING = {
  path: '/',
  label: 'landing',
  tunnel: ['/'],
  children: [],
} as const;

const SITE_ROUTE_MAP_CONTACT = {
  path: '/contact',
  label: 'contact',
  tunnel: ['contact'],
  children: [],
} as const;

const SITE_ROUTE_MAP_TOOLBOX = {
  path: '/toolbox',
  label: 'toolbox',
  tunnel: ['toolbox'],
  children: [],
} as const;

const SITE_ROUTE_MAP_PROFILE = {
  path: '/profile',
  label: 'profile',
  tunnel: ['profile'],
  children: [],
} as const;

const SITE_ROUTE_MAP_SANDBOX = {
  path: '/sandbox',
  label: 'sandbox',
  tunnel: ['sandbox'],
  children: [
    { path: '/sandbox/accordion', tunnel: ['/sandbox', '/accordion'] },
    { path: '/sandbox/action', tunnel: ['/sandbox', '/action'] },
    { path: '/sandbox/box', tunnel: ['/sandbox', '/box'] },
    { path: '/sandbox/button', tunnel: ['/sandbox', '/button'] },
    { path: '/sandbox/checkbox', tunnel: ['/sandbox', '/checkbox'] },
    { path: '/sandbox/control', tunnel: ['/sandbox', '/control'] },
    { path: '/sandbox/disclosure', tunnel: ['/sandbox', '/disclosure'] },
    { path: '/sandbox/divider', tunnel: ['/sandbox', '/divider'] },
    { path: '/sandbox/floating', tunnel: ['/sandbox', '/floating'] },
    { path: '/sandbox/icon', tunnel: ['/sandbox', '/icon'] },
    { path: '/sandbox/image', tunnel: ['/sandbox', '/image'] },
    { path: '/sandbox/label', tunnel: ['/sandbox', '/label'] },
    { path: '/sandbox/navlink', tunnel: ['/sandbox', '/navlink'] },
    { path: '/sandbox/radio', tunnel: ['/sandbox', '/radio'] },
    { path: '/sandbox/stack', tunnel: ['/sandbox', '/stack'] },
    { path: '/sandbox/tabs', tunnel: ['/sandbox', '/tabs'] },
    { path: '/sandbox/text', tunnel: ['/sandbox', '/text'] },
    { path: '/sandbox/textbox', tunnel: ['/sandbox', '/textbox'] },
    { path: '/sandbox/tile', tunnel: ['/sandbox', '/tile'] },
    { path: '/sandbox/title', tunnel: ['/sandbox', '/title'] },
    { path: '/sandbox/toggle', tunnel: ['/sandbox', '/toggle'] },
    { path: '/sandbox/transition', tunnel: ['/sandbox', '/transition'] },
    { path: '/sandbox/unstyled', tunnel: ['/sandbox', '/unstyled'] },
    { path: '/sandbox/visuallyhidden', tunnel: ['/sandbox', '/visuallyhidden'] },
  ],
} as const;

const SITE_ROUTE_MAP_PROJECTS = {
  path: '/projects',
  label: 'projects',
  tunnel: ['projects'],
  children: [],
} as const;

const SITE_ROUTE_MAP_SETTINGS = {
  path: '/settings',
  label: 'settings',
  tunnel: ['settings'],
  children: [],
} as const;

const SITE_ROUTE_MAP_EXPERIENCE = {
  path: '/experience',
  label: 'experience',
  tunnel: ['experience'],
  children: [],
} as const;

const SITE_ROUTE_MAP = {
  landing: SITE_ROUTE_MAP_LANDING,
  contact: SITE_ROUTE_MAP_CONTACT,
  toolbox: SITE_ROUTE_MAP_TOOLBOX,
  profile: SITE_ROUTE_MAP_PROFILE,
  sandbox: SITE_ROUTE_MAP_SANDBOX,
  projects: SITE_ROUTE_MAP_PROJECTS,
  settings: SITE_ROUTE_MAP_SETTINGS,
  experience: SITE_ROUTE_MAP_EXPERIENCE,
} as const;

export {
  SITE_ROUTE_MAP_LANDING,
  SITE_ROUTE_MAP_CONTACT,
  SITE_ROUTE_MAP_TOOLBOX,
  SITE_ROUTE_MAP_PROFILE,
  SITE_ROUTE_MAP_SANDBOX,
  SITE_ROUTE_MAP_PROJECTS,
  SITE_ROUTE_MAP_SETTINGS,
  SITE_ROUTE_MAP_EXPERIENCE,
  SITE_ROUTE_MAP,
};
