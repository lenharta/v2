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

  type MetaLocation = {
    state: { name: string; code: string };
    city: string;
  };

  type MetaSocialKey = 'x' | 'npm' | 'github' | 'linkedin' | 'codesandbox' | 'stackoverflow';

  type MetaSocialSite = {
    key: MetaSocialKey;
    name: string;
  };

  type MetaSocialAccount = {
    site: { key: MetaSocialKey; name: string };
    link: string;
    user: string;
  };
}
