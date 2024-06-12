import { SideMenuNavItem, SideMenuSelectGroup } from '../sidemenu-types';

const css = {
  root: 'v2-sidemenu',
  nav: 'v2-sidemenu-nav',
  option: 'v2-sidemenu-option',
  select: 'v2-sidemenu-select',
  target: 'v2-sidemenu-target',
  panel: 'v2-sidemenu-panel',
  link: 'v2-sidemenu-link',
};

const selectors = {
  item: { key: '[data-side-action-item]', prop: { 'data-side-action-item': true } },
  group: { key: '[data-side-action-group]', prop: { 'data-side-action-group': true } },
  panel: { key: '[data-side-action-panel]', prop: { 'data-side-action-panel': true } },
  option: { key: '[data-side-action-option]', prop: { 'data-side-action-option': true } },
};

const SIDEMENU_NAV_DATA: SideMenuNavItem[] = [
  { label: 'experience', value: '/experience', icon: 'briefcase' },
  { label: 'projects', value: '/projects', icon: 'box' },
  { label: 'toolbox', value: '/toolbox', icon: 'code-slash' },
  { label: 'sandbox', value: '/sandbox', icon: 'layers' },
  { label: 'settings', value: '/settings', icon: 'gear' },
];

const SIDEMENU_SELECT_DATA: SideMenuSelectGroup[] = [
  {
    group: 'accent',
    items: [
      { label: 'Red', value: 'red', icon: 'shape-circle', color: 'var(--c-red-A800)' },
      { label: 'Orange', value: 'orange', icon: 'shape-circle', color: 'var(--c-orange-A800)' },
      { label: 'Yellow', value: 'yellow', icon: 'shape-circle', color: 'var(--c-yellow-A800)' },
      { label: 'Green', value: 'green', icon: 'shape-circle', color: 'var(--c-green-A800)' },
      { label: 'Mint', value: 'mint', icon: 'shape-circle', color: 'var(--c-mint-A800)' },
      { label: 'Teal', value: 'teal', icon: 'shape-circle', color: 'var(--c-teal-A800)' },
      { label: 'Cyan', value: 'cyan', icon: 'shape-circle', color: 'var(--c-cyan-A800)' },
      { label: 'Blue', value: 'blue', icon: 'shape-circle', color: 'var(--c-blue-A800)' },
      { label: 'Indigo', value: 'indigo', icon: 'shape-circle', color: 'var(--c-indigo-A800)' },
      { label: 'Purple', value: 'purple', icon: 'shape-circle', color: 'var(--c-purple-A800)' },
      { label: 'Pink', value: 'pink', icon: 'shape-circle', color: 'var(--c-pink-A800)' },
      { label: 'Brown', value: 'brown', icon: 'shape-circle', color: 'var(--c-brown-A800)' },
    ],
  },
  {
    group: 'mode',
    items: [
      { label: 'Light', value: 'light', icon: 'mode-light' },
      { label: 'Dim', value: 'dim', icon: 'mode-dim' },
      { label: 'Dark', value: 'dark', icon: 'mode-dark' },
    ],
  },
  {
    group: 'dir',
    items: [
      { label: 'Left to Right', value: 'ltr', icon: 'text-left' },
      { label: 'Right to Left', value: 'rtl', icon: 'text-right' },
    ],
  },
];

export { css, selectors, SIDEMENU_NAV_DATA, SIDEMENU_SELECT_DATA };
