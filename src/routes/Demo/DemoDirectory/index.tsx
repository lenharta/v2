import * as React from 'react';
import { Page } from '@app';
import { DemoHero } from '../DemoHero';
import { DemoIntro } from '../DemoIntro';
import { DirectoryCard } from './DirectoryCard';
import { DemoDirectoryItem } from './types';
import { DirectoryBanner } from './DirectoryBanner';

type DemoDirectoryFactory = React.FC<{}> & {
  Card: typeof DirectoryCard;
  Banner: typeof DirectoryBanner;
};

const items: DemoDirectoryItem[] = [
  {
    id: 'demo:button',
    path: '/demo/button',
    banner: 'Button',
    title: 'Button',
    summary: `A standard button designed for general use across the application. It supports various styles and states, including default, primary, secondary, and disabled, ensuring consistent user interaction.`,
  },
  {
    id: 'demo:action',
    path: '/demo/action',
    banner: 'Action',
    title: 'Action',
    summary: `A UI shell button used for navigation and primary controls. It integrates seamlessly into the application's layout, providing intuitive access to key actions and features.`,
  },
  {
    id: 'demo:iconbtn',
    path: '/demo/icon-btn',
    banner: 'IconBtn',
    title: 'Icon Button',
    summary: `A compact, rounded button featuring only an icon. Ideal for minimalist designs, it provides quick access to functions without the need for descriptive text, maintaining a clean interface.`,
  },
  {
    id: 'demo:toolbtn',
    path: '/demo/tool-btn',
    banner: 'ToolBtn',
    title: 'Tool Button',
    summary: `Similar to the IconBtn but specifically used for tool selection or actions like closing windows. It offers visual clarity and ease of access for task-specific operations within the UI.`,
  },
  {
    id: 'demo:checkbox',
    path: '/demo/checkbox',
    banner: 'Checkbox',
    title: 'Checkbox',
    summary: `An interactive checkbox that allows users to select or deselect options. It includes states for checked, unchecked, and indeterminate, providing clear visual feedback on selection status.`,
  },
  {
    id: 'demo:radio',
    path: '/demo/radio',
    banner: 'Radio',
    title: 'Radio',
    summary: `A radio button component that enables users to select a single option from a set. It ensures mutually exclusive choices, with clear visual indicators for the selected option.`,
  },
  {
    id: 'demo:toggle',
    path: '/demo/toggle',
    banner: 'Toggle',
    title: 'Toggle',
    summary: `A switch-like component that allows users to toggle between two states, such as on/off. It provides immediate visual feedback and is ideal for settings and preferences.`,
  },
  {
    id: 'demo:control',
    path: '/demo/control',
    banner: 'Control',
    title: 'Control',
    summary: `A versatile component for selectable options, similar to a content switcher. It allows users to switch between different views or modes, enhancing navigation and usability within the application.`,
  },
];

const DemoDirectory: DemoDirectoryFactory = ({}) => {
  return (
    <React.Fragment>
      <DemoHero />
      <DemoIntro />
      <Page.Section className="v2-demo-directory">
        <div className="v2-demo-directory-layout">
          {items.map(({ id, banner, ...item }) => (
            <DemoDirectory.Card
              id={id}
              key={id}
              banner={<DemoDirectory.Banner type={banner as any} />}
              {...item}
            />
          ))}
        </div>
      </Page.Section>
    </React.Fragment>
  );
};

DemoDirectory.Card = DirectoryCard;
DemoDirectory.Banner = DirectoryBanner;
DemoDirectory.displayName = '@v2/Demo.Directory';
export { DemoDirectory };
