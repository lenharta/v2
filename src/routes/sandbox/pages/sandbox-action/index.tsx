import * as React from 'react';
import { Action } from '@/core';
import { SANDBOX_META, SandboxLayout } from '../sandbox-layout';

export const SandboxAction: React.FC<{}> = ({}) => {
  return (
    <SandboxLayout
      name="Action"
      href={SANDBOX_META.action}
      controls={[
        {
          type: 'switch',
          prop: 'isLoading',
          initialValue: false,
        },
        {
          type: 'switch',
          prop: 'isReadonly',
          initialValue: false,
        },
        {
          type: 'switch',
          prop: 'isDisabled',
          initialValue: false,
        },
        {
          type: 'select',
          prop: 'variant',
          data: ['default', 'accent'],
          initialValue: 'default',
        },
      ]}
    >
      <Action icon={{ name: 'search' }} />
    </SandboxLayout>
  );
};

SandboxAction.displayName = '@v2/Route.SandboxAction.Action';
