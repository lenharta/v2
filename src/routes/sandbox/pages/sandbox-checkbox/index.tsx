import * as React from 'react';
import { Checkbox } from '@/core';
import { SandboxLayout } from '../sandbox-layout';

export const SandboxCheckbox: React.FC<{}> = ({}) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <React.Fragment>
      <SandboxLayout
        name="Checkbox"
        controls={[
          {
            type: 'switch',
            prop: 'isLoading',
            initialValue: false,
          },
          {
            type: 'switch',
            prop: 'isDisabled',
            initialValue: false,
          },
          {
            type: 'switch',
            prop: 'isReadonly',
            initialValue: false,
          },
          {
            type: 'select',
            prop: 'variant',
            data: ['accent', 'default'],
            initialValue: 'default',
          },
        ]}
      >
        <Checkbox
          label="Checkbox Label"
          onChange={(event) => setChecked(event.currentTarget.checked)}
          checked={checked}
        />
      </SandboxLayout>
    </React.Fragment>
  );
};
