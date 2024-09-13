import * as React from 'react';
import * as Router from 'react-router-dom';
import { Text, Title } from '@/core';
import { Hero, Main, Page, PageProps, Section } from '@/app';
import { Checkbox } from '@/core/components/Checkbox';

export type WorkspaceRouteProps = PageProps & {};

export type WorkspaceRouteComponent = {
  (props: WorkspaceRouteProps): React.ReactNode;
  displayName?: string;
};

const CheckboxGroupDemo = () => {
  const [value, setValue] = React.useState<string[]>([]);
  return (
    <Checkbox.Group value={value} onChange={setValue}>
      <Checkbox value="opt-apple" label="Apple" />
      <Checkbox value="opt-banana" label="Banana" />
      <Checkbox value="opt-blueberry" label="Blueberry" />
      <Checkbox value="opt-orange" label="Orange" />
      <Checkbox value="opt-peach" label="Peach" />
      <Checkbox value="opt-strawberry" label="Strawberry" />
    </Checkbox.Group>
  );
};

const CheckboxDemo = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <React.Fragment>
      <Checkbox
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        label="Single Checkbox Label"
      />
    </React.Fragment>
  );
};

export const Workspace: WorkspaceRouteComponent = (props) => {
  const homeLink = <Router.Link to="/">go home.</Router.Link>;
  return (
    <Page {...props}>
      <Hero>
        <Title>Workspace</Title>
      </Hero>
      <Main>
        <Section>
          <Text>
            This page is currently under contruction, check back later for updates. Click here to{' '}
            {homeLink}
          </Text>

          <CheckboxDemo />
          <CheckboxGroupDemo />
        </Section>
      </Main>
    </Page>
  );
};

Workspace.displayName = '@v2/Route.Workspace';
