export enum NAME {
  LAST = 'Andrew',
  FIRST = 'Lenhart',
}

export enum EMAIL {
  PRIMARY = 'andrew.code21@gmail.com',
  SECONDARY = 'andrew@thunkworks.dev',
}

export enum SITE {
  URL = 'https://andrewlenhart.dev',
  DESC = 'The current iteration of my development portfolio showcasing my expertise and experience in frontend development, specifically highlighting proficiency in Typescript, React.js, CSS, and SCSS.',
  TITLE = 'Andrew Lenhart | Portfolio v2',
}

export enum REPO {
  URL = 'https://github.com/lenharta/v2',
  DESC = 'The current iteration of my development portfolio showcasing my expertise and experience in frontend development, specifically highlighting proficiency in Typescript, React.js, CSS, and SCSS.',
  TITLE = 'v2',
}

export enum CITY {
  PRIMARY = 'Greensboro',
  SECONDARY = 'New York',
}

export enum STATE {
  PRIMARY = 'NC',
  SECONDARY = 'NY',
}

export enum SOCIAL {
  NPMJS = 'npmjs',
  GITHUB = 'github',
  TWITTER = 'twitter',
  LINKEDIN = 'linkedin',
  CODESANDBOX = 'codesandbox',
  STACKOVERFLOW = 'stackoverflow',
};

export enum SOCIAL_LABEL {
  NPMJS = 'NPM',
  GITHUB = 'GitHub',
  TWITTER = 'Twitter',
  LINKEDIN = 'LinkedIn',
  CODESANDBOX = 'Code Sandbox',
  STACKOVERFLOW = 'Stack Overflow',
};

export enum SOCIAL_USERNAME {
  NPMJS = 'thunkworks',
  GITHUB = 'lenharta',
  TWITTER = 'thunkworks',
  LINKEDIN = 'andrew-lenhart',
  CODESANDBOX = 'lenharta',
  STACKOVERFLOW = 'andrew-lenhart',
}

export enum SOCIAL_DOMAIN {
  NPMJS = 'https://www.npmjs.com/',
  GITHUB = 'https://www.github.com/',
  TWITTER = 'https://www.x.com/',
  LINKEDIN = 'https://www.linkedin.com/',
  CODESANDBOX = 'https://www.codesandbox.io/',
  STACKOVERFLOW = 'https://www.stackoverflow.com/',
}

export enum SOCIAL_PROFILE {
  NPMJS = 'https://www.npmjs.com/~thunkworks/',
  GITHUB = 'https://www.github.com/lenharta/',
  TWITTER = 'https://www.x.com/thunkworks/',
  LINKEDIN = 'https://www.linkedin.com/in/andrew-lenhart-06a1192a7/',
  CODESANDBOX = 'https://www.codesandbox.io/u/lenharta/',
  STACKOVERFLOW = 'https://www.stackoverflow.com/users/17825807/andrew-lenhart/',
}

export const META = {
  site: { url: SITE.URL, desc: SITE.DESC, title: SITE.TITLE },
  repo: { url: REPO.URL, desc: REPO.DESC, title: REPO.TITLE },
  name: { last: NAME.LAST, first: NAME.LAST },
  email: {
    primary: EMAIL.PRIMARY,
    secondary: EMAIL.SECONDARY,
  },
  location: {
    primary: { city: CITY.PRIMARY, state: STATE.PRIMARY },
    secondary: { city: CITY.SECONDARY, state: STATE.SECONDARY },
  },
  social: {
    npmjs: {
      item: { value: SOCIAL.NPMJS, label: SOCIAL_LABEL.NPMJS },
      user: { name: SOCIAL_USERNAME.NPMJS },
      domain: { url: SOCIAL_DOMAIN.NPMJS },
      profile: { url: SOCIAL_PROFILE.NPMJS },
    },
    github: {
      item: { value: SOCIAL.GITHUB, label: SOCIAL_LABEL.GITHUB },
      user: { name: SOCIAL_USERNAME.GITHUB },
      domain: { url: SOCIAL_DOMAIN.GITHUB },
      profile: { url: SOCIAL_PROFILE.GITHUB },
    },
    twitter: {
      item: { value: SOCIAL.TWITTER, label: SOCIAL_LABEL.TWITTER },
      user: { name: SOCIAL_USERNAME.TWITTER },
      domain: { url: SOCIAL_DOMAIN.TWITTER },
      profile: { url: SOCIAL_PROFILE.TWITTER },
    },
    linkedin: {
      item: { value: SOCIAL.LINKEDIN, label: SOCIAL_LABEL.LINKEDIN },
      user: { name: SOCIAL_USERNAME.LINKEDIN },
      domain: { url: SOCIAL_DOMAIN.LINKEDIN },
      profile: { url: SOCIAL_PROFILE.LINKEDIN },
    },
    codesandbox: {
      item: { value: SOCIAL.CODESANDBOX, label: SOCIAL_LABEL.CODESANDBOX },
      user: { name: SOCIAL_USERNAME.CODESANDBOX },
      domain: { url: SOCIAL_DOMAIN.CODESANDBOX },
      profile: { url: SOCIAL_PROFILE.CODESANDBOX },
    },
    stackoverflow: {
      item: { value: SOCIAL.STACKOVERFLOW, label: SOCIAL_LABEL.STACKOVERFLOW },
      user: { name: SOCIAL_USERNAME.STACKOVERFLOW },
      domain: { url: SOCIAL_DOMAIN.STACKOVERFLOW },
      profile: { url: SOCIAL_PROFILE.STACKOVERFLOW },
    },
  },
};