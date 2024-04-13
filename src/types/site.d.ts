import { ICON } from '@/core';

export declare namespace Site {
  export interface FrontMatterObj {
    url: string;
    icon: ICON;
    tags: string[];
    title: string;
    search: string;
    description: string;
  }

  export interface LinkItem {
    icon?: ICON;
    value: string;
    label: string;
  }

  export interface Address {
    zip: string;
    city: string;
    state: { name: string; code: string };
    street: { line1: string; line2: string };
  }

  export interface ProfileMeta {
    img: any;
    url: string;
    bio: string;
  }

  export type SocialKey =
    | 'npm'
    | 'github'
    | 'twitter'
    | 'facebook'
    | 'linkedin'
    | 'instagram'
    | 'codesandbox';

  export type SocialMeta =
    | { type: 'npm'; url: 'https://github.com'; profile?: ProfileMeta }
    | { type: 'github'; url: 'https://github.com'; profile?: ProfileMeta }
    | { type: 'twitter'; url: 'https://twitter.com'; profile?: ProfileMeta }
    | { type: 'facebook'; url: 'https://facebook.com'; profile?: ProfileMeta }
    | { type: 'linkedin'; url: 'https://linkedin.com'; profile?: ProfileMeta }
    | { type: 'instagram'; url: 'https://instagram.com'; profile?: ProfileMeta }
    | { type: 'codesandbox'; url: 'https://codesandbox.com'; profile?: ProfileMeta };

  export interface Person {
    uuid: string;
    meta: ProfileMeta;
    name: { last: string; first: string; middle?: string };
    auth: { username: string; password: string; passcode: string };
    email: { key: string; value: string }[];
    phone: { key: string; value: string }[];
    social: SocialMeta[];
    address: ({ key: string } & Address)[];
  }
}
