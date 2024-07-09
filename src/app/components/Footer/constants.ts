import { Core } from '@/types';

export const FOOTER_META = {
  name: { first: 'Andrew', last: 'Lenhart' },
  email: { user: 'andrew.code21', provider: '@gmail.com' },
  social: { github: { site: 'GitHub', user: '@lenharta', link: 'https://github.com/lenharta' } },
  location: { state: { code: 'NC', name: 'North Carolina' }, city: 'Winston-Salem' },
};

export const FOOTER_PAGE_LINKS: Core.LinkGroup = {
  group: {
    key: 'footer_group:pages',
    label: 'Pages',
    value: 'pages',
  },
  items: [
    {
      key: 'footer_item:home',
      label: 'Home',
      value: '/',
    },
    {
      key: 'footer_item:about',
      label: 'About',
      value: '/about',
    },
    {
      key: 'footer_item:stack',
      label: 'Stack',
      value: '/stack',
    },
    {
      key: 'footer_item:projects',
      label: 'Projects',
      value: '/projects',
    },
    {
      key: 'footer_item:articless',
      label: 'Articles',
      value: '/articles',
    },
    {
      key: 'footer_item:elements',
      label: 'Elements',
      value: '/elements',
    },
  ],
};
