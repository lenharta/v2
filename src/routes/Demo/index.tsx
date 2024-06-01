import React from 'react';
import { Title } from '@/core';
import { DemoError } from './error';
import { Hero, Main, Page } from '@/common';

import { DemoImage } from './DemoImage';
// import { DemoCheckbox } from './DemoCheckbox';
// import { DemoAccordion } from './DemoAccordion';
// import { DemoButton } from './DemoButton';
// import { DemoControl } from './DemoControl';
// import { DemoDisclosure } from './DemoDisclosure';
// import { DemoDivider } from './DemoDivider';
// import { DemoFloating } from './DemoFloating';
// import { DemoRadio } from './DemoRadio';
// import { DemoSection } from './DemoSection';
// import { DemoTabs } from './DemoTabs';
// import { DemoToggle } from './DemoToggle';

type DemoComponent = React.FC<{}> & {
  Error: typeof DemoError;
};

const Demo: DemoComponent = () => {
  return (
    <Page>
      <Hero title={<Title>Demo</Title>} />
      <Main>
        <DemoImage />
        {/* <DemoCheckbox /> */}
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
