export enum ROUTES {
  home = '/',
  canvas = '/canvas',
  toolbox = '/toolbox',
  sandbox = '/sandbox',
  contact = '/contact',
  projects = '/projects',
  settings = '/settings',
  experience = '/experience',
}

export enum ROUTES_SANDBOX {
  root = '/sandbox',
  icon = '/sandbox/icon',
  tile = '/sandbox/tile',
  text = '/sandbox/text',
  title = '/sandbox/title',
  label = '/sandbox/label',
  action = '/sandbox/action',
  button = '/sandbox/button',
  divider = '/sandbox/divider',
  floating = '/sandbox/floating',
}

export declare namespace App {
  export type RouteKey = `route:${keyof typeof ROUTES | keyof typeof ROUTES_SANDBOX}`;
  export type TunnelKey = `tunnel:${keyof typeof ROUTES | keyof typeof ROUTES_SANDBOX}`;
}
