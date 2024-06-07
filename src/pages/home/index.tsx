import React from 'react';
import { Stack, Text } from '@/core';
import { Hero, Page, Section } from '@/common';
import { HomeError } from './HomeError';
import { HomeTitle } from './HomeTitle';

type HomeRouteFactory = React.FC<{}> & {
  Error: typeof HomeError;
};

const Home: HomeRouteFactory = ({}) => {
  return (
    <Page>
      <Hero title={<HomeTitle />} />
      <Section>
        <Text>Home</Text>
        <Stack style={{ gap: 'var(--s-3)' }}>
          <div style={{ width: 'var(--s-16)', height: 'var(--s-1)', background: 'coral' }} />
          <div style={{ width: 'var(--s-16)', height: 'var(--s-2)', background: 'coral' }} />
          <div style={{ width: 'var(--s-16)', height: 'var(--s-3)', background: 'coral' }} />
          <div style={{ width: 'var(--s-16)', height: 'var(--s-4)', background: 'coral' }} />
          <div style={{ width: 'var(--s-16)', height: 'var(--s-5)', background: 'coral' }} />
          <div style={{ width: 'var(--s-16)', height: 'var(--s-6)', background: 'coral' }} />
          <div style={{ width: 'var(--s-16)', height: 'var(--s-7)', background: 'coral' }} />
          <div style={{ width: 'var(--s-16)', height: 'var(--s-8)', background: 'coral' }} />
          <div style={{ width: 'var(--s-16)', height: 'var(--s-9)', background: 'coral' }} />
          <div style={{ width: 'var(--s-16)', height: 'var(--s-10)', background: 'coral' }} />
          <div style={{ width: 'var(--s-16)', height: 'var(--s-11)', background: 'coral' }} />
          <div style={{ width: 'var(--s-16)', height: 'var(--s-12)', background: 'coral' }} />
          <div style={{ width: 'var(--s-16)', height: 'var(--s-13)', background: 'coral' }} />
          <div style={{ width: 'var(--s-16)', height: 'var(--s-14)', background: 'coral' }} />
          <div style={{ width: 'var(--s-16)', height: 'var(--s-15)', background: 'coral' }} />
          <div style={{ width: 'var(--s-16)', height: 'var(--s-16)', background: 'coral' }} />
        </Stack>
      </Section>
    </Page>
  );
};

Home.Error = HomeError;
Home.displayName = '@v2/Home.Route';
export { Home };
