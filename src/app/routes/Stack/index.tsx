import * as React from 'react';
import { Page } from '@/app';
import { StackHero } from './StackHero';
import { StackIntro } from './StackIntro';

type StackFactory = React.FC<{}> & {
  Hero: typeof StackHero;
  Intro: typeof StackIntro;
};

const Stack: StackFactory = ({}) => (
  <Page>
    <Stack.Hero />
    <Stack.Intro />
  </Page>
);

Stack.Hero = StackHero;
Stack.Intro = StackIntro;
Stack.displayName = '@v2/Stack.Route';
export { Stack };
