export declare namespace FrontMatter {
  export type SearchResultObject = {
    group: 'document' | 'link' | 'post';
    value: string;
    label: string;
    search: string;
    summary: string;
  };

  export type Auth = {
    username: string;
    password: string;
    passcode: string | undefined;
  };

  export type NameProps = {
    last: string;
    first: string;
    middle?: string | undefined;
  };

  export type LocaleState = '';

  export type Locale = { name: string; code: string };
  export type Contact = { type: 'home' | 'work'; value: string };

  export type Address = {
    street: string;
    state: Locale;
    city: string;
    zip: string;
  };

  export type SocialProfile = {
    url: string;
    image: string;
    search: string;
    handle: string;
    description: string;
  };

  export type SocialData = {
    url: string;
    type: string;
    profile: SocialProfile;
  };

  export type Person = {
    name: Name;
    email: Contact[];
    phone: Contact[];
    social: SocialData[];
    address: Address;
  };

  export type User = Person & {
    auth: Auth;
    uuid: string;
  };
}
