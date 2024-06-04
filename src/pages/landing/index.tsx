import { LandingError } from './landing-error';
import { Button, Icon, IconProps, Stack, Text, Title } from '@/core';
import { Hero, Main, Page, Section } from '@/common';

type LandingRouteFactory = React.FC<{}> & {
  Error: typeof LandingError;
};

const getToken = (id: string | number, value: string | number) => `var(--${id}-${value})`;

const TokenSwatch = (props: {
  icon?: IconProps['name'] | undefined;
  label?: string | undefined;
  style?: React.CSSProperties | undefined;
  tokens?:
    | {
        icon?: string | undefined;
        color?: string | undefined;
        border?: string | undefined;
        background?: string | undefined;
      }
    | undefined;
}) => {
  const { icon = 'palette', label, tokens, ...rest } = props;
  const { color = 'text', border = 'transparent', background = 'base' } = tokens ?? {};
  return (
    <div
      style={{
        minWidth: 500,
        minHeight: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: getToken('fz', 6),
        color: color ? getToken('c', color) : 'inherit',
        borderWidth: border ? '2px' : undefined,
        borderStyle: border ? 'solid' : undefined,
        borderColor: border ? getToken('c', border) : undefined,
        backgroundColor: background ? getToken('c', background) : undefined,
        ...rest,
      }}
    >
      <div
        style={{
          gap: '1rem',
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          paddingInline: '2rem',
          paddingBlock: '1rem',
        }}
      >
        <div
          style={{
            gap: '1rem',
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'row',
          }}
        >
          <Icon name={icon} />
          <Title>Token Swatch</Title>
          <Text>{label}</Text>
        </div>
      </div>
    </div>
  );
};

const tokenSwatches = [
  { background: 'base', color: 'base-text', border: 'transparent' },
  { background: 'base--enabled', color: 'base-text--enabled', border: 'transparent' },
  { background: 'base--hovered', color: 'base-text--hovered', border: 'transparent' },
  { background: 'base--focused', color: 'base-text--focused', border: 'transparent' },
  { background: 'base--pressed', color: 'base-text--pressed', border: 'transparent' },
  { background: 'base--selected', color: 'base-text--selected', border: 'transparent' },
  { background: 'base--disabled', color: 'base-text--disabled', border: 'transparent' },
];

const Landing: LandingRouteFactory = () => (
  <Page>
    <Hero title="Overview" />
    <Section>
      <Title h2>Section Title</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur harum ab corrupti eos
        repellendus maiores hic quo nulla cum, dolorem soluta quis saepe aliquid quibusdam?
        Doloribus veritatis corrupti consequuntur eius.
      </Text>
      <Button>Button</Button>
    </Section>
    <Section>
      <Stack gap="xs">
        {tokenSwatches.map((item) => (
          <TokenSwatch
            key={item.background}
            label={`c-${item.background}`}
            tokens={{
              background: item.background,
              border: item.border,
              color: item.color,
            }}
          />
        ))}
      </Stack>
    </Section>
    <Section data-scheme="secondary">
      <Stack gap="xs">
        {tokenSwatches.map((item) => (
          <TokenSwatch
            key={item.background}
            label={`c-${item.background}`}
            tokens={{
              background: item.background,
              border: item.border,
              color: item.color,
            }}
          />
        ))}
      </Stack>
    </Section>
  </Page>
);

Landing.Error = LandingError;
Landing.displayName = '@v2/Landing.Route';
export { Landing };
