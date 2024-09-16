import * as React from 'react';
import { APP_TECH_DATA } from '@/data';
import { Main, Page, PageProps } from '@/app';

import { StackHero } from './sections/stack-hero';
import { StackIntro } from './sections/stack-intro';
import { StackTable } from './sections/stack-table';

export type StackRouteComponent = React.FC<PageProps> & {
  Hero: typeof StackHero;
  Intro: typeof StackIntro;
  Table: typeof StackTable;
};

export const Stack: StackRouteComponent = (props) => {
  return (
    <Page {...props}>
      <Stack.Hero />
      <Main>
        <Stack.Intro />
        <Stack.Table rows={APP_TECH_DATA} />
      </Main>
    </Page>
  );
};

Stack.Hero = StackHero;
Stack.Intro = StackIntro;
Stack.Table = StackTable;
Stack.displayName = '@v2/Route.Stack';
