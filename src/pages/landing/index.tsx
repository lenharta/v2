import clsx from 'clsx';
import React from 'react';
import { LandingError } from './landing-error';

import { Theme } from '@/types';
import { Hero, Page, Section } from '@/common';
import { objectKeys, mergeProps } from '@/utils';
import { Box, Button, ButtonScheme, ButtonVariant, Icon, Text } from '@/core';

type LandingRouteFactory = React.FC<{}> & {
  Error: typeof LandingError;
};

const dataColumnOne = [
  { background: 'base-1', color: 'text-1', border: 'transparent' },
  { background: 'base-2', color: 'text-1', border: 'transparent' },
  { background: 'base-3', color: 'text-1', border: 'transparent' },
  { background: 'base-4', color: 'text-1', border: 'transparent' },
  { background: 'base-5', color: 'text-1', border: 'transparent' },
  { background: 'base-6', color: 'text-1', border: 'transparent' },
];

const dataColumnTwo = [
  { background: 'base-1--hover', color: 'text-1', border: 'transparent' },
  { background: 'base-2--hover', color: 'text-1', border: 'transparent' },
  { background: 'base-3--hover', color: 'text-1', border: 'transparent' },
  { background: 'base-4--hover', color: 'text-1', border: 'transparent' },
  { background: 'base-5--hover', color: 'text-1', border: 'transparent' },
  { background: 'base-6--hover', color: 'text-1', border: 'transparent' },
];

const dataColumnThree = [
  { background: 'base-1--pressed', color: 'text-1', border: 'transparent' },
  { background: 'base-2--pressed', color: 'text-1', border: 'transparent' },
  { background: 'base-3--pressed', color: 'text-1', border: 'transparent' },
  { background: 'base-4--pressed', color: 'text-1', border: 'transparent' },
  { background: 'base-5--pressed', color: 'text-1', border: 'transparent' },
  { background: 'base-6--pressed', color: 'text-1', border: 'transparent' },
];

const dataColumnFour = [
  { background: 'base-1--selected', color: 'text-1', border: 'transparent' },
  { background: 'base-2--selected', color: 'text-1', border: 'transparent' },
  { background: 'base-3--selected', color: 'text-1', border: 'transparent' },
  { background: 'base-4--selected', color: 'text-1', border: 'transparent' },
  { background: 'base-5--selected', color: 'text-1', border: 'transparent' },
  { background: 'base-6--selected', color: 'text-1', border: 'transparent' },
];

function getToken(id: string | number, value: string | number) {
  return `var(--${id}-${value})`;
}

const ButtonDemo = () => {
  return (
    <Section>
      <Button.Group>
        <Button scheme="default" variant="default">
          Button | default-default
        </Button>
        <Button scheme="default" variant="elevated">
          Button | default-elevated
        </Button>
        <Button scheme="accent" variant="default">
          Button | accent-default
        </Button>
      </Button.Group>
    </Section>
  );
};

const TokenDemo = () => {
  return (
    <Section>
      <Box className="v2-demo-token-grid">
        <TokenColumn data={dataColumnOne} />
        <TokenColumn data={dataColumnTwo} />
        <TokenColumn data={dataColumnThree} />
        <TokenColumn data={dataColumnFour} />
      </Box>
    </Section>
  );
};

const TokenColumn = (props: {
  tokenKey?: string | undefined;
  data: Partial<{
    background: string | undefined;
    border: string | undefined;
    color: string | undefined;
  }>[];
}) => {
  const { data, tokenKey = 'c' } = props;
  return (
    <div className="v2-demo-token-column">
      {data.map((tokens) => {
        const tokenLabel = ['c-', tokens.background].join('');
        const tokenData = objectKeys(tokens).map((i) => tokens[i] && tokens[i]);
        const tokenId = tokenData.reduce((prev, curr) => prev && (prev += prev + curr), '');

        const tokenStyles = {
          color: getToken(tokenKey, tokens.color || 'text-1'),
          borderColor: getToken(tokenKey, tokens.border || 'transparent'),
          backgroundColor: getToken(tokenKey, tokens.background || 'base-1'),
        };

        return (
          <div key={tokenId} style={tokenStyles} className="v2-demo-token-item">
            <Icon name="palette" />
            <Text>{tokenLabel}</Text>
          </div>
        );
      })}
    </div>
  );
};

interface SampleContext {
  size?: Theme.Size | undefined;
  scheme?: ButtonVariant | undefined;
  variant?: ButtonScheme | undefined;
  getItemId: () => string;
}

interface SampleThemeProps {
  size?: Theme.Size | undefined;
  scheme?: ButtonVariant | undefined;
  variant?: ButtonScheme | undefined;
}

interface SampleGroupProps extends SampleThemeProps {
  className?: string | undefined;
  children?: React.ReactNode | undefined;
}

interface SampleItemProps extends SampleThemeProps {
  className?: string | undefined;
  children?: React.ReactNode | undefined;
}

const defaultSampleProps: Partial<SampleItemProps> = {
  size: 'sm',
  scheme: 'default',
  variant: 'default',
};

const SampleContext = React.createContext({} as SampleContext);
const SampleProvider = SampleContext.Provider;
const useSampleContext = () => React.useContext(SampleContext);

const SampleGroup = (props: SampleGroupProps) => {
  const { size, scheme, variant, children, ...otherProps } = props;

  const uid = React.useId();
  const getItemId = () => `group${uid}item`;

  return (
    <div {...otherProps}>
      <SampleProvider value={{ size, scheme, variant, getItemId }}>
        <React.Fragment>{children}</React.Fragment>
      </SampleProvider>
    </div>
  );
};

const SampleItem = (props: SampleItemProps) => {
  const { size, scheme, variant, children, ...otherProps } = props;

  const ctx = useSampleContext();

  return (
    <div {...otherProps} className="v2-sample-item" id={ctx.getItemId()}>
      {children}
    </div>
  );
};

const SampleDemo = () => {
  return (
    <Section>
      <SampleGroup size="lg">
        <SampleItem size="xs">Item 1</SampleItem>
        <SampleItem>Item 2</SampleItem>
        <SampleItem>Item 3</SampleItem>
      </SampleGroup>
    </Section>
  );
};

const Landing: LandingRouteFactory = () => (
  <Page>
    <Hero title="Overview" />
    <SampleDemo />
    {/* <TokenDemo /> */}
    {/* <ButtonDemo /> */}
  </Page>
);

Landing.Error = LandingError;
Landing.displayName = '@v2/Landing.Route';
export { Landing };
