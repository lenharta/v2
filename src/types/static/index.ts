import { I18n } from '@/types';
import { IconProps } from '@/core';

export declare namespace Static {
  export type RouteId = `route:${RouteKey}`;

  export type RouteKey =
    | 'homepage'
    | 'experience'
    | 'projects'
    | 'sandbox'
    | 'toolbox'
    | 'settings'
    | 'contact'
    | 'canvas';

  export type RoutePath =
    | '/'
    | '/experience'
    | '/projects'
    | '/sandbox'
    | '/toolbox'
    | '/settings'
    | '/contact'
    | '/canvas';

  export interface RouteMeta {
    tags: string;
    title: string;
    description: string;
  }

  export interface RouteLink {
    uid: RouteId;
    icon: IconProps['name'];
    value: RoutePath;
    label: string;
  }

  export interface RouteItem {
    uid: RouteId;
    type: 'route' | 'page';
    path: RoutePath;
    meta: RouteMeta;
    link: RouteLink;
  }

  export interface ResumeLocation {
    state: I18n.UnitedStatesRegion;
    city: string;
  }

  export interface ResumeItem {
    uid: string;
    date: string[];
    title: string;
    summary: string;
    location: ResumeLocation;
  }
}
