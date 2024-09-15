import * as React from 'react';
import * as Router from 'react-router-dom';
import { Page, PageProps } from '@/app';
import { SandboxAction, SandboxButton, SandboxSelect, SandboxSwitch } from './pages';

export type SandboxRouteProps = PageProps & {};

export type SandboxRouteComponent = {
  (props: SandboxRouteProps): React.ReactNode;
  displayName?: string;
  Action: typeof SandboxAction;
  Button: typeof SandboxButton;
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

Sandbox.Action = SandboxAction;
Sandbox.Button = SandboxButton;
Sandbox.Select = SandboxSelect;
Sandbox.Switch = SandboxSwitch;
Sandbox.displayName = '@v2/Route.Sandbox';
