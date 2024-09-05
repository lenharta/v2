import React from 'react';
import { Text, Title } from '@/core';
import { Hero, Main, Page, PageProps } from '@/app';

export type ErrorRouteProps = PageProps & {};

export type ErrorRouteComponent = {
  (props: ErrorRouteProps): React.ReactNode;
  displayName?: string;
};

export const Error: ErrorRouteComponent = (props) => {
  return (
    <Page {...props}>
      <Hero>
        <Title>Error</Title>
      </Hero>
      <Main>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, accusantium aperiam, ex
          itaque minima eos commodi quisquam a corrupti tempora earum quod dolorem sapiente
          possimus? Harum ducimus architecto similique iusto.
        </Text>
      </Main>
    </Page>
  );
};

Error.displayName = '@v2/Route.Error';
