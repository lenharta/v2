import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Page } from '@app/components';
import { DemoHero } from './DemoHero';
import { DemoIntro } from './DemoIntro';

import { DemoToggle } from './DemoToggle';
import { DemoButton } from './DemoButton';
import { DemoAction } from './DemoAction';
import { DemoToolBtn } from './DemoToolBtn';
import { DemoIconBtn } from './DemoIconBtn';
import { DemoCheckbox } from './DemoCheckbox';
import { DemoDirectory } from './DemoDirectory';
import { DemoControl } from './DemoControl';

type DemoFactory = React.FC<{}> & {
  Hero: typeof DemoHero;
  Intro: typeof DemoIntro;
  Toggle: typeof DemoToggle;
  Button: typeof DemoButton;
  Action: typeof DemoAction;
  Control: typeof DemoControl;
  ToolBtn: typeof DemoToolBtn;
  IconBtn: typeof DemoIconBtn;
  Checkbox: typeof DemoCheckbox;
  Directory: typeof DemoDirectory;
};

const Demo: DemoFactory = ({}) => (
  <Page>
    <Outlet />
  </Page>
);

Demo.Hero = DemoHero;
Demo.Intro = DemoIntro;
Demo.Toggle = DemoToggle;
Demo.Button = DemoButton;
Demo.Action = DemoAction;
Demo.Control = DemoControl;
Demo.ToolBtn = DemoToolBtn;
Demo.IconBtn = DemoIconBtn;
Demo.Checkbox = DemoCheckbox;
Demo.Directory = DemoDirectory;
Demo.displayName = '@v2/Demo.Route';
export { Demo };
