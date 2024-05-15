import { ACCENT, App, DIR, LANGUAGE, MODE } from '@/types';

const globalAttributes = {
  accent: 'data-prefers-accent',
  mode: 'data-prefers-mode',
  dir: 'data-prefers-dir',
};

const initialStore: App.Store = {
  nonce: () => '',
  accent: ACCENT.blue,
  lang: LANGUAGE.en,
  mode: MODE.dark,
  dir: DIR.ltr,
};

export { initialStore, globalAttributes };
