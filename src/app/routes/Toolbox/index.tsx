import * as React from 'react';
import { ICON, Icon, Table, Textbox } from '@/core';
import { Action, Page, Section } from '@/app/common';
import { Store } from '@/types';
import { getToken } from '@/core/utils';

type ToolboxRouteComponent = React.FC<{}>;

const headers = [
  { id: 'toolbox-col-1', label: ' ' },
  { id: 'toolbox-col-2', label: 'Name' },
  { id: 'toolbox-col-3', label: 'Description' },
  { id: 'toolbox-col-4', label: 'Tags' },
  { id: 'toolbox-col-5', label: ' ' },
];

type ToolboxCategory =
  | 'build'
  | 'database'
  | 'framework'
  | 'language'
  | 'library'
  | 'runtime'
  | 'security'
  | 'testing'
  | 'tools'
  | 'transpiler'
  | 'versioning';

const categoryColors: Record<ToolboxCategory, Store.Accent> = {
  build: 'gray',
  database: 'indigo',
  framework: 'cyan',
  language: 'blue',
  library: 'mint',
  runtime: 'green',
  security: 'pink',
  testing: 'yellow',
  tools: 'orange',
  transpiler: 'red',
  versioning: 'brown',
};

interface ToolboxTableData {
  id: string;
  name: string;
  website: string;
  keywords: string;
  category: ToolboxCategory;
  description: string;
}

const tableData: ToolboxTableData[] = [
  {
    id: 'a94ue2v8hsk3xlp7',
    name: 'TypeScript',
    website: 'https://www.typescriptlang.org/',
    keywords: 'typescript/language/programming/code',
    description: `Statically-typed superset of JavaScript for building scalable and maintainable applications.`,
    category: 'language',
  },
  {
    id: 'c7y2t6z8b1hn3m4',
    name: 'JavaScript',
    website: 'https://www.javascript.com/',
    keywords: 'java/javascript/language/programming/code/browser',
    description: `Dynamic programming language primarily used for client-side web development.`,
    category: 'language',
  },
  {
    id: 'g3m6x9q1h8r2z5f',
    name: 'HTML',
    website: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    keywords: 'html/markup/language/development/web',
    description: `Standard markup language for creating web pages and web applications.`,
    category: 'language',
  },
  {
    id: 'i1w4d7g8t2f3n5a',
    name: 'CSS',
    website: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    keywords: 'css/styling/stylesheet/web/design',
    description: `Style sheet language used for describing the presentation of a document written in HTML.`,
    category: 'language',
  },
  {
    id: 'k4e2r6j7q9v3s8b',
    name: 'SCSS',
    website: 'https://sass-lang.com/',
    keywords: 'scss/sass/stylesheet/preprocessor/css/styling',
    description: `CSS preprocessor syntax that allows for more dynamic styling capabilities and code organization.`,
    category: 'language',
  },
  {
    id: 'c4b3a2f1e0d9c8b',
    name: 'Graphql',
    website: 'https://graphql.org/',
    keywords: 'graphql/query/api/database/language',
    description: `Query language for APIs and runtime for executing those queries with existing data.`,
    category: 'language',
  },
  {
    id: 'e5k2v3y9s1w4j6q',
    name: 'React',
    website: 'https://react.dev/',
    keywords: 'framework/programming/javascript/code/browser',
    description: `JavaScript library for building user interfaces that renders and updates components.`,
    category: 'framework',
  },
  {
    id: 'm3c8a2r5y6u1p9z',
    name: 'TailwindCSS',
    website: 'https://tailwindcss.com/',
    keywords: 'css/styling/framework/utility/inline',
    description: `Utility-first CSS framework for building custom designs quickly and efficiently.`,
    category: 'framework',
  },
  {
    id: 'o9g2q5l1t4x7h6v',
    name: 'NextJS',
    website: 'https://nextjs.org/',
    keywords: 'next/javascript/environment/react/framework/server',
    description: `React framework for building production-ready web applications with server-side rendering, routing, and more.`,
    category: 'framework',
  },
  {
    id: 'q6u1s3v7i4n2k8d',
    name: 'NodeJS',
    website: 'https://nodejs.org/',
    keywords: 'nodejs/javascript/runtime/backend/server/side',
    description: `JavaScript runtime environment that allows developers to run JavaScript code on the server side.`,
    category: 'runtime',
  },
  {
    id: 's8y4b5f3w6t7g1r',
    name: 'Vite',
    website: 'https://vitejs.dev/',
    keywords: 'vite/vue/react/environment/development/build/tool',
    description: `Next-generation front-end build tool that offers instant server start and fast builds.`,
    category: 'tools',
  },
  {
    id: '1b2d3e4f5a6b7c8',
    name: 'Docker',
    website: 'https://www.docker.com/',
    keywords: 'docker/containerization/virtualization/deployment',
    description: `Platform for developing, shipping, and running applications inside containers.`,
    category: 'tools',
  },
  {
    id: '9d8c7b6a5f4e3d2',
    name: 'Kubernetes',
    website: 'https://kubernetes.io/',
    keywords: 'kubernetes/k8s/container/orchestration',
    description: `Open-source system for automating deployment, scaling, and management of containerized applications.`,
    category: 'tools',
  },
  {
    id: 'u5j9t3d6q8r2p7z',
    name: 'Jest',
    website: 'https://jestjs.io/',
    keywords: 'jest/testing/javascript/framework/test',
    description: `JavaScript testing framework with a focus on simplicity and flexibility.`,
    category: 'testing',
  },
  {
    id: 'w1h4l6v7f9n2y8e',
    name: 'Vitest',
    website: 'https://github.com/vitejs/vitest',
    keywords: 'vitest/testing/javascript/test/vite/runner/coverage',
    description: `Official testing solution for Vite.js, providing fast and reliable test running capabilities.`,
    category: 'testing',
  },
  {
    id: 'e2b3d8f0a1c7e5d4',
    name: 'Git',
    website: 'https://git-scm.com/',
    keywords: 'git/version control/system/source code',
    description: `Distributed version control system for tracking changes in source code during software development.`,
    category: 'versioning',
  },
  {
    id: '7a9c4b1e8f2d6a5b',
    name: 'Github',
    website: 'https://github.com/',
    keywords: 'github/git/version control/repository',
    description: `Web-based hosting service for version control using Git, offering collaboration features for software development.`,
    category: 'versioning',
  },
  {
    id: 'f5e2a4c3d9b8f7e6',
    name: 'Gitlab',
    website: 'https://about.gitlab.com/',
    keywords: 'gitlab/git/version control/repository',
    description: `Web-based DevOps lifecycle tool that provides a Git repository manager providing wiki, issue-tracking, and CI/CD pipeline features.`,
    category: 'versioning',
  },
  {
    id: '6a5b4c3d2e1f0a9',
    name: 'MySQL',
    website: 'https://www.mysql.com/',
    keywords: 'mysql/database/relational/sql',
    description: `Open-source relational database management system based on SQL.`,
    category: 'database',
  },
  {
    id: '3df8a7c7b6e94d29',
    name: 'Prisma',
    website: 'https://www.prisma.io/',
    keywords: 'prisma/database/orm/development',
    description: `Next-generation ORM for Node.js and TypeScript, simplifying database access and manipulation with a type-safe and auto-generated query builder.`,
    category: 'database',
  },
  {
    id: '9e8d7c6b5a4f3e2',
    name: 'Markdown',
    website: 'https://www.markdownguide.org/',
    keywords: 'markdown/markup/language/formatting',
    description: `Lightweight markup language for creating formatted text using a plain-text editor.`,
    category: 'language',
  },
  {
    id: 'c1d2e3f4a5b6c7',
    name: 'Redux',
    website: 'https://redux.js.org/',
    keywords: 'redux/state/store/react',
    description: `Predictable state container for JavaScript apps, especially useful for managing state in complex React applications.`,
    category: 'library',
  },
  {
    id: 'f8e9d2c3b4a5f6',
    name: 'JSDoc',
    website: 'https://jsdoc.app/',
    keywords: 'jsdoc/documentation/js/javascript/types',
    description: `An API documentation generator for JavaScript, used to document complex codebases in a structured manner.`,
    category: 'tools',
  },
  {
    id: '1a2b3c4d5e6f7g',
    name: 'Storybook',
    website: 'https://storybook.js.org/',
    keywords: 'storybook/react/vue/angular/components/ui/prototyping',
    description: `Development environment for UI components, allowing developers to browse a component library, view different states, and interactively develop components in isolation.`,
    category: 'tools',
  },
  {
    id: '5b4c3d2e1f0a9',
    name: 'JWT',
    website: 'https://jwt.io/',
    keywords: 'jwt/json/tokens/authentication/authorization',
    description: `JSON Web Token is a compact, URL-safe means of representing claims to be transferred between two parties, commonly used for authentication and information exchange in web services.`,
    category: 'security',
  },
  {
    id: '6c5b4a3f2e1d0',
    name: 'Webpack',
    website: 'https://webpack.js.org/',
    keywords: 'webpack/module/bundler/build/javascript/js',
    description: `Module bundler for JavaScript applications, providing capabilities for bundling modules, assets, and more for the browser.`,
    category: 'build',
  },
  {
    id: '0a1b2c3d4e5f6g',
    name: 'Babel',
    website: 'https://babeljs.io/',
    keywords: 'babel/compiler/javascript/transpiler/ecmascript',
    description: `JavaScript compiler that transforms ECMAScript 2015+ code into a backwards compatible version of JavaScript for older browsers or environments.`,
    category: 'transpiler',
  },
  {
    id: '3d4e5f6a7b8c9d',
    name: 'Framer',
    website: 'https://www.framer.com/',
    keywords: 'framer/design/prototyping/tool',
    description: `Toolkit used for designing interactive prototypes and animations, commonly used for creating user interface designs and interactions.`,
    category: 'library',
  },
  {
    id: '8e7f6a5b4c3d2e',
    name: 'MDX',
    website: 'https://mdxjs.com/',
    keywords: 'mdx/markdown/javascript/js/react',
    description: `Markdown for the component era, enabling developers to write JSX in Markdown documents, allowing for the seamless integration of JSX and Markdown syntax.`,
    category: 'language',
  },
  {
    id: 'b9c8d7e6f5a4b3',
    name: 'GSAP',
    website: 'https://greensock.com/gsap/',
    keywords: 'gsap/animation/javascript/library',
    description: `Professional-grade JavaScript animation library used for creating high-performance, fluid animations on the web.`,
    category: 'library',
  },
  {
    id: 'a3b4c5d6e7f8g9',
    name: 'Express',
    website: 'https://expressjs.com/',
    keywords: 'express/node/web/framework',
    description: `Fast, unopinionated, minimalist web framework for Node.js, designed for building web applications and APIs.`,
    category: 'framework',
  },
  {
    id: 'd1e2f3a4b5c6d7',
    name: 'jQuery',
    website: 'https://jquery.com/',
    keywords: 'js/javascript/library/dom',
    description: `Fast, small, and feature-rich JavaScript library for simplifying HTML document traversing, event handling, animating, and Ajax interactions.`,
    category: 'library',
  },
];

interface ToolboxExternalProps {
  name: string;
  url?: string;
  icon?: ICON;
}

const TableExternalCell = (props: ToolboxExternalProps) => {
  const { url = '#', name, icon = 'open' } = props;
  return (
    <Table.Cell>
      <a
        href={url}
        target="_blank"
        children={<Icon name={icon} />}
        className="toolbox-external-link"
        aria-label={name}
      />
    </Table.Cell>
  );
};

interface TableTagCellProps {
  items?: string[] | undefined;
  color?: Store.Accent | undefined;
}

const TableTagCell = (props: TableTagCellProps) => {
  const { items = [], color = 'blue' } = props;
  return (
    <Table.Cell>
      <div className="table-tag-cell">
        {items.map((item) => (
          <div
            key={item}
            className="table-tag-cell-item"
            children={item}
            style={{
              backgroundColor: `rgba(var(--c-${color}-alpha), 0.1)`,
              color: `rgba(var(--c-${color}-alpha), 0.9)`,
            }}
          />
        ))}
      </div>
    </Table.Cell>
  );
};

interface TableColorBadgeProps {
  color?: Store.Accent | undefined;
  style?: React.CSSProperties | undefined;
}

export const TableColorBagdeCell = (props: TableColorBadgeProps) => {
  const { style, color = 'blue' } = props;
  return (
    <Table.Cell>
      <div
        className="table-color-badge-cell"
        style={{ ...style, backgroundColor: `rgba(var(--c-${color}-alpha), 0.9)` }}
      />
    </Table.Cell>
  );
};

export const Toolbox: ToolboxRouteComponent = ({}) => {
  const [query, setQuery] = React.useState<string>();

  console.log(query);
  return (
    <Page>
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <Section>
          <div className="sec-toolbox-table">
            <div className="sec-toolbox-table-controls">
              <Action icon="filter" />
              <Textbox
                value={query}
                onChange={(event) => setQuery(event.currentTarget.value)}
                placeholder="Find..."
              />
            </div>
            <Table>
              <Table.Head>
                <Table.Row>
                  {headers.map((item) => (
                    <Table.Header key={item.id} id={item.id} children={item.label} />
                  ))}
                </Table.Row>
              </Table.Head>
              <Table.Body>
                {tableData.map((item) => (
                  <Table.Row key={item.name}>
                    <TableColorBagdeCell color={categoryColors[item.category]} />
                    <Table.Cell children={<span>{item.name}</span>} />
                    <Table.Cell children={<span>{item.description}</span>} />
                    <TableTagCell
                      items={item.keywords.split('/')}
                      color={categoryColors[item.category]}
                    />
                    <TableExternalCell name={item.name} url={item.website} />
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </Section>
      </Page.Content>
    </Page>
  );
};

Toolbox.displayName = '@v2/app/Route.Toolbox';
