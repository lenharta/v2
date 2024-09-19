import * as React from 'react';
import { Select } from '@/core';
import { SANDBOX_META, SandboxLayout } from '../sandbox-layout';

export const SandboxSelect: React.FC<{}> = ({}) => {
  const [value, setValue] = React.useState<string>();
  const [isOpen, onOpenChange] = React.useState(false);
  return (
    <SandboxLayout
      name="Select"
      href={SANDBOX_META.select}
      containerStyle={{
        maxWidth: 300,
      }}
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
        {
          type: 'select',
          prop: 'placement',
          initialValue: 'bottom',
          data: [
            'top',
            'top-end',
            'top-start',
            'left',
            'left-end',
            'left-start',
            'right',
            'right-end',
            'right-start',
            'bottom',
            'bottom-end',
            'bottom-start',
          ],
        },
      ]}
    >
      <Select
        isOpen={isOpen}
        value={value}
        onChange={setValue}
        onOpenChange={onOpenChange}
        data={[
          { label: 'Option 1', value: 'option-1' },
          { label: 'Option 2', value: 'option-2' },
          { label: 'Option 3', value: 'option-3' },
          { label: 'Option 4', value: 'option-4' },
          { label: 'Option 5', value: 'option-5' },
          { label: 'Option 6', value: 'option-6' },
          { label: 'Option 7', value: 'option-7' },
          { label: 'Option 8', value: 'option-8' },
          { label: 'Option 9', value: 'option-9' },
        ]}
      />
    </SandboxLayout>
  );
};

SandboxSelect.displayName = '@v2/Sandbox.Select';
