import { Button, Floating } from '@/core';
import React from 'react';

const DemoFloatingContent = () => (
  <div className="v2-demo-floating-box">
    <span>Floating Box</span>
  </div>
);

interface DemoFloatingProps {}

const DemoFloating = (props: DemoFloatingProps) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <Floating isOpen={isOpen} onChange={setOpen} placement="right" {...props}>
      <Floating.Target children={<Button>Floating Target</Button>} />
      <Floating.Box children={<DemoFloatingContent />} />
    </Floating>
  );
};

export { DemoFloating };
