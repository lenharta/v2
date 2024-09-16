import * as React from 'react';
import { Button } from '@/core';
import { SandboxLayout } from '../sandbox-layout';

export const SandboxButton: React.FC<{}> = ({}) => {
  return (
    <SandboxLayout
      name="Button"
      controls={[
        { type: 'switch', initialValue: false, prop: 'isDisabled' },
        { type: 'switch', initialValue: false, prop: 'isReadonly' },
      ]}
    >
      <Button>Button</Button>
    </SandboxLayout>
  );
};

SandboxButton.displayName = '@v2/Route.Sandbox.Button';
