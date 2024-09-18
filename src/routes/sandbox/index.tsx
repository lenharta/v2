import * as React from 'react';
import * as Router from 'react-router-dom';
import { Page, PageProps } from '@/app';

import {
  SandboxAccordion,
  SandboxAction,
  SandboxButton,
  SandboxCheckbox,
  SandboxControl,
  SandboxDirectory,
  SandboxSelect,
  SandboxSwitch,
  SandboxTabs,
} from './pages';

export type SandboxRouteProps = PageProps & {};

export type SandboxRouteComponent = {
  (props: SandboxRouteProps): React.ReactNode;
  displayName?: string;
  Accordion: typeof SandboxAccordion;
  Action: typeof SandboxAction;
  Button: typeof SandboxButton;
  Control: typeof SandboxControl;
  Checkbox: typeof SandboxCheckbox;
  Directory: typeof SandboxDirectory;
  Select: typeof SandboxSelect;
  Switch: typeof SandboxSwitch;
  Tabs: typeof SandboxTabs;
};

export const Sandbox: SandboxRouteComponent = (props) => {
  return (
    <Page {...props}>
      <Router.Outlet />
    </Page>
  );
};

Sandbox.Accordion = SandboxAccordion;
Sandbox.Action = SandboxAction;
Sandbox.Button = SandboxButton;
Sandbox.Control = SandboxControl;
Sandbox.Checkbox = SandboxCheckbox;
Sandbox.Directory = SandboxDirectory;
Sandbox.Select = SandboxSelect;
Sandbox.Switch = SandboxSwitch;
Sandbox.Tabs = SandboxTabs;
Sandbox.displayName = '@v2/Route.Sandbox';
