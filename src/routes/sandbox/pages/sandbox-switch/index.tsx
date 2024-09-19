import * as React from 'react';
import { Switch } from '@/core';
import { SANDBOX_META, SandboxLayout } from '../sandbox-layout';

export const SandboxSwitch: React.FC<{}> = ({}) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <React.Fragment>
      <SandboxLayout
        name="Switch"
        href={SANDBOX_META.switch}
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
        ]}
      >
        <Switch
          label="Switch Label"
          onChange={(event) => setChecked(event.currentTarget.checked)}
          checked={checked}
        />
      </SandboxLayout>
    </React.Fragment>
  );
};
