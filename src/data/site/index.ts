import { ICON } from '@/core';
import { Site } from '@/types';

export const DATA_SITE_LINKS: Site.LinkItem[] = [
  { value: '/', label: 'Home', icon: 'home' },
  { value: '/experience', label: 'Experience', icon: 'briefcase' },
  { value: '/projects', label: 'Projects', icon: 'code' },
  { value: '/contact', label: 'Contact', icon: 'mention' },
  { value: '/toolbox', label: 'Toolbox', icon: 'wrench' },
  { value: '/sandbox', label: 'Sandbox', icon: 'boxMultiple' },
];

export const DATA_SITE_MENU_LINKS: Site.LinkItem[] = [
  { value: '/', label: 'Home', icon: 'home' },
  { value: '/experience', label: 'Experience', icon: 'briefcase' },
  { value: '/projects', label: 'Projects', icon: 'code' },
  { value: '/toolbox', label: 'Toolbox', icon: 'wrench' },
  { value: '/sandbox', label: 'Sandbox', icon: 'boxMultiple' },
  { value: '/contact', label: 'Contact', icon: 'mention' },
];

export const LOOKUP_SITE_SOCIAL_URLS: Partial<Record<Site.SocialKey, string>> = {
  npm: 'https://www.npmjs.com/~thunkworks',
  github: 'https://github.com/lenharta',
  twitter: 'https://twitter.com/thunkworks',
  linkedin: 'www.linkedin.com/in/andrew-lenhart-06a1192a7',
  codesandbox: 'https://codesandbox.io/u/lenharta',
};

export const LOOKUP_SITE_SOCIAL_LOGOS: Partial<Record<Site.SocialKey, ICON>> = {
  npm: 'logo_npm',
  github: 'logo_github',
  twitter: 'logo_twitter',
  linkedin: 'logo_linkedin',
  codesandbox: 'logo_codesandbox',
};

export const DATA_MATTER_ROUTES: Site.FrontMatterObj[] = [
  {
    icon: 'document',
    tags: ['route', 'page'],
    search: 'route/page/about/work/experience/history/cv/resume',
    title: 'Experience',
    url: '/experience',
  },
  {
    icon: 'document',
    tags: ['route', 'page'],
    search: 'route/page/home/index/overview/landing/about/contact/preview',
    title: 'Home',
    url: '/',
  },
  {
    icon: 'document',
    tags: ['route', 'page'],
    search:
      'route/page/settings/control/preferences/theme/accent/accessibility/language/mode/direction',
    title: 'Preferences',
    url: '/preferences',
  },
];

export const DATA_MATTER: Site.FrontMatterObj[] = [...DATA_MATTER_ROUTES];
