import * as React from 'react';
import { Title } from '@/core';
import { APP_TECH_DATA } from '@/data';
import { Hero, Main, Page, PageProps, Section } from '@/app';
import { StackTable } from './sections/stack-table';

export type StackRouteProps = PageProps & {};

export type StackRouteComponent = {
  (props: StackRouteProps): React.ReactNode;
  displayName?: string;
};

export const Stack: StackRouteComponent = (props) => {
  return (
    <Page {...props}>
      <Hero>
        <Title>Stack</Title>
      </Hero>
      <Main>
        <Section>
          <StackTable rows={APP_TECH_DATA} />
        </Section>
      </Main>
    </Page>
  );
};

Stack.displayName = '@v2/Route.Stack';
