export declare namespace App {
  export type RouteKey =
    | 'home'
    | 'about'
    | 'stack'
    | 'projects'
    | 'articles'
    | 'elements'
    | 'settings';

  export type RoutePath =
    | '/'
    | '/about'
    | '/stack'
    | '/projects'
    | '/articles'
    | '/elements'
    | '/settings';

  export type RouteKey_DEV_ONLY = RouteKey & 'canvas';
  export type RoutePath_DEV_ONLY = RoutePath & '/canvas';

  export type RouteKeyLookup<T> = Record<RouteKey, T>;
  export type RoutePathLookup<T> = Record<RoutePath, T>;

  export type RouteMap = {
    key: RouteKeyLookup<RouteKey>;
    keys: RouteKey[];
    link: RouteKeyLookup<RoutePath>;
    label: RouteKeyLookup<string>;
  };

  type MetaLocationKey = 'ny' | 'nc';
  type MetaSocialKey = 'x' | 'npm' | 'github' | 'linkedin' | 'codesandbox' | 'stackoverflow';
  type MetaSocialMap<T> = Record<MetaSocialKey, T>;

  type MetaLocationNY = {
    state: { name: 'New York'; code: 'NY' };
    city: { name: 'New York'; code: '999999' };
    key: 'ny';
  };

  type MetaLocationNC = {
    state: { name: 'North Carolina'; code: 'NC' };
    city: { name: 'Winston-Salem'; code: '999999' };
    key: 'nc';
  };

  type MetaMap = {
    owner: {
      email: { user: string; provider: string };
      name: { last: string; first: string; middle: string };
      desc: string;
      site: string;
      repo: string;
      title: string;
    };
    location: {
      nc: App.MetaLocationNC;
      ny: App.MetaLocationNY;
    };
    social: {
      key: App.MetaSocialMap<App.MetaSocialKey>;
      site: App.MetaSocialMap<string>;
      user: App.MetaSocialMap<string>;
      link: App.MetaSocialMap<string>;
      keys: App.MetaSocialKey[];
    };
  };

  export type CareerMeta = {
    id: string;
    role: { value: string; title: string; text: string };
    company: { value: string; title: string; text: string };
    employment: { value: string; start: string; end?: string | undefined };
    location: { value: string; city: string; state: string };
    tasks: { value: string; title: string; text: string }[];
  };

  export type TechGroup =
    | 'backend'
    | 'build'
    | 'database'
    | 'design'
    | 'framework'
    | 'integration'
    | 'language'
    | 'library'
    | 'testing'
    | 'tool'
    | 'version';

  export type Tech =
    | 'typescript'
    | 'javascript'
    | 'react'
    | 'nextjs'
    | 'html'
    | 'css'
    | 'sass'
    | 'nodejs'
    | 'expressjs'
    | 'vuejs'
    | 'angular'
    | 'vite'
    | 'vitest'
    | 'tailwindcss'
    | 'git'
    | 'gitlab'
    | 'github'
    | 'mocha'
    | 'jest'
    | 'gulp'
    | 'markdown'
    | 'mdx'
    | 'storybook'
    | 'stylex'
    | 'mysql'
    | 'graphql'
    | 'webpack'
    | 'babel'
    | 'jenkins'
    | 'docker'
    | 'kubernetes'
    | 'figma'
    | 'jquery'
    | 'contentful'
    | 'styledcomponents'
    | 'notion'
    | 'adobexd'
    | 'jira'
    | 'miro'
    | 'firebase'
    | 'gsap'
    | 'vscode'
    | 'axios'
    | 'redux'
    | 'xstate'
    | 'jotai'
    | 'gatsby';

  export type TechItem = {
    site: string;
    image: any;
    label: string;
    value: string;
    group: TechGroup;
    details: string;
  };
}
