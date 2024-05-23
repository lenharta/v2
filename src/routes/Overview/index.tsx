import React from 'react';
import { Text, Title } from '@/core';
import { OverviewError } from './error';
import { Hero, Main, Page, Section } from '@/common';

interface OverviewProps {}

type OverviewComponent = React.FC<OverviewProps> & {
  Error: typeof OverviewError;
};

const Overview: OverviewComponent = () => {
  return (
    <Page>
      <Hero>
        <Title>Overview</Title>
      </Hero>
      <Main>
        <Section>
          <Title>Section Title</Title>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas numquam ex recusandae
            velit sequi quae qui! Animi ea unde, asperiores ratione dolorem facere consectetur fuga
            iusto, quae impedit perferendis deserunt.t
          </Text>
        </Section>
      </Main>
    </Page>
  );
};

Overview.Error = OverviewError;
Overview.displayName = '@v2/Overview';
export { Overview };
