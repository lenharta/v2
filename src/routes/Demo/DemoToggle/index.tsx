import * as React from 'react';
import { Toggle } from '@core';
import { DemoHero } from '../DemoHero';

type DemoToggleFactory = React.FC<{}> & {
  Default: React.FC<{}>;
};

const DemoToggleDefault: DemoToggleFactory['Default'] = (props) => {
  const {} = props;
  const [checked, setChecked] = React.useState(false);
  return (
    <React.Fragment>
      <Toggle
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        variant="default"
        size="xs"
      />
      <Toggle
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        variant="default"
        size="sm"
      />
      <Toggle
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        variant="default"
        size="md"
      />
      <Toggle
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        variant="default"
        size="lg"
      />
      <Toggle
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        variant="default"
        size="xl"
      />
    </React.Fragment>
  );
};

const DemoToggle: DemoToggleFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <DemoHero title="Demo | Toggle" />
      <DemoToggle.Default />
    </React.Fragment>
  );
};

DemoToggle.Default = DemoToggleDefault;
DemoToggle.displayName = '@v2/Demo.Toggle';
export { DemoToggle };
