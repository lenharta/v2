import React from 'react';
import { Page } from '@/common';
import { Outlet } from 'react-router-dom';
import { SandboxError } from './error';

interface SandboxProps {}

type SandboxComponent = React.FC<SandboxProps> & {
  Error: typeof SandboxError;
};

const Sandbox: SandboxComponent = () => {
  return (
    <Page>
      <Outlet />
    </Page>
  );
};

Sandbox.Error = SandboxError;
Sandbox.displayName = '@v2/Sandbox';
export { Sandbox };
