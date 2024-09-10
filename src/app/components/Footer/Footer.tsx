import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { FooterGroup } from './FooterGroup';

export type FooterProps = {};

export type FooterFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: FooterProps;
  element: 'footer';
  excluded: 'children';
  elements: {
    Group: typeof FooterGroup;
  };
}>;

export const Footer = Component<FooterFactory>(
  ({ component: Component = 'footer', className, ...props }, ref) => (
    <Component {...props} ref={ref} className={clsx('v2-footer', className)}>
      <Footer.Group
        group="Portfolio"
        items={[
          {
            to: '/',
            label: 'Home',
          },
          {
            to: '/about',
            label: 'About',
          },
          {
            to: '/stack',
            label: 'Stack',
          },
          {
            to: '/projects',
            label: 'Projects',
          },
          {
            to: '/sandbox',
            label: 'Sandbox',
          },
          {
            to: '/contact',
            label: 'Contact',
          },
        ]}
      />
    </Component>
  )
);

Footer.Group = FooterGroup;
Footer.displayName = '@v2/Footer';
