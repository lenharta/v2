import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';

export type FooterProps = {};

export type FooterFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: FooterProps;
  element: 'footer';
  excluded: 'children';
}>;

export const Footer = Component<FooterFactory>(
  ({ component: Component = 'footer', className, ...props }) => (
    <Component {...props} className={clsx('v2-footer', className)}>
      <span>Footer</span>
    </Component>
  )
);

Footer.displayName = '@v2/Footer';
