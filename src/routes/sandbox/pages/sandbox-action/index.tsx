import * as React from 'react';
import { Action } from '@/core';
import { SandboxLayout } from '../sandbox-layout';

export const SandboxAction: React.FC<{}> = ({}) => {
  return (
    <SandboxLayout
      name="Action"
      controls={[
        { type: 'switch', initialValue: false, prop: 'isLoading' },
        { type: 'switch', initialValue: false, prop: 'isDisabled' },
        { type: 'switch', initialValue: false, prop: 'isReadonly' },
      ]}
    >
      <Action icon={{ name: 'search' }} />
    </SandboxLayout>
  );
};

SandboxAction.displayName = '@v2/Route.SandboxAction.Action';
