import React from 'react';
import { Stack, Text } from '@/core';
import { Hero, Page, Section } from '@/common';
import { HomeError } from './HomeError';
import { HomeTitle } from './HomeTitle';

type HomeRouteFactory = React.FC<{}> & {
  Error: typeof HomeError;
};

const commonCSS: React.CSSProperties = {
  width: 'var(--s-6)',
  height: 'var(--s-6)',
};

const surfaceTokens = {
  ['background-0']: 'var(--c-background-0)',
  ['background-1']: 'var(--c-background-1)',
  ['background-2']: 'var(--c-background-2)',
  ['background-3']: 'var(--c-background-3)',
  ['background-0-enabled']: 'var(--c-background-0-enabled)',
  ['background-0-hovered']: 'var(--c-background-0-hovered)',
  ['background-0-pressed']: 'var(--c-background-0-pressed)',
  ['background-0-selected']: 'var(--c-background-0-selected)',
  ['background-1-enabled']: 'var(--c-background-1-enabled)',
  ['background-1-hovered']: 'var(--c-background-1-hovered)',
  ['background-1-pressed']: 'var(--c-background-1-pressed)',
  ['background-1-selected']: 'var(--c-background-1-selected)',
  ['background-2-enabled']: 'var(--c-background-2-enabled)',
  ['background-2-hovered']: 'var(--c-background-2-hovered)',
  ['background-2-pressed']: 'var(--c-background-2-pressed)',
  ['background-2-selected']: 'var(--c-background-2-selected)',
  ['background-3-enabled']: 'var(--c-background-3-enabled)',
  ['background-3-hovered']: 'var(--c-background-3-hovered)',
  ['background-3-pressed']: 'var(--c-background-3-pressed)',
  ['background-3-selected']: 'var(--c-background-3-selected)',
  ['background-4-enabled']: 'var(--c-background-4-enabled)',
  ['background-4-hovered']: 'var(--c-background-4-hovered)',
  ['background-4-pressed']: 'var(--c-background-4-pressed)',
  ['background-4-selected']: 'var(--c-background-4-selected)',
};

type Scheme = 'primary' | 'primary-interactive' | 'secondary' | 'secondary-interactive';

const SurfaceSwatch = (props: { s: Scheme }) => {
  const { s = 'primary' } = props;
  return (
    <div
      children={s}
      data-scheme={s}
      data-variant="elevated"
      className="v2-action"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: 'var(--s-10)',
        padding: 'var(--s-8)',
      }}
    />
  );
};

const Home: HomeRouteFactory = ({}) => {
  return (
    <Page>
      <Hero title={<HomeTitle />} />
      <Section>
        <Text>Home</Text>
        <Stack data-scheme="primary" gap="sm">
          <SurfaceSwatch s="primary" />
          <SurfaceSwatch s="primary-interactive" />
          <SurfaceSwatch s="secondary" />
          <SurfaceSwatch s="secondary-interactive" />
        </Stack>
        <Stack data-scheme="secondary" gap="sm"></Stack>
      </Section>
    </Page>
  );
};

Home.Error = HomeError;
Home.displayName = '@v2/Home.Route';
export { Home };
