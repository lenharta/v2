import { App } from '@/types';

const META_LOCATION_NY: App.MetaLocation = {
  state: { name: 'New York', code: 'NY' },
  city: 'New York',
};

const META_LOCATION_NC: App.MetaLocation = {
  state: { name: 'North Carolina', code: 'NC' },
  city: 'Winston-Salem',
};

const META_SOCIAL_KEY = {
  x: 'x',
  npm: 'npm',
  github: 'github',
  linkedin: 'linkedin',
  codesandbox: 'codesandbox',
  stackoverflow: 'stackoverflow',
};

const META_SOCIAL_NAME = {
  x: 'Twitter/X',
  npm: 'NPM Registry',
  github: 'GitHub',
  linkedin: 'LinkedIn',
  codesandbox: 'CodeSandbox',
  stackoverflow: 'Stack Overflow',
};

const META_SOCIAL_USER = {
  x: '@thunkworks',
  npm: '@thunkworks',
  github: '@lenharta',
  linkedin: '@andrew-lenhart',
  codesandbox: '@lenharta',
  stackoverflow: '@andrew-lenhart',
};

const META_SOCIAL_LINK = {
  x: 'https://x.com/thunkworks',
  npm: 'https://www.npmjs.com/~thunkworks',
  github: 'https://github.com/lenharta',
  linkedin: 'https://www.linkedin.com/in/andrew-lenhart-06a1192a7/',
  codesandbox: 'https://codesandbox.io/u/lenharta',
  stackoverflow: 'https://stackoverflow.com/users/17825807/andrew-lenhart',
};

const META_SOCIAL_SITE = {
  x: { key: META_SOCIAL_KEY.x, name: META_SOCIAL_NAME.x },
  npm: { key: META_SOCIAL_KEY.npm, name: META_SOCIAL_NAME.npm },
  github: { key: META_SOCIAL_KEY.github, name: META_SOCIAL_NAME.github },
  linkedin: { key: META_SOCIAL_KEY.linkedin, name: META_SOCIAL_NAME.linkedin },
  codesandbox: { key: META_SOCIAL_KEY.codesandbox, name: META_SOCIAL_NAME.codesandbox },
  stackoverflow: { key: META_SOCIAL_KEY.stackoverflow, name: META_SOCIAL_NAME.stackoverflow },
};

const META_ACCOUNT_X = {
  site: META_SOCIAL_SITE.x,
  link: META_SOCIAL_LINK.x,
  user: META_SOCIAL_USER.x,
};
const META_ACCOUNT_NPM = {
  site: META_SOCIAL_SITE.npm,
  link: META_SOCIAL_LINK.npm,
  user: META_SOCIAL_USER.npm,
};
const META_ACCOUNT_GITHUB = {
  site: META_SOCIAL_SITE.github,
  link: META_SOCIAL_LINK.github,
  user: META_SOCIAL_USER.github,
};
const META_ACCOUNT_LINKEDIN = {
  site: META_SOCIAL_SITE.linkedin,
  link: META_SOCIAL_LINK.linkedin,
  user: META_SOCIAL_USER.linkedin,
};
const META_ACCOUNT_CODESANDBOX = {
  site: META_SOCIAL_SITE.codesandbox,
  link: META_SOCIAL_LINK.codesandbox,
  user: META_SOCIAL_USER.codesandbox,
};
const META_ACCOUNT_STACKOVERFLOW = {
  site: META_SOCIAL_SITE.stackoverflow,
  link: META_SOCIAL_LINK.stackoverflow,
  user: META_SOCIAL_USER.stackoverflow,
};

const META_MAP = {
  name: 'Andrew Lenhart',
  site: 'https://andrewlenhart.com',
  link: 'https://github.com/lenharta/v2',
  desc: 'The current iteration of my developer portfolio',
  title: 'portfolio@v2',
  email: 'andrew.code21@gmail.com',
  social: {},
  locations: [META_LOCATION_NY, META_LOCATION_NC],
};

export {
  META_LOCATION_NY,
  META_LOCATION_NC,
  META_ACCOUNT_X,
  META_ACCOUNT_NPM,
  META_ACCOUNT_GITHUB,
  META_ACCOUNT_LINKEDIN,
  META_ACCOUNT_CODESANDBOX,
  META_ACCOUNT_STACKOVERFLOW,
  META_SOCIAL_KEY,
  META_SOCIAL_NAME,
  META_SOCIAL_USER,
  META_SOCIAL_LINK,
  META_SOCIAL_SITE,
  META_MAP,
};
