import React from 'react';
import { Box, Stack, Text } from '@/core';
import { DemoRoot } from '../DemoRoot';
import { Checkbox } from '@/core/components/Checkbox';

const data = [
  { value: 'light', label: 'Theme Light' },
  { value: 'dark', label: 'Theme Dark' },
  { value: 'dim', label: 'Theme Dim' },
];

const DemoCheckboxSingle = () => {
  const [acceptTerms, setAcceptTerms] = React.useState<boolean>(false);
  const [allowNotifications, setAllowNotifications] = React.useState<boolean>(false);

  console.log('acceptTerms', acceptTerms);
  console.log('allowNotifications', allowNotifications);

  return (
    <Stack>
      <Checkbox
        label="Accept Terms & Conditions"
        checked={acceptTerms}
        onChange={(event) => setAcceptTerms(event.currentTarget.checked)}
      />

      <Checkbox
        label="Allow Push Notifications"
        checked={allowNotifications}
        onChange={(event) => setAllowNotifications(event.currentTarget.checked)}
      />
    </Stack>
  );
};

const DemoCheckboxMultiple = () => {
  const [selected, setSelected] = React.useState<string[]>([]);

  return (
    <Checkbox.Group value={selected} onChange={setSelected}>
      <Checkbox value="option-1" label="Option 1" />
      <Checkbox value="option-2" label="Option 2" />
      <Checkbox value="option-3" label="Option 3" />
    </Checkbox.Group>
  );
};

const DemoCheckbox = () => {
  return (
    <DemoRoot>
      <Text>Checkbox</Text>
      <DemoCheckboxSingle />
      <DemoCheckboxMultiple />
    </DemoRoot>
  );
};

export { DemoCheckbox };
