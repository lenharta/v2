import { Icons } from '@/core';
import {
  App,
  GlobalAccentColors,
  GlobalLanguageCodes,
  GlobalWritingModes,
  GlobalThemeModes,
  GlobalThemeKey,
} from '@/types';

const initialStore: App.Store = {
  nonce: () => '',
  accent: GlobalAccentColors.blue,
  lang: GlobalLanguageCodes.en,
  mode: GlobalThemeModes.dark,
  dir: GlobalWritingModes.ltr,
};

const lookupThemeAttributes: Record<keyof typeof GlobalThemeKey, string> = {
  [GlobalThemeKey.accent]: 'data-prefers-accent',
  [GlobalThemeKey.mode]: 'data-prefers-mode',
  [GlobalThemeKey.dir]: 'data-prefers-dir',
};

const lookupThemeModeIcon: Record<keyof typeof GlobalThemeModes, keyof typeof Icons> = {
  [GlobalThemeModes.light]: 'modeLight',
  [GlobalThemeModes.dark]: 'modeDark',
  [GlobalThemeModes.dim]: 'modeDim',
};

const lookupWritingModeIcon: Record<keyof typeof GlobalWritingModes, keyof typeof Icons> = {
  [GlobalWritingModes.ltr]: 'ltr',
  [GlobalWritingModes.rtl]: 'rtl',
};

export { initialStore, lookupThemeAttributes, lookupThemeModeIcon, lookupWritingModeIcon };
