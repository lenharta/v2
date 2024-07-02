import * as React from 'react';
import { Page } from '@/app';
import { StackHero } from './StackHero';

type StackFactory = React.FC<{}> & {
  Hero: typeof StackHero;
};

const Stack: StackFactory = ({}) => (
  <Page>
    <Stack.Hero />
  </Page>
);

Stack.Hero = StackHero;
Stack.displayName = '@v2/Stack.Route';
export { Stack };
