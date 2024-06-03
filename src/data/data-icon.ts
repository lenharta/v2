const DATA_ICON_MAP_THEME_MODE = {
  light: 'modeLight',
  dark: 'modeDark',
  dim: 'modeDim',
} as const;

const DATA_ICON_MAP_WRITING_MODE = {
  ltr: 'ltr',
  rtl: 'rtl',
} as const;

const DATA_ICON_MAP_ROUTES = {
  home: 'home',
  experience: 'work',
  projects: 'project',
  sandbox: 'stack',
  settings: 'settings',
  toolbox: 'toolbox',
} as const;

export { DATA_ICON_MAP_THEME_MODE, DATA_ICON_MAP_WRITING_MODE, DATA_ICON_MAP_ROUTES };
