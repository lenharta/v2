import * as React from 'react';
import { FooterMeta } from './FooterMeta';
import { FooterMenu } from './FooterMenu';
import { META, ROUTE } from '@/app/constants';

interface FooterProps {}

type FooterFactory = React.FC<FooterProps> & {
  Meta: typeof FooterMeta;
  Menu: typeof FooterMenu;
};

const FOOTER_CONNECT_MENU = {
  group: {
    key: 'footer_group:connect',
    label: 'Connect',
    value: 'connect',
  },
  items: [
    {
      key: 'footer_item:connect:github',
      value: META.social.link.github,
      label: META.social.site.github,
    },
    {
      key: 'footer_item:connect:linkedin',
      value: META.social.link.linkedin,
      label: META.social.site.linkedin,
    },
    {
      key: 'footer_item:connect:x',
      value: META.social.link.x,
      label: META.social.site.x,
    },
    {
      key: 'footer_item:connect:npm',
      value: META.social.link.npm,
      label: META.social.site.npm,
    },
    {
      key: 'footer_item:connect:codesandbox',
      value: META.social.link.codesandbox,
      label: META.social.site.codesandbox,
    },
    {
      key: 'footer_item:connect:stackoverflow',
      value: META.social.link.stackoverflow,
      label: META.social.site.stackoverflow,
    },
  ],
};

const FOOTER_PAGES_MENU = {
  group: {
    key: 'footer_group:pages',
    label: 'Pages',
    value: 'pages',
  },
  items: [
    {
      key: 'footer_item:pages:home',
      label: ROUTE.label.home,
      value: ROUTE.link.home,
    },
    {
      key: 'footer_item:pages:about',
      label: ROUTE.label.about,
      value: ROUTE.link.about,
    },
    {
      key: 'footer_item:pages:stack',
      label: ROUTE.label.stack,
      value: ROUTE.link.stack,
    },
    {
      key: 'footer_item:pages:projects',
      label: ROUTE.label.projects,
      value: ROUTE.link.projects,
    },
    {
      key: 'footer_item:pages:articles',
      label: ROUTE.label.articles,
      value: ROUTE.link.articles,
    },
    {
      key: 'footer_item:pages:elements',
      label: ROUTE.label.elements,
      value: ROUTE.link.elements,
    },
    {
      key: 'footer_item:pages:settings',
      label: ROUTE.label.settings,
      value: ROUTE.link.settings,
    },
  ],
};

const Footer: FooterFactory = ({}) => {
  return (
    <footer className="v2-footer">
      <div className="v2-footer-layout">
        <Footer.Meta />
        <Footer.Menu data={[FOOTER_PAGES_MENU, FOOTER_CONNECT_MENU]} />
      </div>
    </footer>
  );
};

Footer.Meta = FooterMeta;
Footer.Menu = FooterMenu;
Footer.displayName = '@v2/Footer';
export { Footer, type FooterProps, type FooterFactory };
