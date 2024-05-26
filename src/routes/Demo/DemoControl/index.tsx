import React from 'react';
import { Box, Control } from '@/core';
import { DemoRoot } from '../DemoRoot';

const DemoControl = () => {
  const [activeItem, setActiveItem] = React.useState('option-1');
  return (
    <DemoRoot>
      <Box className="v2-demo-box-control">
        <Control
          onItemChange={setActiveItem}
          value={activeItem}
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
      </Box>
    </DemoRoot>
  );
};

export { DemoControl };
