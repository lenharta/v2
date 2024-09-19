import * as React from 'react';
import * as Router from 'react-router-dom';
import { Hero, Main } from '@/app';
import { Text, Title } from '@/core';

export const Workspace: React.FC<{}> = ({}) => {
  const homeLink = <Router.Link to="/">go home.</Router.Link>;
  return (
    <React.Fragment>
      <Hero>
        <Title h1>Workspace</Title>
      </Hero>
      <Main>
        <Text className="v2-construction-message">
          This page is currently under contruction, check back later for updates. Click here to{' '}
          {homeLink}
        </Text>
      </Main>
    </React.Fragment>
  );
};
