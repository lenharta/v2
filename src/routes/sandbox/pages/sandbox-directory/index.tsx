import * as React from 'react';
import * as Router from 'react-router-dom';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/app';

const SandboxDirectoryTile = (props: { value: string; label: string }) => {
  const { value, label } = props;
  return (
    <Router.Link to={value} className="v2-sandbox-directory-tile-item">
      {label}
    </Router.Link>
  );
};

export const SandboxDirectory: React.FC<{}> = ({}) => {
  return (
    <React.Fragment>
      <Hero>
        <Title h1>
          Sandbox | <span className="v2-accent-text">Directory</span>
        </Title>
      </Hero>
      <Main>
        <Section className="v2-sandbox-directory-tile-group">
          <SandboxDirectoryTile value="/sandbox/accordion" label="Accordion" />
          <SandboxDirectoryTile value="/sandbox/action" label="Action" />
          <SandboxDirectoryTile value="/sandbox/button" label="Button" />
          <SandboxDirectoryTile value="/sandbox/checkbox" label="Checkbox" />
          <SandboxDirectoryTile value="/sandbox/select" label="Select" />
          <SandboxDirectoryTile value="/sandbox/switch" label="Switch" />
        </Section>
      </Main>
    </React.Fragment>
  );
};

SandboxDirectory.displayName = '@v2/Sandbox.Directory';
