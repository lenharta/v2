import { Theme } from '@/types';

const THEME_VALUE_MAP: {
  dir: Theme.Dir[];
  mode: Theme.Mode[];
  accent: Theme.Color[];
} = {
  dir: ['ltr', 'rtl'],
  mode: ['light', 'dark', 'dim'],
  accent: [
    'red',
    'orange',
    'yellow',
    'green',
    'mint',
    'teal',
    'cyan',
    'blue',
    'indigo',
    'purple',
    'pink',
    'brown',
  ],
};

const THEME_ICON_MAP: Theme.IconMap = {
  dir: {
    ltr: { name: 'text-left', surface: 'base' },
    rtl: { name: 'text-right', surface: 'base' },
  },
  mode: {
    dim: { name: 'mode-dim', surface: 'base' },
    dark: { name: 'mode-dark', surface: 'base' },
    light: { name: 'mode-light', surface: 'base' },
  },
  accent: {
    red: { name: 'shape-circle', surface: 'red' },
    orange: { name: 'shape-circle', surface: 'orange' },
    yellow: { name: 'shape-circle', surface: 'yellow' },
    green: { name: 'shape-circle', surface: 'green' },
    mint: { name: 'shape-circle', surface: 'mint' },
    teal: { name: 'shape-circle', surface: 'teal' },
    cyan: { name: 'shape-circle', surface: 'cyan' },
    blue: { name: 'shape-circle', surface: 'blue' },
    indigo: { name: 'shape-circle', surface: 'indigo' },
    purple: { name: 'shape-circle', surface: 'purple' },
    pink: { name: 'shape-circle', surface: 'pink' },
    brown: { name: 'shape-circle', surface: 'brown' },
  },
};

export { THEME_VALUE_MAP, THEME_ICON_MAP };
