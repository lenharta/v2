import React from 'react';
import { Stack, Text } from '@/core';
import { Hero, Page, Section, TokenTable } from '@/common';
import { LandingError } from './LandingError';
import { LandingTitle } from './LandingTitle';
import { Theme } from '@/types';
import clsx from 'clsx';

type LandingRouteFactory = React.FC<{}> & {
  Error: typeof LandingError;
};

interface SpacingSwatchProps {
  level?: Theme.Value16;
}

const css = {
  swatch: 'v2-token-table-swatch',
};

const SpacingSwatch = (props: SpacingSwatchProps) => {
  const { level = 1 } = props;
  return (
    <div
      className={clsx(css.swatch)}
      style={{
        height: `var(--s-${level})`,
        width: `var(--s-${level})`,
      }}
    />
  );
};

const SpacingTable = () => {
  return (
    <TokenTable>
      <TokenTable.Head>
        <TokenTable.Row>
          <TokenTable.Cell>Name</TokenTable.Cell>
          <TokenTable.Cell>Token</TokenTable.Cell>
          <TokenTable.Cell>Swatch</TokenTable.Cell>
        </TokenTable.Row>
      </TokenTable.Head>
      <TokenTable.Body>
        <TokenTable.Row>
          <TokenTable.Cell>Spacing 1</TokenTable.Cell>
          <TokenTable.Cell>var(--s-1)</TokenTable.Cell>
          <TokenTable.Cell children={<SpacingSwatch level={1} />} />
        </TokenTable.Row>
        <TokenTable.Row>
          <TokenTable.Cell>Spacing 2</TokenTable.Cell>
          <TokenTable.Cell>var(--s-2)</TokenTable.Cell>
          <TokenTable.Cell children={<SpacingSwatch level={2} />} />
        </TokenTable.Row>
        <TokenTable.Row>
          <TokenTable.Cell>Spacing 3</TokenTable.Cell>
          <TokenTable.Cell>var(--s-3)</TokenTable.Cell>
          <TokenTable.Cell children={<SpacingSwatch level={3} />} />
        </TokenTable.Row>
        <TokenTable.Row>
          <TokenTable.Cell>Spacing 4</TokenTable.Cell>
          <TokenTable.Cell>var(--s-4)</TokenTable.Cell>
          <TokenTable.Cell children={<SpacingSwatch level={4} />} />
        </TokenTable.Row>
        <TokenTable.Row>
          <TokenTable.Cell>Spacing 5</TokenTable.Cell>
          <TokenTable.Cell>var(--s-5)</TokenTable.Cell>
          <TokenTable.Cell children={<SpacingSwatch level={5} />} />
        </TokenTable.Row>
        <TokenTable.Row>
          <TokenTable.Cell>Spacing 6</TokenTable.Cell>
          <TokenTable.Cell>var(--s-6)</TokenTable.Cell>
          <TokenTable.Cell children={<SpacingSwatch level={6} />} />
        </TokenTable.Row>
        <TokenTable.Row>
          <TokenTable.Cell>Spacing 7</TokenTable.Cell>
          <TokenTable.Cell>var(--s-7)</TokenTable.Cell>
          <TokenTable.Cell children={<SpacingSwatch level={7} />} />
        </TokenTable.Row>
        <TokenTable.Row>
          <TokenTable.Cell>Spacing 8</TokenTable.Cell>
          <TokenTable.Cell>var(--s-8)</TokenTable.Cell>
          <TokenTable.Cell children={<SpacingSwatch level={8} />} />
        </TokenTable.Row>
        <TokenTable.Row>
          <TokenTable.Cell>Spacing 9</TokenTable.Cell>
          <TokenTable.Cell>var(--s-9)</TokenTable.Cell>
          <TokenTable.Cell children={<SpacingSwatch level={9} />} />
        </TokenTable.Row>
        <TokenTable.Row>
          <TokenTable.Cell>Spacing 10</TokenTable.Cell>
          <TokenTable.Cell>var(--s-10)</TokenTable.Cell>
          <TokenTable.Cell children={<SpacingSwatch level={10} />} />
        </TokenTable.Row>
        <TokenTable.Row>
          <TokenTable.Cell>Spacing 11</TokenTable.Cell>
          <TokenTable.Cell>var(--s-11)</TokenTable.Cell>
          <TokenTable.Cell children={<SpacingSwatch level={11} />} />
        </TokenTable.Row>
        <TokenTable.Row>
          <TokenTable.Cell>Spacing 12</TokenTable.Cell>
          <TokenTable.Cell>var(--s-12)</TokenTable.Cell>
          <TokenTable.Cell children={<SpacingSwatch level={12} />} />
        </TokenTable.Row>
      </TokenTable.Body>
      <TokenTable.Foot>
        <TokenTable.Row>
          <TokenTable.Cell></TokenTable.Cell>
          <TokenTable.Cell></TokenTable.Cell>
          <TokenTable.Cell></TokenTable.Cell>
        </TokenTable.Row>
      </TokenTable.Foot>
    </TokenTable>
  );
};

const Landing: LandingRouteFactory = ({}) => {
  return (
    <Page>
      <Hero title={<LandingTitle />} />
      <Section>
        <Text>Content</Text>
        <SpacingTable />
      </Section>
    </Page>
  );
};

Landing.Error = LandingError;
Landing.displayName = '@v2/Landing.Route';
export { Landing };
