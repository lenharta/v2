import React from 'react';
import { Button, Text, Title } from '@/core';
import { Hero, Main, Page, PageProps } from '@/app';

export type HomeRouteProps = PageProps & {};

export type HomeRouteComponent = {
  (props: HomeRouteProps): React.ReactNode;
  displayName?: string;
};

export const Home: HomeRouteComponent = (props) => {
  const groupRef = React.useRef<HTMLDivElement>(null);

  return (
    <Page {...props}>
      <Hero>
        <Title>Home</Title>
      </Hero>
      <Main>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, accusantium aperiam, ex
          itaque minima eos commodi quisquam a corrupti tempora earum quod dolorem sapiente
          possimus? Harum ducimus architecto similique iusto.
        </Text>
        <Button.Group ref={groupRef}>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </Button.Group>
      </Main>
    </Page>
  );
};

Home.displayName = '@v2/Route.Home';
