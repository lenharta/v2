type TechTableColumn = 'link' | 'info' | 'type' | 'title';

interface TechTableItem {
  id: ToolboxTechKey;
  type: ToolboxTechType;
  info: string;
  link: string;
  title: string;
}

interface TechTableCellProps {
  id: string;
  item: TechTableItem;
}

type ToolboxTechType =
  | 'language'
  | 'framework'
  | 'runtime'
  | 'tool'
  | 'testing'
  | 'versioning'
  | 'database'
  | 'devops'
  | 'design'
  | 'productivity'
  | 'cloud'
  | 'editor';

type ToolboxTechKey =
  | 'javascript'
  | 'typescript'
  | 'nodejs'
  | 'sass'
  | 'css3'
  | 'html5'
  | 'expressjs'
  | 'vite'
  | 'vitest'
  | 'react'
  | 'angular'
  | 'vue'
  | 'nextjs'
  | 'git'
  | 'gitlab'
  | 'github'
  | 'mocha'
  | 'jest'
  | 'gulp'
  | 'markdown'
  | 'mdx'
  | 'storybook'
  | 'mysql'
  | 'graphql'
  | 'webpack'
  | 'babel'
  | 'jenkins'
  | 'docker'
  | 'kubernetes'
  | 'figma'
  | 'notion'
  | 'jira'
  | 'firebase'
  | 'gsap'
  | 'framer'
  | 'vscode'
  | 'axios'
  | 'redux'
  | 'xstate'
  | 'jotai'
  | 'gatsby';

export type { TechTableColumn, TechTableItem, TechTableCellProps };
