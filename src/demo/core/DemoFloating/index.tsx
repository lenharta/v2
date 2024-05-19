import { Section } from '@/common';
import { Box, Button, Floating, Title } from '@/core';
import React from 'react';

const DemoFloating = () => {
  const [isOpen, setOpen] = React.useState(true);
  return (
    <Section>
      <Box className="v2-demo-floating-root">
        <Floating isOpen={isOpen} onChange={setOpen}>
          <Floating.Target>
            <Button>Floating Target</Button>
          </Floating.Target>
          <Floating.Box className="v2-demo-floating-box">
            <span>Floating Box</span>
          </Floating.Box>
        </Floating>
      </Box>
    </Section>
  );
};

export { DemoFloating };
