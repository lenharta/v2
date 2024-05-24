import React from 'react';
import { DemoRoot } from '../DemoRoot';
import { Box, Button, Floating, Text } from '@/core';

const DemoFloatingContent = () => (
  <Box>
    <Text>Floating Box</Text>
  </Box>
);

const DemoFloating = () => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <DemoRoot>
      <Floating isOpen={isOpen} onChange={setOpen} placement="bottom">
        <Floating.Target children={<Button>Floating Target</Button>} />
        <Floating.Box children={<DemoFloatingContent />} />
      </Floating>
    </DemoRoot>
  );
};

export { DemoFloating };
