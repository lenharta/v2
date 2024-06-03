import { Outlet } from 'react-router-dom';
import { SandboxError } from './sandbox-error';

type SandboxRouteFactory = React.FC<{}> & {
  Error: typeof SandboxError;
};

const Sandbox: SandboxRouteFactory = () => <Outlet />;

Sandbox.Error = SandboxError;
Sandbox.displayName = '@v2/Sandbox.Route';
export { Sandbox };
