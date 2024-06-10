import { SideMenuCSS, SideMenuNavItem, SideMenuSelectGroup } from './SideMenu.types';

const SIDE_MENU_CSS: Partial<SideMenuCSS> = {
  root: 'v2-sidemenu',
  panel: 'v2-sidemenu-panel',
  option: 'v2-sidemenu-option',
  select: 'v2-sidemenu-select',
  target: 'v2-sidemenu-target',
};

const SIDE_MENU_SELECTORS = {
  item: { key: '[data-side-action-item]', prop: { 'data-side-action-item': true } },
  group: { key: '[data-side-action-group]', prop: { 'data-side-action-group': true } },
  panel: { key: '[data-side-action-panel]', prop: { 'data-side-action-panel': true } },
  option: { key: '[data-side-action-option]', prop: { 'data-side-action-option': true } },
};

const SIDE_MENU_NAVIGATION_LINKS: SideMenuNavItem[] = [
  { label: 'experience', value: '/experience', icon: 'briefcase' },
  { label: 'projects', value: '/projects', icon: 'box' },
  { label: 'toolbox', value: '/toolbox', icon: 'code-slash' },
  { label: 'sandbox', value: '/sandbox', icon: 'layers' },
  { label: 'settings', value: '/settings', icon: 'gear' },
];

const SIDE_MENU_SELECT_DATA: SideMenuSelectGroup[] = [
  {
    group: 'accent',
    items: [
      { label: 'Red', value: 'red', icon: 'shape-circle', color: 'var(--c-red)' },
      { label: 'Orange', value: 'orange', icon: 'shape-circle', color: 'var(--c-orange)' },
      { label: 'Yellow', value: 'yellow', icon: 'shape-circle', color: 'var(--c-yellow)' },
      { label: 'Green', value: 'green', icon: 'shape-circle', color: 'var(--c-green)' },
      { label: 'Mint', value: 'mint', icon: 'shape-circle', color: 'var(--c-mint)' },
      { label: 'Teal', value: 'teal', icon: 'shape-circle', color: 'var(--c-teal)' },
      { label: 'Cyan', value: 'cyan', icon: 'shape-circle', color: 'var(--c-cyan)' },
      { label: 'Blue', value: 'blue', icon: 'shape-circle', color: 'var(--c-blue)' },
      { label: 'Indigo', value: 'indigo', icon: 'shape-circle', color: 'var(--c-indigo)' },
      { label: 'Purple', value: 'purple', icon: 'shape-circle', color: 'var(--c-purple)' },
      { label: 'Pink', value: 'pink', icon: 'shape-circle', color: 'var(--c-pink)' },
      { label: 'Brown', value: 'brown', icon: 'shape-circle', color: 'var(--c-brown)' },
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

export { SIDE_MENU_CSS, SIDE_MENU_SELECTORS, SIDE_MENU_NAVIGATION_LINKS, SIDE_MENU_SELECT_DATA };
