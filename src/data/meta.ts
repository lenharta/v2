type SocialPlatform = 'x' | 'npm' | 'github' | 'linkedin' | 'codesandbox' | 'stackoverflow';

export const META_SOCIAL_VALUE: Record<SocialPlatform, string> = {
  x: 'x',
  npm: 'npm',
  github: 'github',
  linkedin: 'linkedin',
  codesandbox: 'codesandbox',
  stackoverflow: 'stackoverflow',
};

export const META_SOCIAL_LABEL: Record<SocialPlatform, string> = {
  x: 'X',
  npm: 'NPM',
  github: 'GitHub',
  linkedin: 'LinkedIn',
  codesandbox: 'Code Sandbox',
  stackoverflow: 'Stack Overflow',
};

export const SOCIAL_LINKS_BASE: Record<SocialPlatform, string> = {
  x: 'https://www.x.com/',
  npm: 'https://www.npmjs.com/',
  github: 'https://www.github.com/',
  linkedin: 'https://www.linkedin.com/',
  codesandbox: 'https://www.codesandbox.io/',
  stackoverflow: 'https://www.stackoverflow.com/',
};

export const SOCIAL_LINKS_USER: Record<SocialPlatform, string> = {
  x: 'https://www.x.com/thunkworks',
  npm: 'https://www.npmjs.com/~thunkworks',
  github: 'https://www.github.com/lenharta',
  linkedin: 'https://www.linkedin.com/in/andrew-lenhart-06a1192a7/',
  codesandbox: 'https://www.codesandbox.io/u/lenharta/',
  stackoverflow: 'https://www.stackoverflow.com/users/17825807/andrew-lenhart/',
};

export const META_SOCIAL_X = {
  user: 'thunkworks',
  href: 'https://www.x.com/thunkworks/',
  value: 'x',
  label: 'X',
};

export const META_SOCIAL_NPM = {
  user: 'thunkworks',
  href: 'https://www.npmjs.com/~thunkworks/',
  value: 'npm',
  label: 'NPM',
};

export const META_SOCIAL_GITHUB = {
  user: '',
  href: 'https://www.github.com/lenharta/',
  label: 'GitHub',
  value: 'github',

  profile: {
    name: 'lenharta',
    href: 'https://www.github.com/lenharta/',
  },
  platform: {
    name: 'GitHub',
    href: 'https://www.github.com/',
  },
};

export const META_SOCIAL_LINKEDIN = {
  value: 'linkedin',
  platform: {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/',
  },
  profile: {
    name: 'andrew-lenhart',
    href: 'https://www.linkedin.com/in/andrew-lenhart-06a1192a7/',
  },
};

export const META_SOCIAL_CODESANDBOX = {
  value: 'codesandbox',
  profile: {
    name: 'lenharta',
    href: 'https://www.codesandbox.io/u/lenharta',
  },
  platform: {
    name: 'CodeSandbox',
    href: 'https://www.codesandbox.io/',
  },
};

export const META_SOCIAL_STACKOVERFLOW = {
  value: 'stackoverflow',
  profile: {
    name: 'andrew-lenhart',
    href: 'https://www.stackoverflow.com/users/17825807/andrew-lenhart',
  },
  platform: {
    name: 'Stack Overflow',
    href: 'https://www.stackoverflow.com/',
  },
};

const META_LOCATION_NY = {
  city: { name: 'New York', code: '10017' },
  state: { name: 'New York', code: 'NY' },
};

const META_LOCATION_NC = {
  city: { name: 'Greensboro', code: '27403' },
  state: { name: 'North Carolina', code: 'NC' },
};

const META_NAME = {
  last: 'Lenhart',
  first: 'Andrew',
  middle: 'D.',
};

const META = {
  title: 'Andrew Lenhart | Software Engineer',
  repository: 'https://github.com/lenharta/v2',
  description: 'The current iteration of my developer portfolio',
  locations: {
    ny: META_LOCATION_NY,
    nc: META_LOCATION_NC,
  },
  owner: {
    name: { first: 'Andrew', last: 'Lenhart' },
    email: 'andrew.code21@gmail.com',
  },
  social: {
    // x:
    // npm:
    // github:
    // linkedin:
    // codesandbox:
    // stackoverflow:

    codesandbox: {
      value: 'codesandbox',
      label: 'CodeSandbox',
      url: {
        base: 'https://www.codesandbox.io/',
        user: 'https://www.codesandbox.io/u/lenharta',
      },
    },

    github: {
      value: 'github',
      label: 'GitHub',
      url: {
        base: 'https://www.github.com/',
        user: 'https://www.github.com/lenharta',
      },
    },

    linkedin: {
      value: 'linkedin',
      label: 'LinkedIn',
      url: {
        base: 'https://www.linkedin.com/',
        user: 'https://www.linkedin.com/in/andrew-lenhart-06a1192a7/',
      },
    },

    npm: {
      value: 'npm',
      label: 'NPM',
      url: {
        base: 'https://www.npmjs.com/',
        user: 'https://www.npmjs.com/~thunkworks',
      },
    },

    stackoverflow: {
      value: 'stackoverflow',
      label: 'Stack Overflow',
      url: {
        base: 'https://www.stackoverflow.com',
        user: 'https://www.stackoverflow.com/users/17825807/andrew-lenhart',
      },
    },

    x: {
      value: 'x',
      label: 'X',
      url: {
        base: 'https://www.x.com/',
        user: 'https://www.x.com/thunkworks',
      },
    },
  },
};
