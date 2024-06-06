import { Theme } from '@/types';
import { IconProps } from '@/core';
import { SITE_ROUTE_MAP } from './data-site';

const ICON_MAP_THEME_MODE: Record<Theme.Mode, IconProps['name']> = {
  light: 'modeLight',
  dark: 'modeDark',
  dim: 'modeDim',
};

const ICON_MAP_WRITING_MODE: Record<Theme.Dir, IconProps['name']> = {
  ltr: 'ltr',
  rtl: 'rtl',
};

const ICON_MAP_ROUTES: Record<keyof typeof SITE_ROUTE_MAP, IconProps['name']> = {
  home: SITE_ROUTE_MAP['home']['icon'],
  experience: SITE_ROUTE_MAP['experience']['icon'],
  projects: SITE_ROUTE_MAP['projects']['icon'],
  sandbox: SITE_ROUTE_MAP['sandbox']['icon'],
  settings: SITE_ROUTE_MAP['settings']['icon'],
  toolbox: SITE_ROUTE_MAP['toolbox']['icon'],
  contact: SITE_ROUTE_MAP['contact']['icon'],
};

export { ICON_MAP_THEME_MODE, ICON_MAP_WRITING_MODE, ICON_MAP_ROUTES };
