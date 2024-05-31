import React from 'react';
import { Title } from '@/core';
import { DemoError } from './error';
import { Hero, Main, Page } from '@/common';
import { DemoCheckbox } from './DemoCheckbox';

type DemoComponent = React.FC<{}> & {
  Error: typeof DemoError;
};

const Demo: DemoComponent = () => {
  return (
    <Page>
      <Hero title={<Title>Demo</Title>} />
      <Main>
        <DemoCheckbox />
        {/* <DemoAccordion /> */}
        {/* <DemoButton /> */}
        {/* <DemoControl /> */}
        {/* <DemoDisclosure /> */}
        {/* <DemoDivider /> */}
        {/* <DemoFloating /> */}
        {/* <DemoRadio /> */}
        {/* <DemoSection /> */}
        {/* <DemoTabs /> */}
        {/* <DemoToggle /> */}
      </Main>
    </Page>
  );
};

Demo.Error = DemoError;
Demo.displayName = '@v2/Demo';
export { Demo };
