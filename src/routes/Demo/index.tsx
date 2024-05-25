import React from 'react';
import { Title } from '@/core';
import { DemoError } from './error';
import { Hero, Main, Page, Section } from '@/common';

import { DemoControl } from './DemoControl';
import { DemoFloating } from './DemoFloating';
import { DemoAccordion } from './DemoAccordion';
import { DemoDisclosure } from './DemoDisclosure';

interface DemoProps {}

type DemoComponent = React.FC<DemoProps> & {
  Error: typeof DemoError;
};

const Demo: DemoComponent = () => {
  return (
    <Page>
      <Hero>
        <Title>Demo</Title>
      </Hero>
      <Main>
        <Section>
          <DemoDisclosure />
          <DemoAccordion />
          <DemoFloating />
          <DemoControl />
        </Section>
      </Main>
    </Page>
  );
};

Demo.Error = DemoError;
Demo.displayName = '@v2/Demo';
export { Demo };
