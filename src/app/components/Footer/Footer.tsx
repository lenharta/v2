import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { FooterGroup } from './FooterGroup';
import { META } from '@/data';

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
      <div className="v2-footer-layout">
        <div className="v2-footer-menu">
          <Footer.Group
            group="Portfolio"
            dividerProps={{ variant: 'accent-text' }}
            items={[
              {
                value: '/',
                label: 'Home',
              },
              {
                value: '/about',
                label: 'About',
              },
              {
                value: '/stack',
                label: 'Stack',
              },
              {
                value: '/projects',
                label: 'Projects',
              },
              {
                value: '/sandbox',
                label: 'Sandbox',
              },
              {
                value: '/contact',
                label: 'Contact',
              },
            ]}
          />
          <Footer.Group
            group="Social"
            dividerProps={{ variant: 'accent-text' }}
            items={[
              {
                type: 'external',
                value: META.social.npmjs.profile.url,
                label: META.social.npmjs.item.label,
              },
              {
                type: 'external',
                value: META.social.github.profile.url,
                label: META.social.github.item.label,
              },
              {
                type: 'external',
                value: META.social.twitter.profile.url,
                label: META.social.twitter.item.label,
              },
              {
                type: 'external',
                value: META.social.linkedin.profile.url,
                label: META.social.linkedin.item.label,
              },
              {
                type: 'external',
                value: META.social.codesandbox.profile.url,
                label: META.social.codesandbox.item.label,
              },
              {
                type: 'external',
                value: META.social.stackoverflow.profile.url,
                label: META.social.stackoverflow.item.label,
              },
            ]}
          />
        </div>
        <div></div>
      </div>
    </Component>
  )
);

Footer.Group = FooterGroup;
Footer.displayName = '@v2/Footer';
