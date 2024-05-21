import React from 'react';
import { Box, Button, Floating } from '@/core';
import { Section } from '@/common';

const DemoFloating = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <Section>
      <Box className="v2-demo-floating-root">
        <Floating isOpen={isOpen} onChange={setOpen} placement="right">
          <Floating.Target>
            <Button>Floating Target</Button>
          </Floating.Target>
          <Floating.Box>
            <div className="v2-demo-floating-box">
              <span>Floating Box</span>
            </div>
          </Floating.Box>
        </Floating>
      </Box>
    </Section>
  );
};

export { DemoFloating };
