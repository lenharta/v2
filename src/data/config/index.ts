import { ICON } from "@/core";
import { Store } from "@/types";

export type SiteNavLinkObj = { icon?: ICON | undefined; value: string; label: string };
export type SiteSocialKey = 'npm' | 'github' | 'twitter' | 'linkedin' | 'codesandbox';

export const dataSiteNavLinks: SiteNavLinkObj[] = [
  { value: '/', label: 'Home', icon: 'home' },
  { value: '/experience', label: 'Experience', icon: 'briefcase' },
  { value: '/projects', label: 'Projects', icon: 'code' },
  { value: '/contact', label: 'Contact', icon: 'mention' },
  { value: '/toolbox', label: 'Toolbox', icon: 'wrench' },
  { value: '/sandbox', label: 'Sandbox', icon: 'boxMultiple' },
];

export const dataSiteMenuLinks: SiteNavLinkObj[] = [
  { value: '/experience', label: 'Experience', icon: 'briefcase' },
  { value: '/projects', label: 'Projects', icon: 'code' },
  { value: '/contact', label: 'Contact', icon: 'mention' },
  { value: '/toolbox', label: 'Toolbox', icon: 'wrench' },
  { value: '/sandbox', label: 'Sandbox', icon: 'boxMultiple' },
]

export const lookupSocialUrl: Record<SiteSocialKey, string> = {
  npm: 'https://www.npmjs.com/~thunkworks',
  github: 'https://github.com/lenharta',
  twitter: 'https://twitter.com/thunkworks',
  linkedin: 'www.linkedin.com/in/andrew-lenhart-06a1192a7',
  codesandbox: 'https://codesandbox.io/u/lenharta',
};

export const lookupSocialLogo: Record<SiteSocialKey, ICON> = {
  npm: 'logo_npm',
  github: 'logo_github',
  twitter: 'logo_twitter',
  linkedin: 'logo_linkedin',
  codesandbox: 'logo_codesandbox',
};

export const lookupDir: Record<Store.Dir, Store.Dir> = {
  ltr: 'ltr',
  rtl: 'rtl',
};

export const lookupMode = {
  dim: 'dim',
  dark: 'dark',
  light: 'light',
};

export const lookupAccent = {
  red: 'red',
  orange: 'orange',
  amber: 'amber',
  yellow: 'yellow',
  lime: 'lime',
  green: 'green',
  emerald: 'emerald',
  teal: 'teal',
  cyan: 'cyan',
  sky: 'sky',
  blue: 'blue',
  indigo: 'indigo',
  violet: 'violet',
  purple: 'purple',
  fuchsia: 'fuchsia',
  pink: 'pink',
  rose: 'rose',
};

export const lookupAvatar = {
  person: 'person',
  robot: 'robot',
};

export const lookupLangByCode: Record<Store.LanguageCode, Store.Language> = {
  ar: { name: 'arabic', code: 'ar' },
  fr: { name: 'french', code: 'fr' },
  de: { name: 'german', code: 'de' },
  es: { name: 'spanish', code: 'es' },
  en: { name: 'english', code: 'en' },
  ja: { name: 'japanese', code: 'ja' },
};

export const lookupLangByName: Record<Store.LanguageName, Store.Language> = {
  arabic: { name: 'arabic', code: 'ar' },
  french: { name: 'french', code: 'fr' },
  german: { name: 'german', code: 'de' },
  spanish: { name: 'spanish', code: 'es' },
  english: { name: 'english', code: 'en' },
  japanese: { name: 'japanese', code: 'ja' },
};

export const lookupStorageLocale: Record<Store.StorageKey, Store.StorageLocale> = {
  local: 'localStorage',
  session: 'sessionStorage',
};

export const lookupRootAttribute: Record<Store.AttributeKey, string> = {
  dir: 'data-prefers-dir',
  mode: 'data-prefers-mode',
  accent: 'data-prefers-accent',
};