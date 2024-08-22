import { App } from '@types';

const TECH: Record<App.Tech, App.Tech> = {
  typescript: 'typescript',
  javascript: 'javascript',
  react: 'react',
  nextjs: 'nextjs',
  html: 'html',
  css: 'css',
  sass: 'sass',
  nodejs: 'nodejs',
  expressjs: 'expressjs',
  vuejs: 'vuejs',
  angular: 'angular',
  vite: 'vite',
  vitest: 'vitest',
  tailwindcss: 'tailwindcss',
  git: 'git',
  gitlab: 'gitlab',
  github: 'github',
  mocha: 'mocha',
  jest: 'jest',
  gulp: 'gulp',
  markdown: 'markdown',
  mdx: 'mdx',
  storybook: 'storybook',
  stylex: 'stylex',
  mysql: 'mysql',
  graphql: 'graphql',
  webpack: 'webpack',
  babel: 'babel',
  jenkins: 'jenkins',
  docker: 'docker',
  kubernetes: 'kubernetes',
  figma: 'figma',
  jquery: 'jquery',
  contentful: 'contentful',
  styledcomponents: 'styledcomponents',
  notion: 'notion',
  adobexd: 'adobexd',
  jira: 'jira',
  miro: 'miro',
  firebase: 'firebase',
  gsap: 'gsap',
  vscode: 'vscode',
  axios: 'axios',
  redux: 'redux',
  xstate: 'xstate',
  jotai: 'jotai',
  gatsby: 'gatsby',
};

const TECH_SITE: Record<App.Tech, string> = {
  typescript: 'https://www.typescriptlang.org/docs/',
  javascript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  react: 'https://reactjs.org/docs/getting-started.html',
  nextjs: 'https://nextjs.org/docs',
  html: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  css: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  sass: 'https://sass-lang.com/documentation',
  nodejs: 'https://nodejs.org/en/docs/',
  expressjs: 'https://expressjs.com/en/starter/installing.html',
  vuejs: 'https://vuejs.org/v2/guide/',
  angular: 'https://angular.io/docs',
  vite: 'https://vitejs.dev/guide/',
  vitest: 'https://vitest.dev/guide/',
  tailwindcss: 'https://tailwindcss.com/docs',
  git: 'https://git-scm.com/doc',
  gitlab: 'https://docs.gitlab.com/',
  github: 'https://docs.github.com/en',
  mocha: 'https://mochajs.org/#getting-started',
  jest: 'https://jestjs.io/docs/getting-started',
  gulp: 'https://gulpjs.com/docs/en/getting-started/',
  markdown: 'https://www.markdownguide.org/',
  mdx: 'https://mdxjs.com/docs/',
  storybook: 'https://storybook.js.org/docs/react/get-started',
  stylex: 'https://stylex.dev/',
  mysql: 'https://dev.mysql.com/doc/',
  graphql: 'https://graphql.org/learn/',
  webpack: 'https://webpack.js.org/concepts/',
  babel: 'https://babeljs.io/docs/en/',
  jenkins: 'https://www.jenkins.io/doc/',
  docker: 'https://docs.docker.com/',
  kubernetes: 'https://kubernetes.io/docs/home/',
  figma: 'https://help.figma.com/hc/en-us',
  jquery: 'https://api.jquery.com/',
  contentful: 'https://www.contentful.com/developers/docs/',
  styledcomponents: 'https://styled-components.com/docs',
  notion: 'https://www.notion.so/help/guides',
  adobexd: 'https://helpx.adobe.com/xd/user-guide.html',
  jira: 'https://support.atlassian.com/jira-software-cloud/',
  miro: 'https://help.miro.com/hc/en-us',
  firebase: 'https://firebase.google.com/docs',
  gsap: 'https://greensock.com/docs/',
  vscode: 'https://code.visualstudio.com/docs',
  axios: 'https://axios-http.com/docs/intro',
  redux: 'https://redux.js.org/introduction/getting-started',
  xstate: 'https://xstate.js.org/docs/',
  jotai: 'https://jotai.org/docs/introduction',
  gatsby: 'https://www.gatsbyjs.com/docs/',
};

const TECH_LABEL: Record<App.Tech, string> = {
  typescript: 'TypeScript',
  javascript: 'JavaScript',
  react: 'React',
  nextjs: 'Next.js',
  html: 'HTML',
  css: 'CSS',
  sass: 'Sass',
  nodejs: 'Node.js',
  expressjs: 'Express.js',
  vuejs: 'Vue.js',
  angular: 'Angular',
  vite: 'Vite',
  vitest: 'Vitest',
  tailwindcss: 'Tailwind CSS',
  git: 'Git',
  gitlab: 'GitLab',
  github: 'GitHub',
  mocha: 'Mocha',
  jest: 'Jest',
  gulp: 'Gulp',
  markdown: 'Markdown',
  mdx: 'MDX',
  storybook: 'Storybook',
  stylex: 'Stylex',
  mysql: 'MySQL',
  graphql: 'GraphQL',
  webpack: 'Webpack',
  babel: 'Babel',
  jenkins: 'Jenkins',
  docker: 'Docker',
  kubernetes: 'Kubernetes',
  figma: 'Figma',
  jquery: 'jQuery',
  contentful: 'Contentful',
  styledcomponents: 'Styled Components',
  notion: 'Notion',
  adobexd: 'Adobe XD',
  jira: 'Jira',
  miro: 'Miro',
  firebase: 'Firebase',
  gsap: 'GSAP',
  vscode: 'Visual Studio Code',
  axios: 'Axios',
  redux: 'Redux',
  xstate: 'XState',
  jotai: 'Jotai',
  gatsby: 'Gatsby',
};

const TECH_IMAGE: Record<App.Tech, string> = {
  typescript: 'https://placehold.co/100x100',
  javascript: 'https://placehold.co/100x100',
  react: 'https://placehold.co/100x100',
  nextjs: 'https://placehold.co/100x100',
  html: 'https://placehold.co/100x100',
  css: 'https://placehold.co/100x100',
  sass: 'https://placehold.co/100x100',
  nodejs: 'https://placehold.co/100x100',
  expressjs: 'https://placehold.co/100x100',
  vuejs: 'https://placehold.co/100x100',
  angular: 'https://placehold.co/100x100',
  vite: 'https://placehold.co/100x100',
  vitest: 'https://placehold.co/100x100',
  tailwindcss: 'https://placehold.co/100x100',
  git: 'https://placehold.co/100x100',
  gitlab: 'https://placehold.co/100x100',
  github: 'https://placehold.co/100x100',
  mocha: 'https://placehold.co/100x100',
  jest: 'https://placehold.co/100x100',
  gulp: 'https://placehold.co/100x100',
  markdown: 'https://placehold.co/100x100',
  mdx: 'https://placehold.co/100x100',
  storybook: 'https://placehold.co/100x100',
  stylex: 'https://placehold.co/100x100',
  mysql: 'https://placehold.co/100x100',
  graphql: 'https://placehold.co/100x100',
  webpack: 'https://placehold.co/100x100',
  babel: 'https://placehold.co/100x100',
  jenkins: 'https://placehold.co/100x100',
  docker: 'https://placehold.co/100x100',
  kubernetes: 'https://placehold.co/100x100',
  figma: 'https://placehold.co/100x100',
  jquery: 'https://placehold.co/100x100',
  contentful: 'https://placehold.co/100x100',
  styledcomponents: 'https://placehold.co/100x100',
  notion: 'https://placehold.co/100x100',
  adobexd: 'https://placehold.co/100x100',
  jira: 'https://placehold.co/100x100',
  miro: 'https://placehold.co/100x100',
  firebase: 'https://placehold.co/100x100',
  gsap: 'https://placehold.co/100x100',
  vscode: 'https://placehold.co/100x100',
  axios: 'https://placehold.co/100x100',
  redux: 'https://placehold.co/100x100',
  xstate: 'https://placehold.co/100x100',
  jotai: 'https://placehold.co/100x100',
  gatsby: 'https://placehold.co/100x100',
};

const TECH_GROUP: Record<App.Tech, App.TechGroup> = {
  typescript: 'language',
  javascript: 'language',
  react: 'library',
  nextjs: 'framework',
  html: 'language',
  css: 'language',
  sass: 'language',
  nodejs: 'backend',
  expressjs: 'framework',
  vuejs: 'framework',
  angular: 'framework',
  vite: 'build',
  vitest: 'testing',
  tailwindcss: 'framework',
  git: 'version',
  gitlab: 'integration',
  github: 'version',
  mocha: 'testing',
  jest: 'testing',
  gulp: 'build',
  markdown: 'language',
  mdx: 'language',
  storybook: 'tool',
  stylex: 'framework',
  mysql: 'database',
  graphql: 'language',
  webpack: 'build',
  babel: 'build',
  jenkins: 'integration',
  docker: 'integration',
  kubernetes: 'integration',
  figma: 'design',
  jquery: 'library',
  contentful: 'integration',
  styledcomponents: 'library',
  notion: 'tool',
  adobexd: 'design',
  jira: 'tool',
  miro: 'tool',
  firebase: 'backend',
  gsap: 'library',
  vscode: 'tool',
  axios: 'library',
  redux: 'library',
  xstate: 'library',
  jotai: 'library',
  gatsby: 'framework',
};

const TECH_DETAILS: Record<App.Tech, string> = {
  typescript: `A static typed superset of JavaScript that compiles to plain JavaScript.`,
  javascript: `A versatile scripting language for creating dynamic web content.`,
  react: `A library for building user interfaces with reusable components.`,
  nextjs: `A framework for server-rendered React applications with static site generation.`,
  html: `The standard markup language for creating web pages and web applications.`,
  css: `A style sheet language used for describing the presentation of a document.`,
  sass: `A CSS preprocessor that adds variables, nested rules, and more.`,
  nodejs: `A JavaScript runtime for building scalable server-side applications.`,
  expressjs: `A web application framework for Node.js, designed for building APIs.`,
  vuejs: `A progressive framework for building user interfaces and single-page applications.`,
  angular: `A platform for building mobile and desktop web applications with TypeScript.`,
  vite: `A modern build tool that provides a fast development environment.`,
  vitest: `A fast unit test framework designed to work with modern JavaScript.`,
  tailwindcss: `A utility-first CSS framework for creating custom designs quickly.`,
  git: `A version control system for tracking changes in source code.`,
  gitlab: `A web-based DevOps lifecycle tool that provides Git repository management.`,
  github: `A platform for hosting and collaborating on Git repositories.`,
  mocha: `A test framework for JavaScript that runs tests in Node.js and browsers.`,
  jest: `A testing framework for JavaScript with a focus on simplicity and coverage.`,
  gulp: `A toolkit for automating tasks in development workflows.`,
  markdown: `A lightweight markup language for formatting plain text.`,
  mdx: `A format that allows embedding JSX within Markdown documents.`,
  storybook: `A tool for developing and testing UI components in isolation.`,
  stylex: `A library for writing styles with a component-based approach.`,
  mysql: `An open-source relational database management system.`,
  graphql: `A query language for APIs and a server-side runtime for executing queries.`,
  webpack: `A module bundler for JavaScript applications with extensive plugin support.`,
  babel: `A JavaScript compiler that converts ES6+ code into backward-compatible versions.`,
  jenkins: `An automation server for continuous integration and continuous delivery.`,
  docker: `A platform for developing, shipping, and running applications in containers.`,
  kubernetes: `An open-source system for automating containerized application deployment and scaling.`,
  figma: `A cloud-based design tool for collaborative interface design and prototyping.`,
  jquery: `A fast, small, and feature-rich JavaScript library for DOM manipulation.`,
  contentful: `A headless CMS that provides a flexible content management system.`,
  styledcomponents: `A library for styling React components using tagged template literals.`,
  notion: `An all-in-one workspace for notes, tasks, and collaboration.`,
  adobexd: `A design tool for creating user interfaces and prototypes.`,
  jira: `A project management tool for tracking issues and agile workflows.`,
  miro: `A collaborative online whiteboard platform for team brainstorming and planning.`,
  firebase: `A platform offering backend services for building web and mobile apps.`,
  gsap: `A JavaScript library for high-performance animations and interactive effects.`,
  vscode: `A source-code editor with debugging and version control capabilities.`,
  axios: `A promise-based HTTP client for making requests from the browser or Node.js.`,
  redux: `A state management library for JavaScript applications, typically with React.`,
  xstate: `A library for managing state with finite state machines and statecharts.`,
  jotai: `A minimalistic state management library for React using atoms.`,
  gatsby: `A static site generator for building fast, modern websites with React.`,
};

export const TECH_ITEM_TYPESCRIPT: App.TechItem = {
  details: TECH_DETAILS[TECH.typescript],
  group: TECH_GROUP[TECH.typescript],
  image: TECH_IMAGE[TECH.typescript],
  label: TECH_LABEL[TECH.typescript],
  site: TECH_SITE[TECH.typescript],
  value: TECH.typescript,
};

export const TECH_ITEM_JAVASCRIPT: App.TechItem = {
  details: TECH_DETAILS[TECH.javascript],
  group: TECH_GROUP[TECH.javascript],
  image: TECH_IMAGE[TECH.javascript],
  label: TECH_LABEL[TECH.javascript],
  site: TECH_SITE[TECH.javascript],
  value: TECH.javascript,
};

export const TECH_ITEM_REACT: App.TechItem = {
  details: TECH_DETAILS[TECH.react],
  group: TECH_GROUP[TECH.react],
  image: TECH_IMAGE[TECH.react],
  label: TECH_LABEL[TECH.react],
  site: TECH_SITE[TECH.react],
  value: TECH.react,
};

export const TECH_ITEM_NEXTJS: App.TechItem = {
  details: TECH_DETAILS[TECH.nextjs],
  group: TECH_GROUP[TECH.nextjs],
  image: TECH_IMAGE[TECH.nextjs],
  label: TECH_LABEL[TECH.nextjs],
  site: TECH_SITE[TECH.nextjs],
  value: TECH.nextjs,
};

export const TECH_ITEM_HTML: App.TechItem = {
  details: TECH_DETAILS[TECH.html],
  group: TECH_GROUP[TECH.html],
  image: TECH_IMAGE[TECH.html],
  label: TECH_LABEL[TECH.html],
  site: TECH_SITE[TECH.html],
  value: TECH.html,
};

export const TECH_ITEM_CSS: App.TechItem = {
  details: TECH_DETAILS[TECH.css],
  group: TECH_GROUP[TECH.css],
  image: TECH_IMAGE[TECH.css],
  label: TECH_LABEL[TECH.css],
  site: TECH_SITE[TECH.css],
  value: TECH.css,
};

export const TECH_ITEM_SASS: App.TechItem = {
  details: TECH_DETAILS[TECH.sass],
  group: TECH_GROUP[TECH.sass],
  image: TECH_IMAGE[TECH.sass],
  label: TECH_LABEL[TECH.sass],
  site: TECH_SITE[TECH.sass],
  value: TECH.sass,
};

export const TECH_ITEM_NODEJS: App.TechItem = {
  details: TECH_DETAILS[TECH.nodejs],
  group: TECH_GROUP[TECH.nodejs],
  image: TECH_IMAGE[TECH.nodejs],
  label: TECH_LABEL[TECH.nodejs],
  site: TECH_SITE[TECH.nodejs],
  value: TECH.nodejs,
};

export const TECH_ITEM_EXPRESSJS: App.TechItem = {
  details: TECH_DETAILS[TECH.expressjs],
  group: TECH_GROUP[TECH.expressjs],
  image: TECH_IMAGE[TECH.expressjs],
  label: TECH_LABEL[TECH.expressjs],
  site: TECH_SITE[TECH.expressjs],
  value: TECH.expressjs,
};

export const TECH_ITEM_VUEJS: App.TechItem = {
  details: TECH_DETAILS[TECH.vuejs],
  group: TECH_GROUP[TECH.vuejs],
  image: TECH_IMAGE[TECH.vuejs],
  label: TECH_LABEL[TECH.vuejs],
  site: TECH_SITE[TECH.vuejs],
  value: TECH.vuejs,
};

export const TECH_ITEM_ANGULAR: App.TechItem = {
  details: TECH_DETAILS[TECH.angular],
  group: TECH_GROUP[TECH.angular],
  image: TECH_IMAGE[TECH.angular],
  label: TECH_LABEL[TECH.angular],
  site: TECH_SITE[TECH.angular],
  value: TECH.angular,
};

export const TECH_ITEM_VITE: App.TechItem = {
  details: TECH_DETAILS[TECH.vite],
  group: TECH_GROUP[TECH.vite],
  image: TECH_IMAGE[TECH.vite],
  label: TECH_LABEL[TECH.vite],
  site: TECH_SITE[TECH.vite],
  value: TECH.vite,
};

export const TECH_ITEM_VITEST: App.TechItem = {
  details: TECH_DETAILS[TECH.vitest],
  group: TECH_GROUP[TECH.vitest],
  image: TECH_IMAGE[TECH.vitest],
  label: TECH_LABEL[TECH.vitest],
  site: TECH_SITE[TECH.vitest],
  value: TECH.vitest,
};

export const TECH_ITEM_TAILWINDCSS: App.TechItem = {
  details: TECH_DETAILS[TECH.tailwindcss],
  group: TECH_GROUP[TECH.tailwindcss],
  image: TECH_IMAGE[TECH.tailwindcss],
  label: TECH_LABEL[TECH.tailwindcss],
  site: TECH_SITE[TECH.tailwindcss],
  value: TECH.tailwindcss,
};

export const TECH_ITEM_GIT: App.TechItem = {
  details: TECH_DETAILS[TECH.git],
  group: TECH_GROUP[TECH.git],
  image: TECH_IMAGE[TECH.git],
  label: TECH_LABEL[TECH.git],
  site: TECH_SITE[TECH.git],
  value: TECH.git,
};

export const TECH_ITEM_GITLAB: App.TechItem = {
  details: TECH_DETAILS[TECH.gitlab],
  group: TECH_GROUP[TECH.gitlab],
  image: TECH_IMAGE[TECH.gitlab],
  label: TECH_LABEL[TECH.gitlab],
  site: TECH_SITE[TECH.gitlab],
  value: TECH.gitlab,
};

export const TECH_ITEM_GITHUB: App.TechItem = {
  details: TECH_DETAILS[TECH.github],
  group: TECH_GROUP[TECH.github],
  image: TECH_IMAGE[TECH.github],
  label: TECH_LABEL[TECH.github],
  site: TECH_SITE[TECH.github],
  value: TECH.github,
};

export const TECH_ITEM_MOCHA: App.TechItem = {
  details: TECH_DETAILS[TECH.mocha],
  group: TECH_GROUP[TECH.mocha],
  image: TECH_IMAGE[TECH.mocha],
  label: TECH_LABEL[TECH.mocha],
  site: TECH_SITE[TECH.mocha],
  value: TECH.mocha,
};

export const TECH_ITEM_JEST: App.TechItem = {
  details: TECH_DETAILS[TECH.jest],
  group: TECH_GROUP[TECH.jest],
  image: TECH_IMAGE[TECH.jest],
  label: TECH_LABEL[TECH.jest],
  site: TECH_SITE[TECH.jest],
  value: TECH.jest,
};

export const TECH_ITEM_GULP: App.TechItem = {
  details: TECH_DETAILS[TECH.gulp],
  group: TECH_GROUP[TECH.gulp],
  image: TECH_IMAGE[TECH.gulp],
  label: TECH_LABEL[TECH.gulp],
  site: TECH_SITE[TECH.gulp],
  value: TECH.gulp,
};

export const TECH_ITEM_MARKDOWN: App.TechItem = {
  details: TECH_DETAILS[TECH.markdown],
  group: TECH_GROUP[TECH.markdown],
  image: TECH_IMAGE[TECH.markdown],
  label: TECH_LABEL[TECH.markdown],
  site: TECH_SITE[TECH.markdown],
  value: TECH.markdown,
};

export const TECH_ITEM_MDX: App.TechItem = {
  details: TECH_DETAILS[TECH.mdx],
  group: TECH_GROUP[TECH.mdx],
  image: TECH_IMAGE[TECH.mdx],
  label: TECH_LABEL[TECH.mdx],
  site: TECH_SITE[TECH.mdx],
  value: TECH.mdx,
};

export const TECH_ITEM_STORYBOOK: App.TechItem = {
  details: TECH_DETAILS[TECH.storybook],
  group: TECH_GROUP[TECH.storybook],
  image: TECH_IMAGE[TECH.storybook],
  label: TECH_LABEL[TECH.storybook],
  site: TECH_SITE[TECH.storybook],
  value: TECH.storybook,
};

export const TECH_ITEM_STYLEX: App.TechItem = {
  details: TECH_DETAILS[TECH.stylex],
  group: TECH_GROUP[TECH.stylex],
  image: TECH_IMAGE[TECH.stylex],
  label: TECH_LABEL[TECH.stylex],
  site: TECH_SITE[TECH.stylex],
  value: TECH.stylex,
};

export const TECH_ITEM_MYSQL: App.TechItem = {
  details: TECH_DETAILS[TECH.mysql],
  group: TECH_GROUP[TECH.mysql],
  image: TECH_IMAGE[TECH.mysql],
  label: TECH_LABEL[TECH.mysql],
  site: TECH_SITE[TECH.mysql],
  value: TECH.mysql,
};

export const TECH_ITEM_GRAPHQL: App.TechItem = {
  details: TECH_DETAILS[TECH.graphql],
  group: TECH_GROUP[TECH.graphql],
  image: TECH_IMAGE[TECH.graphql],
  label: TECH_LABEL[TECH.graphql],
  site: TECH_SITE[TECH.graphql],
  value: TECH.graphql,
};

export const TECH_ITEM_WEBPACK: App.TechItem = {
  details: TECH_DETAILS[TECH.webpack],
  group: TECH_GROUP[TECH.webpack],
  image: TECH_IMAGE[TECH.webpack],
  label: TECH_LABEL[TECH.webpack],
  site: TECH_SITE[TECH.webpack],
  value: TECH.webpack,
};

export const TECH_ITEM_BABEL: App.TechItem = {
  details: TECH_DETAILS[TECH.babel],
  group: TECH_GROUP[TECH.babel],
  image: TECH_IMAGE[TECH.babel],
  label: TECH_LABEL[TECH.babel],
  site: TECH_SITE[TECH.babel],
  value: TECH.babel,
};

export const TECH_ITEM_JENKINS: App.TechItem = {
  details: TECH_DETAILS[TECH.jenkins],
  group: TECH_GROUP[TECH.jenkins],
  image: TECH_IMAGE[TECH.jenkins],
  label: TECH_LABEL[TECH.jenkins],
  site: TECH_SITE[TECH.jenkins],
  value: TECH.jenkins,
};

export const TECH_ITEM_DOCKER: App.TechItem = {
  details: TECH_DETAILS[TECH.docker],
  group: TECH_GROUP[TECH.docker],
  image: TECH_IMAGE[TECH.docker],
  label: TECH_LABEL[TECH.docker],
  site: TECH_SITE[TECH.docker],
  value: TECH.docker,
};

export const TECH_ITEM_KUBERNETES: App.TechItem = {
  details: TECH_DETAILS[TECH.kubernetes],
  group: TECH_GROUP[TECH.kubernetes],
  image: TECH_IMAGE[TECH.kubernetes],
  label: TECH_LABEL[TECH.kubernetes],
  site: TECH_SITE[TECH.kubernetes],
  value: TECH.kubernetes,
};

export const TECH_ITEM_FIGMA: App.TechItem = {
  details: TECH_DETAILS[TECH.figma],
  group: TECH_GROUP[TECH.figma],
  image: TECH_IMAGE[TECH.figma],
  label: TECH_LABEL[TECH.figma],
  site: TECH_SITE[TECH.figma],
  value: TECH.figma,
};

export const TECH_ITEM_JQUERY: App.TechItem = {
  details: TECH_DETAILS[TECH.jquery],
  group: TECH_GROUP[TECH.jquery],
  image: TECH_IMAGE[TECH.jquery],
  label: TECH_LABEL[TECH.jquery],
  site: TECH_SITE[TECH.jquery],
  value: TECH.jquery,
};

export const TECH_ITEM_CONTENTFUL: App.TechItem = {
  details: TECH_DETAILS[TECH.contentful],
  group: TECH_GROUP[TECH.contentful],
  image: TECH_IMAGE[TECH.contentful],
  label: TECH_LABEL[TECH.contentful],
  site: TECH_SITE[TECH.contentful],
  value: TECH.contentful,
};

export const TECH_ITEM_STYLEDCOMPONENTS: App.TechItem = {
  details: TECH_DETAILS[TECH.styledcomponents],
  group: TECH_GROUP[TECH.styledcomponents],
  image: TECH_IMAGE[TECH.styledcomponents],
  label: TECH_LABEL[TECH.styledcomponents],
  site: TECH_SITE[TECH.styledcomponents],
  value: TECH.styledcomponents,
};

export const TECH_ITEM_NOTION: App.TechItem = {
  details: TECH_DETAILS[TECH.notion],
  group: TECH_GROUP[TECH.notion],
  image: TECH_IMAGE[TECH.notion],
  label: TECH_LABEL[TECH.notion],
  site: TECH_SITE[TECH.notion],
  value: TECH.notion,
};

export const TECH_ITEM_ADOBEXD: App.TechItem = {
  details: TECH_DETAILS[TECH.adobexd],
  group: TECH_GROUP[TECH.adobexd],
  image: TECH_IMAGE[TECH.adobexd],
  label: TECH_LABEL[TECH.adobexd],
  site: TECH_SITE[TECH.adobexd],
  value: TECH.adobexd,
};

export const TECH_ITEM_JIRA: App.TechItem = {
  details: TECH_DETAILS[TECH.jira],
  group: TECH_GROUP[TECH.jira],
  image: TECH_IMAGE[TECH.jira],
  label: TECH_LABEL[TECH.jira],
  site: TECH_SITE[TECH.jira],
  value: TECH.jira,
};

export const TECH_ITEM_MIRO: App.TechItem = {
  details: TECH_DETAILS[TECH.miro],
  group: TECH_GROUP[TECH.miro],
  image: TECH_IMAGE[TECH.miro],
  label: TECH_LABEL[TECH.miro],
  site: TECH_SITE[TECH.miro],
  value: TECH.miro,
};

export const TECH_ITEM_FIREBASE: App.TechItem = {
  details: TECH_DETAILS[TECH.firebase],
  group: TECH_GROUP[TECH.firebase],
  image: TECH_IMAGE[TECH.firebase],
  label: TECH_LABEL[TECH.firebase],
  site: TECH_SITE[TECH.firebase],
  value: TECH.firebase,
};

export const TECH_ITEM_GSAP: App.TechItem = {
  details: TECH_DETAILS[TECH.gsap],
  group: TECH_GROUP[TECH.gsap],
  image: TECH_IMAGE[TECH.gsap],
  label: TECH_LABEL[TECH.gsap],
  site: TECH_SITE[TECH.gsap],
  value: TECH.gsap,
};

export const TECH_ITEM_VSCODE: App.TechItem = {
  details: TECH_DETAILS[TECH.vscode],
  group: TECH_GROUP[TECH.vscode],
  image: TECH_IMAGE[TECH.vscode],
  label: TECH_LABEL[TECH.vscode],
  site: TECH_SITE[TECH.vscode],
  value: TECH.vscode,
};

export const TECH_ITEM_AXIOS: App.TechItem = {
  details: TECH_DETAILS[TECH.axios],
  group: TECH_GROUP[TECH.axios],
  image: TECH_IMAGE[TECH.axios],
  label: TECH_LABEL[TECH.axios],
  site: TECH_SITE[TECH.axios],
  value: TECH.axios,
};

export const TECH_ITEM_REDUX: App.TechItem = {
  details: TECH_DETAILS[TECH.redux],
  group: TECH_GROUP[TECH.redux],
  image: TECH_IMAGE[TECH.redux],
  label: TECH_LABEL[TECH.redux],
  site: TECH_SITE[TECH.redux],
  value: TECH.redux,
};

export const TECH_ITEM_XSTATE: App.TechItem = {
  details: TECH_DETAILS[TECH.xstate],
  group: TECH_GROUP[TECH.xstate],
  image: TECH_IMAGE[TECH.xstate],
  label: TECH_LABEL[TECH.xstate],
  site: TECH_SITE[TECH.xstate],
  value: TECH.xstate,
};

export const TECH_ITEM_JOTAI: App.TechItem = {
  details: TECH_DETAILS[TECH.jotai],
  group: TECH_GROUP[TECH.jotai],
  image: TECH_IMAGE[TECH.jotai],
  label: TECH_LABEL[TECH.jotai],
  site: TECH_SITE[TECH.jotai],
  value: TECH.jotai,
};

export const TECH_ITEM_GATSBY: App.TechItem = {
  details: TECH_DETAILS[TECH.gatsby],
  group: TECH_GROUP[TECH.gatsby],
  image: TECH_IMAGE[TECH.gatsby],
  label: TECH_LABEL[TECH.gatsby],
  site: TECH_SITE[TECH.gatsby],
  value: TECH.gatsby,
};

export const TECH_ITEM_MAP = {
  typescript: TECH_ITEM_TYPESCRIPT,
  javascript: TECH_ITEM_JAVASCRIPT,
  react: TECH_ITEM_REACT,
  nextjs: TECH_ITEM_NEXTJS,
  html: TECH_ITEM_HTML,
  css: TECH_ITEM_CSS,
  sass: TECH_ITEM_SASS,
  nodejs: TECH_ITEM_NODEJS,
  expressjs: TECH_ITEM_EXPRESSJS,
  vuejs: TECH_ITEM_VUEJS,
  angular: TECH_ITEM_ANGULAR,
  vite: TECH_ITEM_VITE,
  vitest: TECH_ITEM_VITEST,
  tailwindcss: TECH_ITEM_TAILWINDCSS,
  git: TECH_ITEM_GIT,
  gitlab: TECH_ITEM_GITLAB,
  github: TECH_ITEM_GITHUB,
  mocha: TECH_ITEM_MOCHA,
  jest: TECH_ITEM_JEST,
  gulp: TECH_ITEM_GULP,
  markdown: TECH_ITEM_MARKDOWN,
  mdx: TECH_ITEM_MDX,
  storybook: TECH_ITEM_STORYBOOK,
  stylex: TECH_ITEM_STYLEX,
  mysql: TECH_ITEM_MYSQL,
  graphql: TECH_ITEM_GRAPHQL,
  webpack: TECH_ITEM_WEBPACK,
  babel: TECH_ITEM_BABEL,
  jenkins: TECH_ITEM_JENKINS,
  docker: TECH_ITEM_DOCKER,
  kubernetes: TECH_ITEM_KUBERNETES,
  figma: TECH_ITEM_FIGMA,
  jquery: TECH_ITEM_JQUERY,
  contentful: TECH_ITEM_CONTENTFUL,
  styledcomponents: TECH_ITEM_STYLEDCOMPONENTS,
  notion: TECH_ITEM_NOTION,
  adobexd: TECH_ITEM_ADOBEXD,
  jira: TECH_ITEM_JIRA,
  miro: TECH_ITEM_MIRO,
  firebase: TECH_ITEM_FIREBASE,
  gsap: TECH_ITEM_GSAP,
  vscode: TECH_ITEM_VSCODE,
  axios: TECH_ITEM_AXIOS,
  redux: TECH_ITEM_REDUX,
  xstate: TECH_ITEM_XSTATE,
  jotai: TECH_ITEM_JOTAI,
  gatsby: TECH_ITEM_GATSBY,
};

export const TECH_ITEM_DATA: App.TechItem[] = [
  TECH_ITEM_TYPESCRIPT,
  TECH_ITEM_JAVASCRIPT,
  TECH_ITEM_REACT,
  TECH_ITEM_NEXTJS,
  TECH_ITEM_HTML,
  TECH_ITEM_CSS,
  TECH_ITEM_SASS,
  TECH_ITEM_NODEJS,
  TECH_ITEM_EXPRESSJS,
  TECH_ITEM_VUEJS,
  TECH_ITEM_ANGULAR,
  TECH_ITEM_VITE,
  TECH_ITEM_VITEST,
  TECH_ITEM_TAILWINDCSS,
  TECH_ITEM_GIT,
  TECH_ITEM_GITLAB,
  TECH_ITEM_GITHUB,
  TECH_ITEM_MOCHA,
  TECH_ITEM_JEST,
  TECH_ITEM_GULP,
  TECH_ITEM_MARKDOWN,
  TECH_ITEM_MDX,
  TECH_ITEM_STORYBOOK,
  TECH_ITEM_STYLEX,
  TECH_ITEM_MYSQL,
  TECH_ITEM_GRAPHQL,
  TECH_ITEM_WEBPACK,
  TECH_ITEM_BABEL,
  TECH_ITEM_JENKINS,
  TECH_ITEM_DOCKER,
  TECH_ITEM_KUBERNETES,
  TECH_ITEM_FIGMA,
  TECH_ITEM_JQUERY,
  TECH_ITEM_CONTENTFUL,
  TECH_ITEM_STYLEDCOMPONENTS,
  TECH_ITEM_NOTION,
  TECH_ITEM_ADOBEXD,
  TECH_ITEM_JIRA,
  TECH_ITEM_MIRO,
  TECH_ITEM_FIREBASE,
  TECH_ITEM_GSAP,
  TECH_ITEM_VSCODE,
  TECH_ITEM_AXIOS,
  TECH_ITEM_REDUX,
  TECH_ITEM_XSTATE,
  TECH_ITEM_JOTAI,
  TECH_ITEM_GATSBY,
];
