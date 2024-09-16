import * as React from 'react';
import * as Router from 'react-router-dom';
import { Page, PageProps } from '@/app';

import {
  SandboxAccordion,
  SandboxAction,
  SandboxButton,
  SandboxCheckbox,
  SandboxDirectory,
  SandboxSelect,
  SandboxSwitch,
} from './pages';

export type SandboxRouteProps = PageProps & {};

export type SandboxRouteComponent = {
  (props: SandboxRouteProps): React.ReactNode;
  displayName?: string;
  Accordion: typeof SandboxAccordion;
  Action: typeof SandboxAction;
  Button: typeof SandboxButton;
  Checkbox: typeof SandboxCheckbox;
  Directory: typeof SandboxDirectory;
  Select: typeof SandboxSelect;
  Switch: typeof SandboxSwitch;
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
Sandbox.Checkbox = SandboxCheckbox;
Sandbox.Directory = SandboxDirectory;
Sandbox.Select = SandboxSelect;
Sandbox.Switch = SandboxSwitch;
Sandbox.displayName = '@v2/Route.Sandbox';
