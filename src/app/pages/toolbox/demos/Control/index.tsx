import * as React from 'react';
import { Control } from '@/common';
import { useThemeCTX } from '@/store';

export const DemoControlDefault = () => {
  const [value, setValue] = React.useState('item-2');
  return (
    <Control
      value={value}
      onChange={setValue}
      data={[
        'item-1',
        'item-2',
        'item-3',
        'item-4',
        'item-5',
        'item-6',
        'item-7',
        'item-8',
        'item-9',
      ]}
    />
  );
};

export const DemoControlComplex = () => {
  const [value, setValue] = React.useState('item-2');
  return (
    <Control
      value={value}
      onChange={setValue}
      data={[
        { value: 'item-1', label: 'Control Option' },
        { value: 'item-2', label: 'Control Option' },
        { value: 'item-3', label: 'Control Option' },
        { value: 'item-4', label: 'Control Option' },
        { value: 'item-5', label: 'Control Option' },
        { value: 'item-6', label: 'Control Option' },
        { value: 'item-7', label: 'Control Option' },
        { value: 'item-8', label: 'Control Option' },
        { value: 'item-9', label: 'Control Option' },
      ]}
    />
  );
};

export const DemoControlVertical = () => {
  const [value, setValue] = React.useState('item-2');
  return (
    <Control
      value={value}
      onChange={setValue}
      orientation="vertical"
      data={[
        { value: 'item-1', label: 'Control Option' },
        { value: 'item-2', label: 'Control Option' },
        { value: 'item-3', label: 'Control Option' },
        { value: 'item-4', label: 'Control Option' },
        { value: 'item-5', label: 'Control Option' },
        { value: 'item-6', label: 'Control Option' },
        { value: 'item-7', label: 'Control Option' },
        { value: 'item-8', label: 'Control Option' },
        { value: 'item-9', label: 'Control Option' },
      ]}
    />
  );
};

export const DemoControlFullWidth = () => {
  const [value, setValue] = React.useState('item-2');
  return (
    <Control
      size="xl"
      value={value}
      onChange={setValue}
      fullWidth
      data={[
        { value: 'item-1', label: 'Control Option' },
        { value: 'item-2', label: 'Control Option' },
        { value: 'item-3', label: 'Control Option' },
        { value: 'item-4', label: 'Control Option' },
        { value: 'item-5', label: 'Control Option' },
        { value: 'item-6', label: 'Control Option' },
        { value: 'item-7', label: 'Control Option' },
        { value: 'item-8', label: 'Control Option' },
        { value: 'item-9', label: 'Control Option' },
      ]}
    />
  );
};

export const DemoControlThemeState = () => {
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
