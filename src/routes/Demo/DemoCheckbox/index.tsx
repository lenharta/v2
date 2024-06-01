import React from 'react';
import { Stack, Text } from '@/core';
import { DemoRoot } from '../DemoRoot';
import { Checkbox } from '@/core/components/Checkbox';

const data = [
  { value: 'light', label: 'Theme Light' },
  { value: 'dark', label: 'Theme Dark', indeterminate: true },
  { value: 'dim', label: 'Theme Dim' },
];

const DemoCheckboxSingle = () => {
  const [acceptTerms, setAcceptTerms] = React.useState<boolean>(false);
  const [allowNotifications, setAllowNotifications] = React.useState<boolean>(false);
  return (
    <Stack gap="xs">
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

const items = data.map(({ value, label, indeterminate }) => {
  return (
    <Checkbox
      key={value}
      value={value}
      label={label}
      variant="elevated"
      indeterminate={indeterminate}
    />
  );
});

const DemoCheckboxGroup = () => {
  const [selected, setSelected] = React.useState<string[]>([]);
  return (
    <Checkbox.Group value={selected} onChange={setSelected}>
      {items}
    </Checkbox.Group>
  );
};

const DemoCheckboxGroupHorizontal = () => {
  const [selected, setSelected] = React.useState<string[]>([]);
  return (
    <Checkbox.Group value={selected} onChange={setSelected} orientation="horizontal">
      {items}
    </Checkbox.Group>
  );
};

const DemoCheckboxDescription = () => {
  const [acceptTerms, setAcceptTerms] = React.useState<boolean>(false);
  return (
    <Checkbox
      label="Accept Terms & Conditions"
      variant="elevated"
      checked={acceptTerms}
      onChange={(event) => setAcceptTerms(event.currentTarget.checked)}
      description="We use essential cookies to make our site work. With your consent, we may also use
        non-essential cookies to improve user experience and analyze website traffic. By
        clicking “Accept,” you agree to our website's cookie use as described in our Cookie
        Policy. You can change your cookie settings at any time by clicking “Preferences.”"
    />
  );
};

const DemoCheckboxDescriptionAndError = () => {
  const [acceptTerms, setAcceptTerms] = React.useState<boolean>(false);
  return (
    <Checkbox
      label="Accept Terms & Conditions"
      variant="elevated"
      checked={acceptTerms}
      onChange={(event) => setAcceptTerms(event.currentTarget.checked)}
      description="We use essential cookies to make our site work. With your consent, we may also use
        non-essential cookies to improve user experience and analyze website traffic. By
        clicking “Accept,” you agree to our website's cookie use as described in our Cookie
        Policy. You can change your cookie settings at any time by clicking “Preferences.”"
      error="This is a required field, please check the box."
    />
  );
};

const DemoCheckbox = () => {
  return (
    <DemoRoot>
      <Text>Checkbox</Text>
      <Stack style={{ width: 600 }} gap="xs">
        <DemoCheckboxSingle />
        <DemoCheckboxGroup />
        <DemoCheckboxGroupHorizontal />
        <DemoCheckboxDescription />
        <DemoCheckboxDescriptionAndError />
      </Stack>
    </DemoRoot>
  );
};

export { DemoCheckbox };
