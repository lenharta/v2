import { App } from "@types";

const ROUTE_CONFIG_HOME: App.RouteConfig = {
  id: 'route:home',
  icon: 'route-icon-home',
  location: { pathname: '/home', search: '', hash: '' },
  metadata: { title: 'Home', description: 'The home page for the second iteration of my development portfolio.' },
};

const ROUTE_CONFIG_ABOUT: App.RouteConfig = {
  id: 'route:about',
  icon: 'route-icon-about',
  location: { pathname: '/about', search: '', hash: '' },
  metadata: { title: 'About', description: 'The about page for the second iteration of my development portfolio.' },
};

const ROUTE_CONFIG_ARTICLES: App.RouteConfig = {
  id: 'route:articles',
  icon: 'route-icon-articles',
  location: { pathname: '/articles', search: '', hash: '' },
  metadata: { title: 'Articles', description: 'The articles page for the second iteration of my development portfolio.' },
};

const ROUTE_CONFIG_DESIGN: App.RouteConfig = {
  id: 'route:design',
  icon: 'route-icon-design',
  location: { pathname: '/design', search: '', hash: '' },
  metadata: { title: 'Design', description: 'The design page for the second iteration of my development portfolio.' },
};

const ROUTE_CONFIG_PROJECTS: App.RouteConfig = {
  id: 'route:projects',
  icon: 'route-icon-projects',
  location: { pathname: '/projects', search: '', hash: '' },
  metadata: { title: 'Projects', description: 'The projects page for the second iteration of my development portfolio.' },
};

const ROUTE_CONFIG_WORKSPACE: App.RouteConfig = {
  id: 'route:workspace',
  icon: 'route-icon-workspace',
  location: { pathname: '/workspace', search: '', hash: '' },
  metadata: { title: 'Workspace', description: 'The workspace page for the second iteration of my development portfolio.' },
};

const ROUTE_CONFIG_SANDBOX: App.RouteConfig = {
  id: 'route:sandbox',
  icon: 'route-icon-sandbox',
  location: { pathname: '/sandbox', search: '', hash: '' },
  metadata: { title: 'Sandbox', description: 'The sandbox page for the second iteration of my development portfolio.' },
};

const ROUTE_CONFIG_SETTINGS: App.RouteConfig = {
  id: 'route:settings',
  icon: 'route-icon-settings',
  location: { pathname: '/settings', search: '', hash: '' },
  metadata: { title: 'Settings', description: 'The settings page for the second iteration of my development portfolio.' },
};

const ROUTE_CONFIG_STACK: App.RouteConfig = {
  id: 'route:stack',
  icon: 'route-icon-stack',
  location: { pathname: '/stack', search: '', hash: '' },
  metadata: { title: 'Stack', description: 'The stack page for the second iteration of my development portfolio.' },
};

export const ROUTE_CONFIG = {
  HOME: ROUTE_CONFIG_HOME,
  ABOUT: ROUTE_CONFIG_ABOUT,
  ARTICLES: ROUTE_CONFIG_ARTICLES,
  DESIGN: ROUTE_CONFIG_DESIGN,
  PROJECTS: ROUTE_CONFIG_PROJECTS,
  WORKSPACE: ROUTE_CONFIG_WORKSPACE,
  SANDBOX: ROUTE_CONFIG_SANDBOX,
  SETTINGS: ROUTE_CONFIG_SETTINGS,
  STACK: ROUTE_CONFIG_STACK,
} as const;