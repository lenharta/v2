import { ICON } from '@/core';
import { Site } from '@/types';
import React from 'react';

export const DATA_SITE_LINKS: Site.LinkItem[] = [
  { value: '/', label: 'Home', icon: 'home' },
  { value: '/experience', label: 'Experience', icon: 'briefcase' },
  { value: '/projects', label: 'Projects', icon: 'code' },
  { value: '/contact', label: 'Contact', icon: 'mention' },
  { value: '/toolbox', label: 'Toolbox', icon: 'wrench' },
  { value: '/sandbox', label: 'Sandbox', icon: 'boxMultiple' },
];

export const DATA_SITE_MENU_LINKS: Site.LinkItem[] = [
  { value: '/', label: 'Home', icon: 'home' },
  { value: '/experience', label: 'Experience', icon: 'briefcase' },
  { value: '/projects', label: 'Projects', icon: 'code' },
  { value: '/toolbox', label: 'Toolbox', icon: 'wrench' },
  { value: '/sandbox', label: 'Sandbox', icon: 'boxMultiple' },
  { value: '/contact', label: 'Contact', icon: 'mention' },
];

export const LOOKUP_SITE_SOCIAL_URLS: Partial<Record<Site.SocialKey, string>> = {
  npm: 'https://www.npmjs.com/~thunkworks',
  github: 'https://github.com/lenharta',
  twitter: 'https://twitter.com/thunkworks',
  linkedin: 'www.linkedin.com/in/andrew-lenhart-06a1192a7',
  codesandbox: 'https://codesandbox.io/u/lenharta',
};

export const LOOKUP_SITE_SOCIAL_LOGOS: Partial<Record<Site.SocialKey, ICON>> = {
  npm: 'logo_npm',
  github: 'logo_github',
  twitter: 'logo_twitter',
  linkedin: 'logo_linkedin',
  codesandbox: 'logo_codesandbox',
};

interface SearchItem {
  id: string;
  url: string;
  tags: string[];
  icon: ICON;
  title: string;
  search: string;
  description: string;
}

export const DATA_SEARCH_ITEMS: SearchItem[] = [
  {
    id: 'a94ue23xlp7v8hsk',
    url: '/',
    tags: ['route', 'page'],
    icon: 'document',
    title: 'Overview',
    search: 'route/routes/page/pages/home/overview/summary/index/info/welcome/intro/introduction',
    description: 'Some route description here.',
  },
  {
    id: 'jsoda324lmlnk234',
    url: '/contact',
    tags: ['route', 'page'],
    icon: 'document',
    title: 'Contact',
    search: 'route/routes/page/pages/contact/phone/email/location/email/social/links/card/address',
    description: 'Some route description here.',
  },
  {
    id: 'lmlnk2bensa32434',
    url: '/toolbox',
    tags: ['route', 'page'],
    icon: 'document',
    title: 'Toolbox',
    search: `route/routes/page/pages/toolbox/tech/technologies/languages/frameworks/framework/tests/testing/stack/javascript/typescript/front-end/next/node/nodejs/react/css/html/scss/sass/jest`,
    description: 'Some route description here.',
  },
  {
    id: 'fdaoidfn203nlk22',
    url: '/sandbox',
    tags: ['route', 'page'],
    icon: 'document',
    title: 'Sandbox',
    search: `route/routes/page/pages/sandbox/ui/components/library/design/design system/core/colors/user interface/interface/portfolio`,
    description: 'Some route description here.',
  },
  {
    id: 'so213sdhei92dsik',
    url: '/experience',
    tags: ['route', 'page'],
    icon: 'document',
    title: 'Experience',
    search: `route/routes/page/pages/resume/cv/work/history/application/previous/employment/position/positions/employers`,
    description: 'Some route description here.',
  },
  {
    id: 'jd8su2n3049kend8',
    url: '/projects',
    tags: ['route', 'page'],
    icon: 'document',
    title: 'Projects',
    search: `route/routes/page/work/github/examples/technologies/demo/technology/practice/responsive/animation/development/ui/ux/design/interactive/showcase/apps/mobile`,
    description: 'Some route description here.',
  },
  {
    id: 'sdu32kjb209fdaks',
    url: '/demo',
    tags: ['route', 'page'],
    icon: 'document',
    title: 'Demo',
    search: 'route/routes/page/pages/demo/test/work/construction/temporary',
    description: 'Some route description here.',
  },
];

export const DATA_MATTER_ROUTES: Site.FrontMatterObj[] = [
  {
    url: '/experience',
    icon: 'document',
    tags: ['route', 'page'],
    title: 'Experience',
    search: `route/page/about/work/experience/history/cv/resume/intro/career/job/workplace`,
    description: `View a brief introduction of my work experience and download my resume.`,
  },
  {
    url: '/',
    icon: 'document',
    tags: ['route', 'page'],
    title: 'Home',
    search: `route/page/home/index/overview/landing/about/contact/preview/top/intro/introduction`,
    description: `Andrew Lenhart, Front-end Software Engineer.`,
  },
  {
    url: '/preferences',
    icon: 'document',
    tags: ['route', 'page'],
    title: 'Preferences',
    search: `route/page/settings/control/preferences/theme/accent/accessibility/language/mode/direction/writing`,
    description: `Adjust settings for theme mode, accent color, languages, and more.`,
  },
  {
    url: '/sandbox',
    icon: 'document',
    tags: ['route', 'page'],
    title: 'Sandbox',
    search: `route/page/sandbox/components/gallery/preview/demo/controls/elements/site/story/stories/tokens/design/colors`,
    description: `A component gallery for this websites elements.`,
  },
  {
    url: '/toolbox',
    icon: 'document',
    tags: ['route', 'page'],
    title: 'Toolbox',
    search: `route/page/sandbox/tech/technologies/stack/languages/code/react/typescript/javascript/programming/portfolio`,
    description: `Complete directory of current and past technologies used.`,
  },
  {
    url: '/projects',
    icon: 'document',
    tags: ['route', 'page'],
    title: 'Projects',
    search: `route/page/projects/demo/work/app/apps/gallery/portfolio/development/code/react/typescript/javascript/programming`,
    description: `Explore a gallery of my development projects.`,
  },
  {
    url: '/contact',
    icon: 'document',
    tags: ['route', 'page'],
    title: 'Contact',
    search: `route/page/contact/email/phone/card/website/social/media/location/personal/work/url/github/code/sandbox/facebook/instagram/twitter/x/linkedin/codepen`,
    description: `Looking for a developer? Let's get in touch.`,
  },
];

export const DATA_MATTER: Site.FrontMatterObj[] = [...DATA_MATTER_ROUTES];
