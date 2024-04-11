import { Page } from '@/app/page';
import { Button, Title } from '@/core';
import React from 'react';

type DemoRouteComponent = React.FC<{}>;

const colorData = [
  { token: 'var(--c-red)', label: 'Red' },
  { token: 'var(--c-orange)', label: 'Orange' },
  { token: 'var(--c-yellow)', label: 'Yellow' },
  { token: 'var(--c-green)', label: 'Green' },
  { token: 'var(--c-mint)', label: 'Mint' },
  { token: 'var(--c-teal)', label: 'Teal' },
  { token: 'var(--c-cyan)', label: 'Cyan' },
  { token: 'var(--c-blue)', label: 'Blue' },
  { token: 'var(--c-indigo)', label: 'Indigo' },
  { token: 'var(--c-purple)', label: 'Purple' },
  { token: 'var(--c-pink)', label: 'Pink' },
  { token: 'var(--c-brown)', label: 'Brown' },
  { token: 'var(--c-gray)', label: 'Gray' },
];

export const Demo: DemoRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title>Demo Route</Title>
      </Page.Hero>
      <Page.Content>
        <Button></Button>
        {colorData.map(({ label, token }) => (
          <div
            key={label}
            style={{ backgroundColor: token, color: 'black', height: 200, width: 400 }}
            children={label}
          />
        ))}
      </Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Demo.displayName = '@v2/app/Route.Demo';
