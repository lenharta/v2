import React from 'react';
import { Title } from '@/core';
import { OverviewError } from './error';
import { Hero, Main, Page } from '@/common';
import { DemoAction, DemoTabs } from '@/demo';

type Component = React.FC<{}> & {
  Error: typeof OverviewError;
};

const Overview: Component = ({}) => {
  return (
    <Page>
      <Hero>
        <Title>Overview</Title>
      </Hero>
      <Main>
        <DemoTabs />
        <DemoAction />
      </Main>
    </Page>
  );
};

Overview.displayName = '@v2/Overview';
Overview.Error = OverviewError;
export { Overview };
