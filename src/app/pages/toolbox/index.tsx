import React from 'react';
import { Page } from '@/app/layouts';
import { Button, Title, Transition } from '@/common';

const scaleY = {
  in: { opacity: 1, transform: 'scaleY(1)' },
  out: { opacity: 0, transform: 'scaleY(0)' },
  common: { transformOrigin: 'top' },
  transitionProperty: 'transform, opacity',
};

const TransitionDemo = () => {
  const [mounted, setMounted] = React.useState<boolean>(false);
  console.log(mounted);
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
    <Page>
      <Page.Hero>
        <Title h1>Toolbox</Title>
      </Page.Hero>
      <Page.Content>
        <TransitionDemo />
      </Page.Content>
    </Page>
  );
};
