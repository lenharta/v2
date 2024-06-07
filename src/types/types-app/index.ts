export declare namespace App {
  export type RouteConfig = {
    home: RouteConfigHome;
    contact: RouteConfigContact;
    experience: RouteConfigExperience;
    profile: RouteConfigProfile;
    projects: RouteConfigProjects;
    settings: RouteConfigSettings;
    toolbox: RouteConfigToolbox;
    sandbox: RouteConfigSandbox;
  };

  export type RouteKey =
    | RouteKeyHome
    | RouteKeyContact
    | RouteKeyExperience
    | RouteKeyProfile
    | RouteKeyProjects
    | RouteKeySettings
    | RouteKeyToolbox
    | RouteKeySandbox;

  export type RoutePath =
    | RoutePathHome
    | RoutePathContact
    | RoutePathExperience
    | RoutePathProfile
    | RoutePathProjects
    | RoutePathSettings
    | RoutePathToolbox
    | RoutePathSandbox;

  export type RouteConfigHome = {
    key: RouteKeyHome;
    icon: RouteIconHome;
    path: RoutePathHome;
  };

  export type RouteConfigContact = {
    key: RouteKeyContact;
    icon: RouteIconContact;
    path: RoutePathContact;
  };

  export type RouteConfigExperience = {
    key: RouteKeyExperience;
    icon: RouteIconExperience;
    path: RoutePathExperience;
  };

  export type RouteConfigProfile = {
    key: RouteKeyProfile;
    icon: RouteIconProfile;
    path: RoutePathProfile;
  };

  export type RouteConfigProjects = {
    key: RouteKeyProjects;
    icon: RouteIconProjects;
    path: RoutePathProjects;
  };

  export type RouteConfigSettings = {
    key: RouteKeySettings;
    icon: RouteIconSettings;
    path: RoutePathSettings;
  };

  export type RouteConfigToolbox = {
    key: RouteKeyToolbox;
    icon: RouteIconToolbox;
    path: RoutePathToolbox;
  };

  export type RouteConfigSandbox = {
    key: RouteKeySandbox;
    icon: RouteIconSandbox;
    path: RoutePathSandbox;
  };

  export type RouteKeyHome = 'home';
  export type RouteIconHome = 'document';
  export type RoutePathHome = '/';

  export type RouteKeyContact = 'contact';
  export type RouteIconContact = 'document';
  export type RoutePathContact = '/contact';

  export type RouteKeyExperience = 'experience';
  export type RouteIconExperience = 'document';
  export type RoutePathExperience = '/experience';

  export type RouteKeyProfile = 'profile';
  export type RouteIconProfile = 'document';
  export type RoutePathProfile = '/profile';

  export type RouteKeyProjects = 'projects';
  export type RouteIconProjects = 'document';
  export type RoutePathProjects = '/projects';

  export type RouteKeySettings = 'settings';
  export type RouteIconSettings = 'document';
  export type RoutePathSettings = '/settings';

  export type RouteKeyToolbox = 'toolbox';
  export type RouteIconToolbox = 'document';
  export type RoutePathToolbox = '/toolbox';

  export type RouteKeySandbox = 'sandbox';
  export type RouteIconSandbox = 'document';
  export type RoutePathSandbox =
    | '/sandbox'
    | '/sandbox/accordion'
    | '/sandbox/action'
    | '/sandbox/box'
    | '/sandbox/button'
    | '/sandbox/checkbox'
    | '/sandbox/control'
    | '/sandbox/disclosure'
    | '/sandbox/divider'
    | '/sandbox/floating'
    | '/sandbox/icon'
    | '/sandbox/image'
    | '/sandbox/label'
    | '/sandbox/navlink'
    | '/sandbox/radio'
    | '/sandbox/spacing'
    | '/sandbox/stack'
    | '/sandbox/tabs'
    | '/sandbox/text'
    | '/sandbox/textbox'
    | '/sandbox/tile'
    | '/sandbox/title'
    | '/sandbox/toggle'
    | '/sandbox/transition'
    | '/sandbox/unstyled';
}

// export declare namespace Site {
//   export type RouteMap = {
//     id: keyof typeof ROUTES;
//     path: ROUTES[number];
//     icon: IconProps['name'];
//     index?: boolean | undefined;
//     routes?:
//       | {
//           id: keyof typeof ROUTES_SANDBOX;
//           path: ROUTES_SANDBOX[number];
//           icon: IconProps['name'];
//           index?: boolean | undefined;
//         }[]
//       | undefined;
//   };
// }
