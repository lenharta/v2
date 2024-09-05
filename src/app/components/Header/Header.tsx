import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';

export type HeaderProps = {};

export type HeaderFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: HeaderProps;
  element: 'header';
  excluded: 'children';
}>;

export const Header = Component<HeaderFactory>(
  ({ component: Component = 'header', className, ...props }, ref) => (
    <Component {...props} ref={ref} className={clsx('v2-header', className)}>
      <span>Header</span>
    </Component>
  )
);

Header.displayName = '@v2/Header';
