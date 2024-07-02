import * as React from 'react';
import { Page } from '@/app';
import { OverviewHero } from './OverviewHero';
import { Button, Label, LabelProps, Text, TextProps, Title, TitleProps } from '@/core';

type OverviewFactory = React.FC<{}> & {
  Hero: typeof OverviewHero;
};

const sizeExpanded = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;
const emphasisLevels = ['max', 'med', 'low', 'min'] as const;

const DemoTitle = (props: Partial<TitleProps>) => {
  return (
    <Page.Section>
      {sizeExpanded.map((size) => {
        return emphasisLevels.map((emphasis) => (
          <Title key={[size, emphasis].join('-')} emphasis={emphasis} size={size} {...props}>
            Some Example Title
          </Title>
        ));
      })}
    </Page.Section>
  );
};

const DemoText = (props: Partial<TextProps>) => {
  return (
    <Page.Section>
      {sizeExpanded.map((size) => {
        return emphasisLevels.map((emphasis) => (
          <Text key={[size, emphasis].join('-')} emphasis={emphasis} size={size} {...props}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolores omnis laboriosam
            alias possimus dolore debitis eum quasi. Minus, optio nostrum! Nisi repellendus eum
            assumenda, fugiat natus illum nostrum illo.
          </Text>
        ));
      })}
    </Page.Section>
  );
};

const DemoLabel = (props: Partial<LabelProps>) => {
  return (
    <Page.Section>
      {sizeExpanded.map((size) => {
        return emphasisLevels.map((emphasis) => (
          <Label
            key={[size, emphasis].join('-')}
            emphasis={emphasis}
            component="div"
            size={size}
            {...props}
          >
            Some Example Label
          </Label>
        ));
      })}
    </Page.Section>
  );
};

const Overview: OverviewFactory = ({}) => (
  <Page>
    <Overview.Hero />
    <Button.Group surface="accent" variant="default">
      <Button size="xxs" iconRight={{ name: 'arrow-east' }}>
        Button Label
      </Button>
      <Button size="xs" iconRight={{ name: 'arrow-east' }}>
        Button Label
      </Button>
      <Button size="sm" iconRight={{ name: 'arrow-east' }}>
        Button Label
      </Button>
      <Button size="md" iconRight={{ name: 'arrow-east' }}>
        Button Label
      </Button>
      <Button size="lg" iconRight={{ name: 'arrow-east' }}>
        Button Label
      </Button>
      <Button size="xl" iconRight={{ name: 'arrow-east' }}>
        Button Label
      </Button>
      <Button size="xxl" iconRight={{ name: 'arrow-east' }}>
        Button Label
      </Button>
    </Button.Group>
    <DemoTitle surface="accent" />
    <DemoTitle surface="base" />
    <DemoText />
    <DemoLabel />
  </Page>
);

Overview.Hero = OverviewHero;
Overview.displayName = '@v2/Overview.';
export { Overview };
