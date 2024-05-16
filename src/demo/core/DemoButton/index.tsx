import React from 'react';
import { Button } from '@/core';
import { Section } from '@/common';

const DemoButton = () => {
  return (
    <React.Fragment>
      <Section>
        <Button>Button (default)</Button>
        <Button>Button (content left)</Button>
        <Button>Button (content right)</Button>
      </Section>
    </React.Fragment>
  );
};

export { DemoButton };
