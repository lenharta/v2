import * as React from 'react';
import { Switch } from '@/core';
import { SandboxLayout } from '../sandbox-layout';

export const SandboxSwitch: React.FC<{}> = ({}) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <React.Fragment>
      <SandboxLayout name="Switch">
        <Switch
          label="Switch Label"
          onChange={(event) => setChecked(event.currentTarget.checked)}
          checked={checked}
        />
      </SandboxLayout>
    </React.Fragment>
  );
};
