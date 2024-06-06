import { Outlet } from 'react-router-dom';
import { SandboxError } from './sandbox-error';
import { SandboxDirectory } from './sandbox-routes';
import { Page } from '@/common';

type SandboxRouteFactory = React.FC<{}> & {
  Error: typeof SandboxError;
  Directory: typeof SandboxDirectory;
};

const Sandbox: SandboxRouteFactory = () => {
  return (
    <Page>
      <Outlet />
    </Page>
  );
};

Sandbox.Error = SandboxError;
Sandbox.Directory = SandboxDirectory;
Sandbox.displayName = '@v2/Sandbox.Route';
export { Sandbox };
