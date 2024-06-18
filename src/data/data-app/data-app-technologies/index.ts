const DATA_APP_TECHNOLOGIES = [
  {
    id: 'javascript',
    items: {
      type: 'language',
      label: 'JavaScript',
      website: 'https://javascript.info',
      description: `JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.`,
    },
  },
  {
    id: 'typescript',
    items: {
      type: 'language',
      label: 'TypeScript',
      website: 'https://www.typescriptlang.org',
      description: `TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.`,
    },
  },
  {
    id: 'nodejs',
    items: {
      type: 'runtime',
      label: 'Node.js',
      website: 'https://nodejs.org',
      description: `Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.`,
    },
  },
  {
    id: 'sass',
    items: {
      type: 'language',
      label: 'Sass',
      website: 'https://sass-lang.com',
      description: `Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself.`,
    },
  },
  {
    id: 'css3',
    items: {
      type: 'language',
      label: 'CSS3',
      website: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      description: `Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.`,
    },
  },
  {
    id: 'html5',
    items: {
      type: 'language',
      label: 'HTML5',
      website: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
      description: `HTML5 is a markup language used for structuring and presenting hypertext documents on the World Wide Web.`,
    },
  },
  {
    id: 'expressjs',
    items: {
      type: 'framework',
      label: 'Express.js',
      website: 'https://expressjs.com',
      description: `Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.`,
    },
  },
  {
    id: 'vite',
    items: {
      type: 'environment',
      label: 'Vite',
      website: 'https://vitejs.dev',
      description: `Vite is a local development server written by Evan You, the creator of Vue.js, and used by default by Vue and for React project templates. It has support for TypeScript and JSX. It uses Rollup and esbuild internally for bundling.`,
    },
  },
  {
    id: 'vitest',
    items: {
      type: 'testing',
      label: 'Vitest',
      website: 'https://vitest.dev',
      description: `Vitest is a next generation testing framework powered by Vite.`,
    },
  },
  {
    id: 'react',
    items: {
      type: 'framework',
      label: 'React',
      website: 'https://react.dev',
      description: `React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.`,
    },
  },
  {
    id: 'angular',
    items: {
      type: 'framework',
      label: 'Angular',
      website: 'https://angular.io',
      description: `Angular is a TypeScript-based free and open-source single-page web application framework run on Node.js. It is developed by Google and by a community of individuals and corporations.`,
    },
  },
  {
    id: 'vue',
    items: {
      type: 'framework',
      label: 'Vue',
      website: 'https://vuejs.org',
      description: `Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.`,
    },
  },
  {
    id: 'nextjs',
    items: {
      type: 'framework',
      label: 'Next.js',
      website: 'https://nextjs.org',
      description: `Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.`,
    },
  },
  {
    id: 'git',
    items: {
      type: 'version control',
      label: 'Git',
      website: 'https://git-scm.com',
      description: `Git is a distributed version control system that tracks versions of files. It is often used to control source code by programmers collaboratively developing software.`,
    },
  },
  {
    id: 'gitlab',
    items: {
      type: 'devOps',
      label: 'GitLab',
      website: 'https://docs.gitlab.com',
      description: `A DevOps software package that can develop, secure, and operate software.`,
    },
  },
  {
    id: 'github',
    items: {
      type: 'version control',
      label: 'GitHub',
      website: 'https://docs.github.com',
      description: `GitHub is a developer platform that allows developers to create, store, manage and share their code. It uses Git software, providing the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.`,
    },
  },
  {
    id: 'mocha',
    items: {
      type: 'testing',
      label: 'Mocha',
      website: 'https://mochajs.org',
      description: `Mocha is a JavaScript test framework for Node.js programs, featuring browser support, asynchronous testing, test coverage reports, and use of any assertion library.`,
    },
  },
  {
    id: 'jest',
    items: {
      type: 'testing',
      label: 'Jest',
      website: 'https://jestjs.io',
      description: `Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.`,
    },
  },
  {
    id: 'gulp',
    items: {
      type: 'testing',
      label: 'Gulp',
      website: 'https://gulpjs.com',
      description: `Leverage gulp and the flexibility of JavaScript to automate slow, repetitive workflows and compose them into efficient build pipelines.`,
    },
  },
  {
    id: 'markdown',
    items: {
      type: 'markup language',
      label: 'Markdown',
      website: 'https://commonmark.org',
      description: `Markdown is a lightweight markup language for creating formatted text using a plain-text editor.`,
    },
  },
  {
    id: 'mdx',
    items: {
      type: 'markup language',
      label: 'MDX',
      website: 'https://mdxjs.com',
      description: `MDX allows you to use JSX in your markdown content. You can import components, such as interactive charts or alerts, and embed them within your content. This makes writing long-form content with components a blast.`,
    },
  },
  {
    id: 'storybook',
    items: {
      type: 'documentation',
      label: 'Storybook',
      website: 'https://storybook.js.org/',
      description: `Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It's open source and free.`,
    },
  },
  {
    id: 'mysql',
    items: {
      type: 'database',
      label: 'MySQL',
      website: 'https://dev.mysql.com/doc/',
      description: `MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius's daughter My, and "SQL", the acronym for Structured Query Language.`,
    },
  },
  {
    id: 'graphql',
    items: {
      type: 'query language',
      label: 'GraphQL',
      website: 'https://graphql.org/',
      description: `GraphQL is an open-source data query and manipulation language for APIs and a query runtime engine. GraphQL enables declarative data fetching where a client can specify exactly what data it needs from an API.`,
    },
  },
  {
    id: 'webpack',
    items: {
      type: 'module bundler',
      label: 'Webpack',
      website: 'https://webpack.js.org',
      description: `Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.`,
    },
  },
  {
    id: 'babel',
    items: {
      type: 'compiler',
      label: 'Babel',
      website: 'https://babeljs.io/',
      description: `Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.`,
    },
  },
  {
    id: 'jenkins',
    items: {
      type: 'automation',
      label: 'Jenkins',
      website: 'https://www.jenkins.io/',
      description: `Jenkins is an open source automation server. It helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration, and continuous delivery. It is a server-based system that runs in servlet containers such as Apache Tomcat.`,
    },
  },
  {
    id: 'docker',
    items: {
      type: 'containerization',
      label: 'Docker',
      website: 'https://docs.docker.com/guides/docker-overview/',
      description: `Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.`,
    },
  },
  {
    id: 'kubernetes',
    items: {
      type: 'orchestration',
      label: 'Kubernetes',
      website: 'https://kubernetes.io/',
      description: `Kubernetes is an open-source container orchestration system for automating software deployment, scaling, and management. Originally designed by Google, the project is now maintained by a worldwide community of contributors, and the trademark is held by the Cloud Native Computing Foundation.`,
    },
  },
  {
    id: 'figma',
    items: {
      type: 'prototyping',
      label: 'Figma',
      website: 'https://www.figma.com/',
      description: `Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.`,
    },
  },
  {
    id: 'notion',
    items: {
      type: 'workspace',
      label: 'Notion',
      website: 'https://www.notion.so/',
      description: `Notion is a productivity and note-taking web application developed by Notion Labs, Inc. It is an online and offline organizational tool on operating systems, offering users free-to-use or paid subscriptions. It is based in San Francisco, California, United States.`,
    },
  },
  {
    id: 'jira',
    items: {
      type: 'agile workspace',
      label: 'JIRA',
      website: 'https://www.atlassian.com/software/jira',
      description: `Jira is a proprietary product developed by Atlassian that allows bug tracking, issue tracking and agile project management. Jira is used by a large number of clients and users globally for project, time, requirements, task, bug, change, code, test, release, sprint management.`,
    },
  },
  {
    id: 'firebase',
    items: {
      type: 'cloud services',
      label: 'Google Firebase',
      website: 'https://firebase.google.com/',
      description: `Firebase is a set of backend cloud computing services and application development platforms provided by Google. It hosts databases, services, authentication, and integration for a variety of applications, including Android, iOS, JavaScript, Node.js, Java, Unity, PHP, and C++. `,
    },
  },
  {
    id: 'gsap',
    items: {
      type: 'animation',
      label: 'GSAP',
      website: 'https://gsap.com/',
      description: `GSAP is an industry standard JavaScript animation library from GreenSock that lets you craft high-performance animations that work in every major browser.`,
    },
  },
  {
    id: 'framer',
    items: {
      type: 'animation',
      label: 'Framer Motion',
      website: 'https://www.framer.com/motion/',
      description: `A production-ready motion library for React.`,
    },
  },
  {
    id: 'axios',
    items: {
      type: 'client',
      label: 'Axios',
      website: 'https://axios-http.com/',
      description: `Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface.`,
    },
  },
  {
    id: 'redux',
    items: {
      type: 'library',
      label: 'Redux',
      website: 'https://redux.js.org/',
      description: `Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. `,
    },
  },
  {
    id: 'xstate',
    items: {
      type: 'library',
      label: 'XState',
      website: 'https://xstate.js.org/',
      description: `XState is a state management and orchestration solution for JavaScript and TypeScript apps.`,
    },
  },
  {
    id: 'jotai',
    items: {
      type: 'library',
      label: 'Jotai',
      website: 'https://jotai.org/',
      description: `Primitive and flexible state management for React`,
    },
  },
  {
    id: 'gatsby',
    items: {
      type: 'static site generator',
      label: 'Gatsby',
      website: 'https://www.gatsbyjs.com/',
      description: `Gatsby is an open-source static site generator built on top of Node.js using React and GraphQL. It provides over 2500 plugins to create static sites based on sources as Markdown documents, MDX, images, and numerous Content Management Systems such as WordPress, Drupal and more.`,
    },
  },
];

export { DATA_APP_TECHNOLOGIES };
