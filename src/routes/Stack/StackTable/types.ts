type StackCategory =
  | 'tool'
  | 'cloud'
  | 'editor'
  | 'devops'
  | 'design'
  | 'runtime'
  | 'testing'
  | 'language'
  | 'database'
  | 'framework'
  | 'versioning'
  | 'productivity';

interface StackItem {
  docs: string;
  type: StackCategory;
  desc: string;
  name: string;
  value: string;
}

interface StackHeaderItem {
  type: StackCategory;
  title: string;
}

export type { StackCategory, StackItem, StackHeaderItem };
