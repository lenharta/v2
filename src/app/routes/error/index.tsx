import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Title } from '@/core';
import { Page, Hero, Section } from '@/app';

const ErrorHero = () => (
  <Hero>
    <Title h1>Page Not Found | 404</Title>
  </Hero>
);

const ErrorRoute: React.FC<{}> = () => {
  const homePageLink = <Link to="/">home page.</Link>;

  return (
    <Page>
      <ErrorHero />
      <Section>
        <Title h2>Sorry, we couldn't find that page.</Title>
        <Text>
          The page you are looking for might have been removed, had its name changed, or is
          temporarily unavailable. Try searching for it or go back to the {homePageLink}
        </Text>
      </Section>
    </Page>
  );
};

ErrorRoute.displayName = '@v2/Route.Error';
export { ErrorRoute };
