import { Page } from '@/common';
import { Outlet } from 'react-router-dom';

import { SandboxRoot } from './sandbox-root';
import { SandboxIcon } from './sandbox-icon';
import { SandboxTile } from './sandbox-tile';
import { SandboxText } from './sandbox-text';
import { SandboxLabel } from './sandbox-label';
import { SandboxTitle } from './sandbox-title';
import { SandboxAction } from './sandbox-action';
import { SandboxButton } from './sandbox-button';
import { SandboxDivider } from './sandbox-divider';
import { SandboxFloating } from './sandbox-floating';

const SandboxRoute: React.FC<{}> & {
  Root: typeof SandboxRoot;
  Icon: typeof SandboxIcon;
  Tile: typeof SandboxTile;
  Text: typeof SandboxText;
  Title: typeof SandboxTitle;
  Label: typeof SandboxLabel;
  Button: typeof SandboxButton;
  Action: typeof SandboxAction;
  Divider: typeof SandboxDivider;
  Floating: typeof SandboxFloating;
} = () => (
  <Page>
    <Outlet />
  </Page>
);

SandboxRoute.Root = SandboxRoot;
SandboxRoute.Icon = SandboxIcon;
SandboxRoute.Tile = SandboxTile;
SandboxRoute.Text = SandboxText;
SandboxRoute.Title = SandboxTitle;
SandboxRoute.Label = SandboxLabel;
SandboxRoute.Button = SandboxButton;
SandboxRoute.Action = SandboxAction;
SandboxRoute.Divider = SandboxDivider;
SandboxRoute.Floating = SandboxFloating;
SandboxRoute.displayName = '@v2/Route.Sandbox';
export { SandboxRoute };
