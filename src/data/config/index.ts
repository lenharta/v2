import { IconProp } from "@/types";

export type DataConfigRouteObj = IconProp & { value: string; label: string };
export type DataConfigSocialKey = 'npm' | 'github' | 'twitter' | 'linkedin' | 'codesandbox';
export type DataConfigSocialUrlLookup = Record<DataConfigSocialKey, string>;
export type DataConfigSocialLogoLookup = Record<DataConfigSocialKey, IconProp['icon']>;

export const DATA_CONFIG_NAVBAR_LINKS: DataConfigRouteObj[] = [
  { value: '/', label: 'Home', icon: 'home' },
  { value: '/experience', label: 'Experience', icon: 'briefcase' },
  { value: '/projects', label: 'Projects', icon: 'code' },
  { value: '/contact', label: 'Contact', icon: 'mention' },
  { value: '/toolbox', label: 'Toolbox', icon: 'wrench' },
  { value: '/sandbox', label: 'Sandbox', icon: 'boxMultiple' },
];

export const DATA_CONFIG_MENU_LINKS: DataConfigRouteObj[] = [
  { value: '/experience', label: 'Experience', icon: 'briefcase' },
  { value: '/projects', label: 'Projects', icon: 'code' },
  { value: '/contact', label: 'Contact', icon: 'mention' },
  { value: '/toolbox', label: 'Toolbox', icon: 'wrench' },
  { value: '/sandbox', label: 'Sandbox', icon: 'boxMultiple' },
]

export const DATA_CONFIG_SOCIAL_URLS: DataConfigSocialUrlLookup = {
  npm: 'https://www.npmjs.com/~thunkworks',
  github: 'https://github.com/lenharta',
  twitter: 'https://twitter.com/thunkworks',
  linkedin: 'www.linkedin.com/in/andrew-lenhart-06a1192a7',
  codesandbox: 'https://codesandbox.io/u/lenharta',
};

export const DATA_CONFIG_SOCIAL_LOGOS: DataConfigSocialLogoLookup = {
  npm: 'logo_npm',
  github: 'logo_github',
  twitter: 'logo_twitter',
  linkedin: 'logo_linkedin',
  codesandbox: 'logo_codesandbox',
};