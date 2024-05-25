import React from 'react';
import { Control } from '@/core';
import { DemoRoot } from '../DemoRoot';

const DemoControl = () => {
  const [activeItem, setActiveItem] = React.useState('option-1');
  return (
    <DemoRoot>
      <Control
        value={activeItem}
        onItemChange={setActiveItem}
        // onChange={(event) => (event.currentTarget.value)}
        items={[
          {
            label: 'Option 1',
            value: 'option-1',
          },
          {
            label: 'Option 2',
            value: 'option-2',
          },
          {
            label: 'Option 3',
            value: 'option-3',
          },
          {
            label: 'Option 4',
            value: 'option-4',
          },
        ]}
      />
    </DemoRoot>
  );
};

export { DemoControl };
