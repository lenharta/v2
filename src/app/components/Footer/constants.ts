import { META, ROUTE } from '@/app';

const FOOTER_CONNECT_MENU = {
  group: {
    id: 'footer_group:connect',
    label: 'Connect',
    value: 'connect',
  },
  items: [
    {
      id: 'footer_item:connect:github',
      value: META.social.link.github,
      label: META.social.site.github,
    },
    {
      id: 'footer_item:connect:linkedin',
      value: META.social.link.linkedin,
      label: META.social.site.linkedin,
    },
    {
      id: 'footer_item:connect:x',
      value: META.social.link.x,
      label: META.social.site.x,
    },
    {
      id: 'footer_item:connect:npm',
      value: META.social.link.npm,
      label: META.social.site.npm,
    },
    {
      id: 'footer_item:connect:codesandbox',
      value: META.social.link.codesandbox,
      label: META.social.site.codesandbox,
    },
    {
      id: 'footer_item:connect:stackoverflow',
      value: META.social.link.stackoverflow,
      label: META.social.site.stackoverflow,
    },
  ],
};

const FOOTER_PROJECT_MENU = {
  group: {
    id: 'footer_group:project',
    label: 'Project',
    value: 'project',
  },
  items: [
    {
      id: 'footer_item:project:home',
      label: ROUTE.label.home,
      value: ROUTE.link.home,
    },
    {
      id: 'footer_item:project:about',
      label: ROUTE.label.about,
      value: ROUTE.link.about,
    },
    {
      id: 'footer_item:project:stack',
      label: ROUTE.label.stack,
      value: ROUTE.link.stack,
    },
    {
      id: 'footer_item:project:projects',
      label: ROUTE.label.projects,
      value: ROUTE.link.projects,
    },
    {
      id: 'footer_item:project:articles',
      label: ROUTE.label.articles,
      value: ROUTE.link.articles,
    },
    {
      id: 'footer_item:project:elements',
      label: ROUTE.label.elements,
      value: ROUTE.link.elements,
    },
    {
      id: 'footer_item:project:settings',
      label: ROUTE.label.settings,
      value: ROUTE.link.settings,
    },
  ],
};

export { FOOTER_CONNECT_MENU, FOOTER_PROJECT_MENU };
