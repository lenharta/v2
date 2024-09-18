import * as React from 'react';
import { Title } from '@/core';
import { Hero, Main } from '@/app';

export const ProjectsThunkworks: React.FC<{}> = ({}) => {
  return (
    <React.Fragment>
      <Hero>
        <Title h1>
          Projects | <span className="accent-text">Thunkworks</span>
        </Title>
      </Hero>
      <Main>
        <Title h2>Overview</Title>
      </Main>
    </React.Fragment>
  );
};
