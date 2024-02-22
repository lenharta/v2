import * as React from 'react';
import { Control } from '@/common';

export const DemoControlDefault = () => {
  const [value, setValue] = React.useState('item-2');
  return (
    <Control
      value={value}
      onChange={setValue}
      data={['item-1', 'item-2', 'item-3', 'item-4', 'item-5']}
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
      ]}
    />
  );
};
