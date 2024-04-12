import { Site } from '@/types';

export const dataMatterRoutes: Site.FrontMatterObj[] = [
  {
    icon: 'document',
    tags: ['route', 'page'],
    search: 'route/page/about/work/experience/history/cv/resume',
    title: 'Experience',
    url: '/experience',
  },
  {
    icon: 'document',
    tags: ['route', 'page'],
    search: 'route/page/home/index/overview/landing/about/contact/preview',
    title: 'Home',
    url: '/',
  },
  {
    icon: 'document',
    tags: ['route', 'page'],
    search:
      'route/page/settings/control/preferences/theme/accent/accessibility/language/mode/direction',
    title: 'Preferences',
    url: '/preferences',
  },
];

export const dataMatter: Site.FrontMatterObj[] = [...dataMatterRoutes];
