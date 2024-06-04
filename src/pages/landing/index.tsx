import { LandingError } from './landing-error';
import { Button, Stack, Text, Title } from '@/core';
import { Hero, Main, Page, Section } from '@/common';

type LandingRouteFactory = React.FC<{}> & {
  Error: typeof LandingError;
};

const getToken = (value: string | number, id: string | number = 'c') => `var(--${id}-${value})`;

const ColorSwatch = (props: {
  label?: string | undefined;
  style?: React.CSSProperties | undefined;
  tokens?:
    | {
        text?: string | undefined;
        border?: string | undefined;
        background?: string | undefined;
      }
    | undefined;
}) => {
  const { label, tokens, ...rest } = props;
  const { text = 'text', border = 'transparent', background = 'base' } = tokens ?? {};
  return (
    <div
      children={<Text>{label}</Text>}
      style={{
        width: 500,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: getToken(6, 'fz'),
        color: text ? getToken(text) : 'inherit',
        borderWidth: border ? '2px' : undefined,
        borderStyle: border ? 'solid' : undefined,
        borderColor: border ? getToken(border) : undefined,
        backgroundColor: background ? getToken(background) : undefined,
        ...rest,
      }}
    />
  );
};

const Landing: LandingRouteFactory = () => (
  <Page>
    <Hero title="Overview" />
    <Main>
      <Section>
        <Title h2>Section Title</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur harum ab corrupti
          eos repellendus maiores hic quo nulla cum, dolorem soluta quis saepe aliquid quibusdam?
          Doloribus veritatis corrupti consequuntur eius.
        </Text>
        <Button>Button</Button>
      </Section>
      <Section>
        <Stack gap="sm">
          <ColorSwatch
            label="C | base"
            tokens={{ background: 'base', text: 'text', border: 'transparent' }}
          />
          <ColorSwatch
            label="C | base-1"
            tokens={{ background: 'base-1', text: 'base', border: 'transparent' }}
          />
          <ColorSwatch
            label="C | base-2"
            tokens={{ background: 'base-2', text: 'base', border: 'transparent' }}
          />
          <ColorSwatch
            label="C | base-3"
            tokens={{ background: 'base-3', text: 'base', border: 'transparent' }}
          />
          <ColorSwatch
            label="C | base-4"
            tokens={{ background: 'base-4', text: 'base', border: 'transparent' }}
          />
        </Stack>
      </Section>
    </Main>
  </Page>
);

Landing.Error = LandingError;
Landing.displayName = '@v2/Landing.Route';
export { Landing };
