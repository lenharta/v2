import { Page } from '@/app';
import { Outlet } from 'react-router-dom';

import { SandboxRootRoute } from './page-root';
import { SandboxButtonRoute } from './page-button';
import { SandboxActionRoute } from './page-action';

interface SandboxPages {
  Root: typeof SandboxRootRoute;
  Button: typeof SandboxButtonRoute;
  Action: typeof SandboxActionRoute;
}

const SandboxRoute: React.FC<{}> & SandboxPages = () => (
  <Page>
    <Outlet />
  </Page>
);

SandboxRoute.Root = SandboxRootRoute;
SandboxRoute.Button = SandboxButtonRoute;
SandboxRoute.Action = SandboxActionRoute;
SandboxRoute.displayName = '@v2/Route.Sandbox';
export { SandboxRoute };
