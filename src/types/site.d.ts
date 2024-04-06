export declare namespace Site {
  export type SocialKey = 'npm' | 'github' | 'twitter' | 'linkedin' | 'codesandbox';

  export interface LinkItem {
    icon?: ICON;
    value: string;
    label: string;
  }
}
