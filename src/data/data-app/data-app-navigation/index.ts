const DATA_APP_MAP_NAVIGATION_SIDEMENU_LINKS = {
  experience: { label: 'Experience', icon: 'document', value: '/experience' },
  projects: { label: 'Projects', icon: 'document', value: '/projects' },
  toolbox: { label: 'Toolbox', icon: 'document', value: '/toolbox' },
  sandbox: { label: 'Sandbox', icon: 'document', value: '/sandbox' },
  contact: { label: 'Contact', icon: 'document', value: '/contact' },
};

const DATA_APP_NAVIGATION_HEADER_LINKS = {
  home: { label: 'Home', icon: 'document', value: '/' },
};

const APP_MAP_FOOTER_CONFIG_LINKS_GROUP_1 = {
  id: 'footer:group:1',
  icon: 'document',
  label: 'Portfolio',
  items: [
    { id: 'item:1', label: 'Experience' },
    { id: 'item:2', label: 'Projects' },
    { id: 'item:3', label: 'Toolbox' },
    { id: 'item:4', label: 'Sandbox' },
    { id: 'item:5', label: 'Contact' },
  ],
};

const APP_MAP_FOOTER_CONFIG_LINKS_GROUP_2 = {
  id: 'footer:group:2',
  icon: 'document',
  label: 'Sandbox',
  items: [
    { id: 'item:1' },
    { id: 'item:2' },
    { id: 'item:3' },
    { id: 'item:4' },
    { id: 'item:5' },
    { id: 'item:6' },
  ],
};

const SOCIAL = {
  label: {
    x: 'X',
    github: 'Github',
    linkedin: 'LinkedIn',
    instagram: 'Instagram',
    codesandbox: 'CodeSandbox',
  },
  logo: {
    x: 'logo-x',
    github: 'logo-github',
    linkedin: 'logo-linkedin',
    instagram: 'logo-instagram',
    codesandbox: 'logo-codesandbox',
  },
  url: {
    x: 'https://x.com/thunkworks',
    github: 'https://github.com/lenharta',
    linkedin: 'https://www.linkedin.com/in/andrew-lenhart-06a1192a7/',
    instagram: 'https://www.instagram.com/andrewdlenhart/',
    codesandbox: 'https://codesandbox.io/u/lenharta',
  },
};

const APP_MAP_FOOTER_CONFIG_LINKS_GROUP_3 = {
  id: 'footer:group:3',
  icon: 'document',
  label: 'Social',
  items: [
    { id: 'item:1' },
    { id: 'item:2' },
    { id: 'item:3' },
    { id: 'item:4' },
    { id: 'item:5' },
    { id: 'item:6' },
  ],
};

const APP_MAP_FOOTER_CONFIG_LINKS = {
  group1: APP_MAP_FOOTER_CONFIG_LINKS_GROUP_1,
  group2: APP_MAP_FOOTER_CONFIG_LINKS_GROUP_2,
  group3: APP_MAP_FOOTER_CONFIG_LINKS_GROUP_3,
};

const APP_MAP_FOOTER_CONFIG = {
  links: {
    group1: {
      id: '',
    },
  },
};

const APP_MAP_FOOTER_LINK_GROUP_CONFIG_PAGES = {};

const APP_MAP_FOOTER_LINK_GROUPS = {
  pages: {
    label: 'Portfolio',
    items: {
      home: { label: 'Home', icon: 'document', value: '/' },
      experience: { label: 'Experience', icon: 'document', value: '/experience' },
      projects: { label: 'Projects', icon: 'document', value: '/projects' },
      toolbox: { label: 'Toolbox', icon: 'document', value: '/toolbox' },
      sandbox: { label: 'Sandbox', icon: 'document', value: '/sandbox' },
      contact: { label: 'Contact', icon: 'document', value: '/contact' },
    },
  },
};
