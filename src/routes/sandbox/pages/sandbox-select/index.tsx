import { Select } from '@/core';
import { SandboxLayout } from '../sandbox-layout';
import React from 'react';

export const SandboxSelect: React.FC<{}> = ({}) => {
  const [value, setValue] = React.useState<string>();
  const [isOpen, onOpenChange] = React.useState(false);
  return (
    <SandboxLayout
      name="Select"
      controls={[
        { type: 'switch', initialValue: false, prop: 'isDisabled' },
        { type: 'switch', initialValue: false, prop: 'isReadonly' },
      ]}
    >
      <Select
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onChange={setValue}
        value={value}
        data={[
          { label: 'Option 1', value: 'option-1' },
          { label: 'Option 2', value: 'option-2' },
          { label: 'Option 3', value: 'option-3' },
          { label: 'Option 4', value: 'option-4' },
          { label: 'Option 5', value: 'option-5' },
        ]}
      />
    </SandboxLayout>
  );
};

SandboxSelect.displayName = '@v2/Sandbox.Select';
