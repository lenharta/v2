import * as React from 'react';
import { Title } from '@/core';
import { Hero, Main } from '@/app';

export const ProjectsTabIndex: React.FC<{}> = ({}) => {
  return (
    <React.Fragment>
      <Hero>
        <Title h1>
          Projects | <span className="accent-text">TabIndex</span>
        </Title>
      </Hero>
      <Main>
        <Title h2>Overview</Title>
      </Main>
    </React.Fragment>
  );
};
