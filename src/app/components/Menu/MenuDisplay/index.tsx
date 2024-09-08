import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';

export type MenuDisplayProps = {};

export type MenuFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: MenuDisplayProps;
  element: 'aside';
  excluded: 'children';
}>;

export const MenuDisplay = Component<MenuFactory>(({ className, ...props }, ref) => (
  <aside {...props} ref={ref} className={clsx('v2-menu-display', className)}>
    <span>Menu Display</span>
  </aside>
));

MenuDisplay.displayName = '@v2/Menu.Display';
