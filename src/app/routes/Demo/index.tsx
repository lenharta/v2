import * as React from 'react';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Page, Section } from '@/app/common';
import { Control, ControlProps, Title } from '@/core';

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
  const [value, onChange] = React.useState('item-1');
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

export const Demo: DemoRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title h1>Demo</Title>
      </Page.Hero>
      <Page.Content>
        <PreviewControl title="Control ( horizontal )" width="50%" orientation="horizontal" />
        <PreviewControl title="Control ( vertical )" width="25%" orientation="vertical" />
      </Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Demo.displayName = '@v2/app/Route.Demo';
