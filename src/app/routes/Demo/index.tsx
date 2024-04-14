import * as React from 'react';
import { Page, Section } from '@/app/common';
import { Box, Title } from '@/core';

type DemoRouteComponent = React.FC<{}>;

export const Demo: DemoRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title h1>Demo</Title>
      </Page.Hero>
      <Page.Content>
        <Section>
          <Section.Header>
            <Title h2>Section Header</Title>
          </Section.Header>
          <Section.Content>
            <Box className="section-box-demo-component--left">span</Box>
            <Box className="section-box-demo-component--right">span</Box>
          </Section.Content>
        </Section>
      </Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Demo.displayName = '@v2/app/Route.Demo';
