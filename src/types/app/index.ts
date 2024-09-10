export enum MONTH {
  JAN = 'january',
  FEB = 'february',
  MAR = 'march',
  APR = 'april',
  MAY = 'may',
  JUN = 'june',
  JUL = 'july',
  AUG = 'august',
  SEP = 'september',
  OCT = 'october',
  NOV = 'november',
  DEC = 'december'
}

export enum ROUTE {
  home = '/',
  about = '/about',
  sandbox = '/sandbox',
  articles = '/articles',
}

export declare namespace App {
  export type ItemObject<T> = { label: string; value: T };

  export type ItemPayload<K , T = string> = K extends string ? Record<K, T> : never;

  export type DateObject = { month: string; day: string; year: string };

  export type Person = {
    name: { last: string; first: string; middle?: string };
    age: number;
  }

  export type Address<T> = {
    street: string | string[] 
    state: { name: string; code: string };
    city: { name: string; code: string }; 
    name: T;
  };

  export type Meta = {
    url: string
    repo: string;
    owner: {
      name: Person['name'];
    };
    location: { 
      nc: MetaLocationObject<'primary'>; 
      ny: MetaLocationObject<'secondary'>
    };
    social: {
      npmjs: MetaSocialObject<{ item: ItemObject<'npmjs'> }>;
      github: MetaSocialObject<{ item: ItemObject<'github'> }>;
      sandbox: MetaSocialObject<{ item: ItemObject<'sandbox'> }>;
      linkedin: MetaSocialObject<{ item: ItemObject<'linkedin'> }>;
      overflow: MetaSocialObject<{ item: ItemObject<'overflow'> }>;
      xtwitter: MetaSocialObject<{ item: ItemObject<'xtwitter'> }>;
    };
  };

  export type MetaSocialKey = 'npmjs' | 'github' | 'sandbox' | 'linkedin' | 'overflow' | 'xtwitter';
  
  export type MetaSocialObject<P> = P & { url: string; domain: string; username: string }
  
  export type MetaLocationObject<T> = Omit<Address<T>, 'street'>; 

  export type RouteItem<P = {}> = { label: string; value: string } & P;
  
  export type RouteLocation = { pathname: string; search: string; hash: string }

  export type RouteMetaData = { title: string; description: string }

  export type RouteConfig = {
    id: string;
    icon: string;
    location: RouteLocation;
    metadata: RouteMetaData;
  }

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

  export type CareerMeta = {
    id: string;
    role: Record<'value' | 'title' | 'text', string>;
    company: { value: string; title: string; text: string };
    employment: { value: string; start: string; end?: string | undefined };
    location: { value: string; city: string; state: string };
    tasks: { value: string; title: string; text: string }[];
  };

  export type TechCategory =
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

  export type TechItem = {
    id: string;
    url: string;
    name: string;
    image: any;
    category: TechCategory;
    description: string;
  };
}