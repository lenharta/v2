import * as React from 'react';
import { Button, Title, Transition } from '@/common';

const scaleY = {
  in: { opacity: 1, transform: 'scaleY(1)' },
  out: { opacity: 0, transform: 'scaleY(0)' },
  common: { transformOrigin: 'top' },
  transitionProperty: 'transform, opacity',
};

export const TransitionDemo = () => {
  const [mounted, setMounted] = React.useState<boolean>(false);
  return (
    <>
      <Transition
        duration={200}
        mounted={mounted}
        transition={scaleY}
        timingFunction="ease"
        keepMounted
      >
        {(transitionStyle) => <div style={transitionStyle}>Test Box</div>}
      </Transition>
      <div>
        <Button onClick={() => setMounted(true)}>Enter</Button>
        <Button onClick={() => setMounted(false)}>Exit</Button>
      </div>
    </>
  );
};

export const Toolbox = () => {
  return (
    <div className="app-shell">
      <Title h1>Toolbox</Title>
    </div>
  );
};
