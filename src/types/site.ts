import { IconProps } from '@/core';

export declare namespace Site {
  export enum ROUTES {
    home = '/home',
    experience = '/experience',
    projects = '/projects',
    sandbox = '/sandbox',
    settings = '/settings',
    toolbox = '/toolbox',
    contact = '/contact',
  }

  export enum ROUTES_SANDBOX {
    accordion = '/sandbox/accordion',
    action = '/sandbox/action',
    box = '/sandbox/box',
    button = '/sandbox/button',
    checkbox = '/sandbox/checkbox',
    control = '/sandbox/control',
    disclosure = '/sandbox/disclosure',
    divider = '/sandbox/divider',
    floating = '/sandbox/floating',
    icon = '/sandbox/icon',
    image = '/sandbox/image',
    label = '/sandbox/label',
    navlink = '/sandbox/navlink',
    radio = '/sandbox/radio',
    spacing = '/sandbox/spacing',
    stack = '/sandbox/stack',
    tabs = '/sandbox/tabs',
    text = '/sandbox/text',
    textbox = '/sandbox/textbox',
    tile = '/sandbox/tile',
    title = '/sandbox/title',
    toggle = '/sandbox/toggle',
    transition = '/sandbox/transition',
    unstyled = '/sandbox/unstyled',
  }

  export type RouteMap = {
    id: keyof typeof ROUTES;
    path: ROUTES[number];
    icon: IconProps['name'];
    index?: boolean | undefined;
    routes?:
      | {
          id: keyof typeof ROUTES_SANDBOX;
          path: ROUTES_SANDBOX[number];
          icon: IconProps['name'];
          index?: boolean | undefined;
        }[]
      | undefined;
  };
}
