import React from 'react';
import { Title } from '@/core';
import { DemoError } from './error';
import { Hero, Main, Page } from '@/common';

import { DemoDivider } from './DemoDivider';

type DemoComponent = React.FC<{}> & {
  Error: typeof DemoError;
};

const Demo: DemoComponent = () => {
  return (
    <Page>
      <Hero children={<Title>Demo</Title>} />
      <Main>
        <DemoDivider />
        {/* <DemoAccordion /> */}
      </Main>
    </Page>
  );
};

Demo.Error = DemoError;
Demo.displayName = '@v2/Demo';
export { Demo };
