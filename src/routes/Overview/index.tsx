import React from 'react';
import { OverviewError } from './error';
import { Hero, Main, Page, Section } from '@/common';
import { Tabs, Text, Title, getTokenValue } from '@/core';
import { ACCENT } from '@/types';

type Component = React.FC<{}> & {
  Error: typeof OverviewError;
};

interface TokenColorSwatchProps {
  name: keyof typeof ACCENT;
}

const TokenColorSwatch = (props: TokenColorSwatchProps) => {
  const { name = 'blue' } = props;
  const tokenBase = `c-${name}`;
  return (
    <div
      children={tokenBase}
      className="v2-color-swatch"
      style={{
        backgroundColor: getTokenValue(`${tokenBase}-A100`),
        color: getTokenValue(tokenBase),
      }}
    />
  );
};

const DemoSection = () => {
  return (
    <Section>
      <Title>Section</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis modi debitis consequatur
        cumque saepe recusandae eligendi optio beatae doloribus minus, atque maxime architecto,
        illum aliquam, voluptatem minima tempore corporis iure?
      </Text>
    </Section>
  );
};

const DemoTabsUncontrolled = () => {
  return (
    <Section>
      <Tabs defaultValue="tab-1">
        <Tabs.List>
          <Tabs.Item value="tab-1" label="Tab #1" />
          <Tabs.Item value="tab-2" label="Tab #2" />
          <Tabs.Item value="tab-3" label="Tab #3" />
          <Tabs.Item value="tab-4" label="Tab #4" />
        </Tabs.List>
        <Tabs.Panel value="tab-1" children={<div>Tabs Panel #1</div>} />
        <Tabs.Panel value="tab-2" children={<div>Tabs Panel #2</div>} />
        <Tabs.Panel value="tab-3" children={<div>Tabs Panel #3</div>} />
        <Tabs.Panel value="tab-4" children={<div>Tabs Panel #4</div>} />
      </Tabs>
    </Section>
  );
};

const DemoTabsControlled = () => {
  const [state, dispatch] = React.useState('tab-1');
  console.log(state);
  return (
    <Section>
      <Tabs value={state} onChange={(value) => dispatch(value)}>
        <Tabs.List>
          <Tabs.Item value="tab-1" label="Tab #1" />
          <Tabs.Item value="tab-2" label="Tab #2" />
          <Tabs.Item value="tab-3" label="Tab #3" />
          <Tabs.Item value="tab-4" label="Tab #4" />
        </Tabs.List>
        <Tabs.Panel value="tab-1" children={<div>Tabs Panel #1</div>} />
        <Tabs.Panel value="tab-2" children={<div>Tabs Panel #2</div>} />
        <Tabs.Panel value="tab-3" children={<div>Tabs Panel #3</div>} />
        <Tabs.Panel value="tab-4" children={<div>Tabs Panel #4</div>} />
      </Tabs>
    </Section>
  );
};

const Overview: Component = ({}) => {
  return (
    <Page>
      <Hero>
        <Title>Overview</Title>
      </Hero>
      <Main>
        <DemoTabsUncontrolled />
        <DemoTabsControlled />
      </Main>
    </Page>
  );
};

Overview.displayName = '@v2/Overview';
Overview.Error = OverviewError;
export { Overview };
