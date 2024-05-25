import React from 'react';
import { Title } from '@/core';
import { DemoError } from './error';
import { DemoFloating } from '@/demo';
import { Hero, Main, Page, Section } from '@/common';
import { DemoControl } from './DemoControl';

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
