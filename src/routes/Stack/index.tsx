import * as React from 'react';
import { Page } from '@/app';
import { StackHero } from './StackHero';
import { StackIntro } from './StackIntro';
import { StackTable } from './StackTable';

type StackFactory = React.FC<{}> & {
  Hero: typeof StackHero;
  Intro: typeof StackIntro;
  Table: typeof StackTable;
};

const Stack: StackFactory = ({}) => (
  <Page>
    <Stack.Hero />
    <Stack.Intro />
    <Stack.Table />
  </Page>
);

Stack.Hero = StackHero;
Stack.Intro = StackIntro;
Stack.Table = StackTable;
Stack.displayName = '@v2/Stack.Route';
export { Stack };
