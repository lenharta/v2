import * as React from 'react';
import { Button } from '@/core';
import { SandboxLayout } from '../sandbox-layout';

export const SandboxButton: React.FC<{}> = ({}) => {
  return (
    <SandboxLayout
      name="Button"
      containerStyle={{
        maxWidth: 400,
      }}
      controls={[
        {
          type: 'select',
          prop: 'variant',
          data: ['default', 'accent'],
          initialValue: 'default',
        },
        {
          prop: 'justify',
          type: 'select',
          data: ['center', 'start', 'end'],
          initialValue: 'center',
        },
        {
          prop: 'align',
          type: 'select',
          data: ['center', 'start', 'end'],
          initialValue: 'center',
        },
        {
          prop: 'size',
          type: 'select',
          data: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
          initialValue: 'sm',
        },
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
          type: 'switch',
          prop: 'fullWidth',
          initialValue: false,
        },
      ]}
    >
      <Button iconRight={{ name: 'arrow-east' }}>Button</Button>
    </SandboxLayout>
  );
};

SandboxButton.displayName = '@v2/Route.Sandbox.Button';
