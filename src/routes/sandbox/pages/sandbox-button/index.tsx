import * as React from 'react';
import { Button } from '@/core';
import { SandboxLayout } from '../sandbox-layout';

export const SandboxButton: React.FC<{}> = ({}) => {
  return (
    <SandboxLayout name="Button">
      <Button>Button</Button>
    </SandboxLayout>
  );
};

SandboxButton.displayName = '@v2/Route.SandboxButton.Button';
