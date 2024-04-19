import * as React from 'react';
import { Title } from '@/core';
import { Page } from '@/app/common';
import { getToken } from '@/core/utils';

type DemoRouteComponent = React.FC<{}>;

const common: React.CSSProperties = {
  width: 400,
  height: 200,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingInline: 'var(--gutter)',
};

const swatchData = [
  { token: 'c-accent-s050', onToken: 'c-on-accent-s050' },
  { token: 'c-accent-s100', onToken: 'c-on-accent-s100' },
  { token: 'c-accent-s150', onToken: 'c-on-accent-s150' },
  { token: 'c-accent-s200', onToken: 'c-on-accent-s200' },
  { token: 'c-accent-s250', onToken: 'c-on-accent-s250' },
  { token: 'c-accent-s300', onToken: 'c-on-accent-s300' },
  { token: 'c-accent-s350', onToken: 'c-on-accent-s350' },
  { token: 'c-accent-s400', onToken: 'c-on-accent-s400' },
  { token: 'c-accent-s450', onToken: 'c-on-accent-s450' },
  { token: 'c-accent-s500', onToken: 'c-on-accent-s500' },
  { token: 'c-accent-s550', onToken: 'c-on-accent-s550' },
  { token: 'c-accent-s600', onToken: 'c-on-accent-s600' },
  { token: 'c-accent-s650', onToken: 'c-on-accent-s650' },
  { token: 'c-accent-s700', onToken: 'c-on-accent-s700' },
  { token: 'c-accent-s750', onToken: 'c-on-accent-s750' },
  { token: 'c-accent-s800', onToken: 'c-on-accent-s800' },
  { token: 'c-accent-s850', onToken: 'c-on-accent-s850' },
  { token: 'c-accent-s900', onToken: 'c-on-accent-s900' },
  { token: 'c-accent-s950', onToken: 'c-on-accent-s950' },
];

const getTokenStyles = (token: string, onToken: string) => ({
  backgroundColor: getToken(token),
  color: getToken(onToken),
});

export const Demo: DemoRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title h1>Demo</Title>
      </Page.Hero>
      <Page.Content>
        {swatchData.map(({ onToken, token }) => (
          <div
            key={token}
            children={token}
            style={{ ...getTokenStyles(token, onToken), ...common }}
          />
        ))}
      </Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Demo.displayName = '@v2/app/Route.Demo';
