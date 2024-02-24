import { Button, Space, Text, Title, TitleProps } from '@/common';
import { Page, Section } from '@/app/layouts';
import { SizeExpanded } from '@/types/common';

export interface Point2D {
  x: number;
  y: number;
}

export const distance = (a: number, b: number) => Math.abs(a - b);

export const distance2D = (a: Point2D, b: Point2D) => {
  const xDelta = distance(a.x, b.x);
  const yDelta = distance(a.y, b.y);
  return Math.sqrt(xDelta ** 2 + yDelta ** 2);
};

export const Toolbox = () => {
  return (
    <Page>
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <Section scheme="secondary">
          <Space size="xl" />
          <DemoTitleSizes size="xxs" weight="xbd" />
          <DemoTitleSizes size="xs" weight="xbd" />
          <DemoTitleSizes size="sm" weight="xbd" />
          <DemoTitleSizes size="md" weight="xbd" />
          <DemoTitleSizes size="lg" weight="xbd" />
          <DemoTitleSizes size="xl" weight="xbd" />
          <DemoTitleSizes size="xxl" weight="xbd" />
          <Space size="xl" />
          <DemoTitlesAccent size="xxs" weight="xbd" />
          <DemoTitlesAccent size="xs" weight="xbd" />
          <DemoTitlesAccent size="sm" weight="xbd" />
          <DemoTitlesAccent size="md" weight="xbd" />
          <DemoTitlesAccent size="lg" weight="xbd" />
          <DemoTitlesAccent size="xl" weight="xbd" />
          <DemoTitlesAccent size="xxl" weight="xbd" />
          <Space size="xl" />
          <DemoTextSizes />
          <Space size="xl" />
          <DemoTextAccent />
          <Space size="xl" />
          <DemoButtonSchemes />
          <Space size="xl" />
        </Section>
        <Section scheme="primary">
          <Space size="xl" />
          <DemoTitleSizes size="xxs" weight="xbd" />
          <DemoTitleSizes size="xs" weight="xbd" />
          <DemoTitleSizes size="sm" weight="xbd" />
          <DemoTitleSizes size="md" weight="xbd" />
          <DemoTitleSizes size="lg" weight="xbd" />
          <DemoTitleSizes size="xl" weight="xbd" />
          <DemoTitleSizes size="xxl" weight="xbd" />
          <Space size="xl" />
          <DemoTitlesAccent size="xxs" weight="xbd" />
          <DemoTitlesAccent size="xs" weight="xbd" />
          <DemoTitlesAccent size="sm" weight="xbd" />
          <DemoTitlesAccent size="md" weight="xbd" />
          <DemoTitlesAccent size="lg" weight="xbd" />
          <DemoTitlesAccent size="xl" weight="xbd" />
          <DemoTitlesAccent size="xxl" weight="xbd" />
          <Space size="xl" />
          <DemoTextSizes />
          <Space size="xl" />
          <DemoTextAccent />
          <Space size="xl" />
          <DemoButtonSchemes />
          <Space size="xl" />
        </Section>
        <Section scheme="accent">
          <Space size="xl" />
          <DemoTitleSizes size="xxs" weight="lgt" />
          <DemoTitleSizes size="xs" weight="lgt" />
          <DemoTitleSizes size="sm" weight="lgt" />
          <DemoTitleSizes size="md" weight="lgt" />
          <DemoTitleSizes size="lg" weight="lgt" />
          <DemoTitleSizes size="xl" weight="lgt" />
          <DemoTitleSizes size="xxl" weight="lgt" />
          <Space size="xl" />
          <DemoTitlesAccent size="xxs" weight="lgt" />
          <DemoTitlesAccent size="xs" weight="lgt" />
          <DemoTitlesAccent size="sm" weight="lgt" />
          <DemoTitlesAccent size="md" weight="lgt" />
          <DemoTitlesAccent size="lg" weight="lgt" />
          <DemoTitlesAccent size="xl" weight="lgt" />
          <DemoTitlesAccent size="xxl" weight="lgt" />
          <Space size="xl" />
          <DemoTextSizes />
          <Space size="xl" />
          <DemoTextAccent />
          <Space size="xl" />
          <DemoButtonSchemes />
          <Space size="xl" />
        </Section>
      </Page.Content>
    </Page>
  );
};

const DemoButtonSchemes = () => (
  <>
    <Button scheme="accent">Accent Button</Button>
    <Button scheme="default">Default Button</Button>
    <Button scheme="inverted">Inverted Button</Button>
  </>
);

const DemoTitleSizes = (props: TitleProps) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0%, 1fr))',
      placeContent: 'end',
      gap: '1rem',
    }}
  >
    <Title size={props.size} weight={props.weight}>
      Section Title
    </Title>
    <Title size={props.size} weight={props.weight}>
      Section Title
    </Title>
    <Title size={props.size} weight={props.weight}>
      Section Title
    </Title>
  </div>
);

const DemoTitlesAccent = (props: TitleProps) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0%, 1fr))',
      placeContent: 'start',
      gap: '1rem',
    }}
  >
    <Title scheme="accent" size={props.size} weight={props.weight}>
      Section Title
    </Title>
    <Title scheme="accent" size={props.size} weight={props.weight}>
      Section Title
    </Title>
    <Title scheme="accent" size={props.size} weight={props.weight}>
      Section Title
    </Title>
  </div>
);

const DemoTextSizes = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      placeContent: 'start',
      gap: '1rem',
    }}
  >
    <Text size="xxs">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptatem non quisquam
      voluptas eum nisi placeat omnis reiciendis? Reiciendis esse animi dolorum odit velit enim quo
      id, quidem quisquam dolorem?
    </Text>
    <Text size="xs">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptatem non quisquam
      voluptas eum nisi placeat omnis reiciendis? Reiciendis esse animi dolorum odit velit enim quo
      id, quidem quisquam dolorem?
    </Text>
    <Text size="sm">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptatem non quisquam
      voluptas eum nisi placeat omnis reiciendis? Reiciendis esse animi dolorum odit velit enim quo
      id, quidem quisquam dolorem?
    </Text>
    <Text size="md">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptatem non quisquam
      voluptas eum nisi placeat omnis reiciendis? Reiciendis esse animi dolorum odit velit enim quo
      id, quidem quisquam dolorem?
    </Text>
    <Text size="lg">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptatem non quisquam
      voluptas eum nisi placeat omnis reiciendis? Reiciendis esse animi dolorum odit velit enim quo
      id, quidem quisquam dolorem?
    </Text>
    <Text size="xl">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptatem non quisquam
      voluptas eum nisi placeat omnis reiciendis? Reiciendis esse animi dolorum odit velit enim quo
      id, quidem quisquam dolorem?
    </Text>
    <Text size="xxl">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptatem non quisquam
      voluptas eum nisi placeat omnis reiciendis? Reiciendis esse animi dolorum odit velit enim quo
      id, quidem quisquam dolorem?
    </Text>
  </div>
);

const DemoTextAccent = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      placeContent: 'start',
      gap: '1rem',
    }}
  >
    <Text scheme="accent" size="xxs">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptatem non quisquam
      voluptas eum nisi placeat omnis reiciendis? Reiciendis esse animi dolorum odit velit enim quo
      id, quidem quisquam dolorem?
    </Text>
    <Text scheme="accent" size="xs">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptatem non quisquam
      voluptas eum nisi placeat omnis reiciendis? Reiciendis esse animi dolorum odit velit enim quo
      id, quidem quisquam dolorem?
    </Text>
    <Text scheme="accent" size="sm">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptatem non quisquam
      voluptas eum nisi placeat omnis reiciendis? Reiciendis esse animi dolorum odit velit enim quo
      id, quidem quisquam dolorem?
    </Text>
    <Text scheme="accent" size="md">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptatem non quisquam
      voluptas eum nisi placeat omnis reiciendis? Reiciendis esse animi dolorum odit velit enim quo
      id, quidem quisquam dolorem?
    </Text>
    <Text scheme="accent" size="lg">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptatem non quisquam
      voluptas eum nisi placeat omnis reiciendis? Reiciendis esse animi dolorum odit velit enim quo
      id, quidem quisquam dolorem?
    </Text>
    <Text scheme="accent" size="xl">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptatem non quisquam
      voluptas eum nisi placeat omnis reiciendis? Reiciendis esse animi dolorum odit velit enim quo
      id, quidem quisquam dolorem?
    </Text>
    <Text scheme="accent" size="xxl">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptatem non quisquam
      voluptas eum nisi placeat omnis reiciendis? Reiciendis esse animi dolorum odit velit enim quo
      id, quidem quisquam dolorem?
    </Text>
  </div>
);
