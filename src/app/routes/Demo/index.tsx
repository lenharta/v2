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
  { key: 'accent-s050', token: 'c-accent-s050', onToken: 'c-on-accent-s050' },
  { key: 'accent-s100', token: 'c-accent-s100', onToken: 'c-on-accent-s100' },
  { key: 'accent-s150', token: 'c-accent-s150', onToken: 'c-on-accent-s150' },
  { key: 'accent-s200', token: 'c-accent-s200', onToken: 'c-on-accent-s200' },
  { key: 'accent-s250', token: 'c-accent-s250', onToken: 'c-on-accent-s250' },
  { key: 'accent-s300', token: 'c-accent-s300', onToken: 'c-on-accent-s300' },
  { key: 'accent-s350', token: 'c-accent-s350', onToken: 'c-on-accent-s350' },
  { key: 'accent-s400', token: 'c-accent-s400', onToken: 'c-on-accent-s400' },
  { key: 'accent-s450', token: 'c-accent-s450', onToken: 'c-on-accent-s450' },
  { key: 'accent-s500', token: 'c-accent-s500', onToken: 'c-on-accent-s500' },
  { key: 'accent-s550', token: 'c-accent-s550', onToken: 'c-on-accent-s550' },
  { key: 'accent-s600', token: 'c-accent-s600', onToken: 'c-on-accent-s600' },
  { key: 'accent-s650', token: 'c-accent-s650', onToken: 'c-on-accent-s650' },
  { key: 'accent-s700', token: 'c-accent-s700', onToken: 'c-on-accent-s700' },
  { key: 'accent-s750', token: 'c-accent-s750', onToken: 'c-on-accent-s750' },
  { key: 'accent-s800', token: 'c-accent-s800', onToken: 'c-on-accent-s800' },
  { key: 'accent-s850', token: 'c-accent-s850', onToken: 'c-on-accent-s850' },
  { key: 'accent-s900', token: 'c-accent-s900', onToken: 'c-on-accent-s900' },
  { key: 'accent-s950', token: 'c-accent-s950', onToken: 'c-on-accent-s950' },
];

const textTokens = [
  { key: 'text-1', onToken: 'c-text-1' },
  { key: 'text-2', onToken: 'c-text-2' },
  { key: 'text-3', onToken: 'c-text-3' },
  { key: 'text-4', onToken: 'c-text-4' },
  { key: 'text-5', onToken: 'c-text-5' },
];

const baseTokens = [
  { key: 'base-1', token: 'c-base-1', onToken: 'c-text-1' },
  { key: 'base-2', token: 'c-base-2', onToken: 'c-text-1' },
  { key: 'base-3', token: 'c-base-3', onToken: 'c-text-1' },
  { key: 'base-4', token: 'c-base-4', onToken: 'c-text-1' },
  { key: 'base-5', token: 'c-base-5', onToken: 'c-text-1' },
];
const onBaseTokens = [
  { key: 'on-base-1', token: 'c-on-base-1', onToken: 'c-on-text-1' },
  { key: 'on-base-2', token: 'c-on-base-2', onToken: 'c-on-text-1' },
  { key: 'on-base-3', token: 'c-on-base-3', onToken: 'c-on-text-1' },
  { key: 'on-base-4', token: 'c-on-base-4', onToken: 'c-on-text-1' },
  { key: 'on-base-5', token: 'c-on-base-5', onToken: 'c-on-text-1' },
];

interface TokenConfig {
  key: string;
  token?: string;
  onToken?: string;
}

const createTokenStyles = (token?: string, onToken?: string) => {
  if (token && !onToken) {
    return { backgroundColor: getToken(token) };
  }

  if (!token && onToken) {
    return { color: getToken(onToken) };
  }

  if (token && onToken) {
    return {
      color: getToken(onToken),
      backgroundColor: getToken(token),
    };
  }
  return {};
};

interface TokenSwatchProps {
  data: TokenConfig[];
  scheme?: 'default' | 'secondary';
}

const TokenSwatch = ({ data, scheme = 'default' }: TokenSwatchProps) => {
  return (
    <div data-scheme={scheme}>
      {data.map(({ key, token, onToken }) => (
        <div
          key={key}
          style={{
            width: 300,
            height: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ...createTokenStyles(token, onToken),
          }}
        >
          {token && <div>{token}</div>}
          {onToken && <div>{onToken}</div>}
        </div>
      ))}
    </div>
  );
};

export const Demo: DemoRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title h1>Demo</Title>
      </Page.Hero>
      <Page.Content>
        <div style={{ display: 'flex' }}>
          <TokenSwatch data={baseTokens} />
          <TokenSwatch data={baseTokens} scheme="secondary" />
        </div>
      </Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Demo.displayName = '@v2/app/Route.Demo';
