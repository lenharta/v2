import * as React from 'react';
import { Control } from '@/core';
import { SANDBOX_META, SandboxLayout } from '../sandbox-layout';

export const SandboxControl: React.FC<{}> = ({}) => {
  const [value, setValue] = React.useState('option-a');
  return (
    <React.Fragment>
      <SandboxLayout
        name="Control"
        href={SANDBOX_META.control}
        containerStyle={{
          maxWidth: 800,
        }}
        controls={[
          {
            prop: 'orientation',
            type: 'segmented',
            data: ['horizontal', 'vertical'],
            initialValue: 'horizontal',
          },
          {
            type: 'select',
            prop: 'variant',
            data: ['default', 'accent'],
            initialValue: 'default',
          },
          {
            prop: 'size',
            type: 'select',
            data: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            initialValue: 'sm',
          },
          {
            prop: 'grow',
            type: 'switch',
            initialValue: false,
          },
        ]}
      >
        <Control
          value={value}
          onChange={setValue}
          items={[
            { value: 'option-a', label: 'Option A' },
            { value: 'option-b', label: 'Option B' },
            { value: 'option-c', label: 'Option C' },
          ]}
        />
      </SandboxLayout>
    </React.Fragment>
  );
};
