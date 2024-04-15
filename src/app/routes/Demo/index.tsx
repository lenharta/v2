import * as React from 'react';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Page, Section } from '@/app/common';
import { Box, Control, ControlProps, Title } from '@/core';
import { capitalizeString } from '@/utils';

type DemoRouteComponent = React.FC<{}>;

interface PreviewStyleProps {
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
}

type PreviewDisplayFactory = Factory.Config<{
  comp: 'div';
  ref: HTMLDivElement;
  props: {
    width?: React.CSSProperties['width'];
    height?: React.CSSProperties['height'];
    children?: React.ReactNode;
  };
}>;

const PreviewDisplay = factory<PreviewDisplayFactory>((props, ref) => {
  const { children, height, width, ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} style={{ height, width }} className="preview-display">
      {children}
    </div>
  );
});

type PreviewComponent = React.FC<{ children?: React.ReactNode; title?: string }> & {
  Display: typeof PreviewDisplay;
};

const Preview: PreviewComponent = (props) => {
  const { children, title } = props;
  return (
    <Section>
      {title && (
        <Section.Header>
          <Title h2>Preview | {title}</Title>
        </Section.Header>
      )}
      <Section.Content>
        <div className="preview-container">{children}</div>
      </Section.Content>
    </Section>
  );
};

Preview.Display = PreviewDisplay;

const PreviewControl = (props: Partial<ControlProps> & PreviewStyleProps & { title?: string }) => {
  const { height, width, title, ...otherProps } = props;
  const [value, onChange] = React.useState('item-4');
  return (
    <Preview title={title}>
      <Preview.Display width={width} height={height}>
        <Control
          {...otherProps}
          onChange={onChange}
          value={value}
          data={[
            { value: 'item-1', label: 'Item 1' },
            { value: 'item-2', label: 'Item 2' },
            { value: 'item-3', label: 'Item 3' },
            { value: 'item-4', label: 'Item 4' },
            { value: 'item-5', label: 'Item 5' },
          ]}
        />
      </Preview.Display>
    </Preview>
  );
};

const tokenData = [
  { background: 'c-accent-s100', color: 'c-on-accent-s100' },
  { background: 'c-accent-s200', color: 'c-on-accent-s200' },
  { background: 'c-accent-s300', color: 'c-on-accent-s300' },
  { background: 'c-accent-s400', color: 'c-on-accent-s400' },
  { background: 'c-accent-s500', color: 'c-on-accent-s500' },
  { background: 'c-accent-s600', color: 'c-on-accent-s600' },
  { background: 'c-accent-s700', color: 'c-on-accent-s700' },
  { background: 'c-accent-s800', color: 'c-on-accent-s800' },
  { background: 'c-accent-s900', color: 'c-on-accent-s900' },
];

const formatToken = (token: string) => {
  return `var(--${token})`;
};

const formatTokenLabel = (token: string) => {
  const clean = token.slice(2, token.length).toLowerCase();
  const segments = clean.split('-').map((t) => capitalizeString(t));
  return segments.join(' ');
};

const testSwatchStyles: React.CSSProperties = {
  width: 400,
  height: 200,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
};

const TestSwatches = ({}) => {
  return (
    <Section>
      <Section.Content>
        {tokenData.map(({ background, color }) => (
          <Box
            key={background}
            children={formatTokenLabel(background)}
            style={{
              ...testSwatchStyles,
              color: formatToken(color),
              backgroundColor: formatToken(background),
            }}
          />
        ))}
      </Section.Content>
    </Section>
  );
};

export const Demo: DemoRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title h1>Demo</Title>
      </Page.Hero>
      <Page.Content>
        <PreviewControl title="Control ( horizontal )" width="50%" orientation="horizontal" />
        <TestSwatches />
        {/* <PreviewControl title="Control ( vertical )" width="25%" orientation="vertical" /> */}
      </Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Demo.displayName = '@v2/app/Route.Demo';
