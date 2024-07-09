import { App } from '@/types';

const META: App.MetaMap = {
  owner: {
    title: '@v2',
    email: { user: 'andrew.code21', provider: '@gmail.com' },
    name: { last: 'Lenhart', first: 'Andrew', middle: 'D' },
    desc: 'The current iteration of my developer portfolio',
    repo: 'https://github.com/lenharta/v2',
    site: 'https://andrewlenhart.dev',
  },
  location: {
    nc: {
      key: 'nc',
      city: { name: 'Winston-Salem', code: '999999' },
      state: { name: 'North Carolina', code: 'NC' },
    },
    ny: {
      key: 'ny',
      city: { name: 'New York', code: '999999' },
      state: { name: 'New York', code: 'NY' },
    },
  },
  social: {
    keys: ['x', 'npm', 'github', 'linkedin', 'codesandbox', 'stackoverflow'],
    key: {
      x: 'x',
      npm: 'npm',
      github: 'github',
      linkedin: 'linkedin',
      codesandbox: 'codesandbox',
      stackoverflow: 'stackoverflow',
    },
    site: {
      x: 'Twitter/X',
      npm: 'NPM Registry',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      codesandbox: 'CodeSandbox',
      stackoverflow: 'Stack Overflow',
    },
    user: {
      x: '@thunkworks',
      npm: '@thunkworks',
      github: '@lenharta',
      linkedin: '@andrew-lenhart',
      codesandbox: '@lenharta',
      stackoverflow: '@andrew-lenhart',
    },
    link: {
      x: 'https://x.com/thunkworks',
      npm: 'https://www.npmjs.com/~thunkworks',
      github: 'https://github.com/lenharta',
      linkedin: 'https://www.linkedin.com/in/andrew-lenhart-06a1192a7/',
      codesandbox: 'https://codesandbox.io/u/lenharta',
      stackoverflow: 'https://stackoverflow.com/users/17825807/andrew-lenhart',
    },
  },
};

export { META };
