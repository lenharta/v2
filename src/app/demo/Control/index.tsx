import * as React from 'react';
import { Page, Section } from '@/app/layouts';
import { Control } from '@/common';
import { useThemeCTX } from '@/store';

const DemoDefault = () => {
  const [value, setValue] = React.useState('item-2');
  return (
    <Control
      value={value}
      onChange={setValue}
      data={['item-1', 'item-2', 'item-3', 'item-4', 'item-5']}
    />
  );
};

export const DemoComplex = () => {
  const [value, setValue] = React.useState('item-2');
  return (
    <Control
      value={value}
      onChange={setValue}
      data={[
        { value: 'item-1', label: 'Control Option #1' },
        { value: 'item-2', label: 'Control Option #2' },
        { value: 'item-3', label: 'Control Option #3' },
        { value: 'item-4', label: 'Control Option #4' },
        { value: 'item-5', label: 'Control Option #5' },
      ]}
    />
  );
};

export const DemoVertical = () => {
  const [value, setValue] = React.useState('item-2');
  return (
    <Control
      orientation="vertical"
      value={value}
      onChange={setValue}
      data={[
        { value: 'item-1', label: 'Control Option #1' },
        { value: 'item-2', label: 'Control Option #2' },
        { value: 'item-3', label: 'Control Option #3' },
        { value: 'item-4', label: 'Control Option #4' },
        { value: 'item-5', label: 'Control Option #5' },
      ]}
    />
  );
};

export const DemoFullWidth = () => {
  const [value, setValue] = React.useState('item-2');
  return (
    <Control
      fullWidth
      value={value}
      onChange={setValue}
      data={[
        { value: 'item-1', label: 'Control Option #1' },
        { value: 'item-2', label: 'Control Option #2' },
        { value: 'item-3', label: 'Control Option #3' },
        { value: 'item-4', label: 'Control Option #4' },
        { value: 'item-5', label: 'Control Option #5' },
      ]}
    />
  );
};

export const DemoThemeMode = () => {
  const { state, setMode } = useThemeCTX();
  return (
    <Control
      value={state.mode}
      onChange={setMode}
      fullWidth
      data={[
        { value: 'light', label: 'Light Mode' },
        { value: 'dark', label: 'Dark Mode' },
        { value: 'dim', label: 'Dim Mode' },
      ]}
    />
  );
};

export const DemoControl = () => {
  return (
    <Page>
      <Page.Hero title="Demo | Control" />
      <Page.Content>
        <Section>
          <DemoDefault />
          <DemoComplex />
          <DemoVertical />
          <DemoFullWidth />
          <DemoThemeMode />
        </Section>
      </Page.Content>
    </Page>
  );
};
