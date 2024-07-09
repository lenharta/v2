import { Tabs, Text, Title } from '@/core';
import * as React from 'react';

const SamplePanel = (props: { title: string; value: string }) => {
  return (
    <Tabs.Panel value={props.value} data-grow>
      <div className="v2-canvas-tabs-content">
        <Title h3 className="v2-canvas-tabs-content-title">
          {props.title}
        </Title>
        <Text className="v2-canvas-tabs-content-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet rem aperiam soluta
          optio, delectus hic dolorum obcaecati perferendis aut deserunt ullam necessitatibus eum?
          Aspernatur doloribus minus saepe. Mollitia, esse excepturi?
        </Text>
      </div>
    </Tabs.Panel>
  );
};

const CanvasTabsDefault: React.FC<{}> = ({}) => {
  const [value, onValueChange] = React.useState('value-a');
  return (
    <div className="v2-canvas-tabs-container">
      <div className="v2-canvas-tabs-layout">
        <Tabs
          value={value}
          onValueChange={onValueChange}
          orientation="horizontal"
          variant="accent-elevated"
        >
          <Tabs.List data-grow>
            <Tabs.Item value="value-a">Item A</Tabs.Item>
            <Tabs.Item value="value-b">Item B</Tabs.Item>
            <Tabs.Item value="value-c">Item C</Tabs.Item>
          </Tabs.List>
          <SamplePanel value="value-a" title="Panel A" />
          <SamplePanel value="value-b" title="Panel B" />
          <SamplePanel value="value-c" title="Panel C" />
        </Tabs>
      </div>
    </div>
  );
};

const CanvasTabsVertical: React.FC<{}> = ({}) => {
  const [value, onValueChange] = React.useState('value-a');
  return (
    <div className="v2-canvas-tabs-container">
      <div className="v2-canvas-tabs-layout">
        <Tabs
          value={value}
          onValueChange={onValueChange}
          orientation="vertical"
          variant="accent-elevated"
        >
          <Tabs.List>
            <Tabs.Item value="value-a">Item A</Tabs.Item>
            <Tabs.Item value="value-b">Item B</Tabs.Item>
            <Tabs.Item value="value-c">Item C</Tabs.Item>
          </Tabs.List>
          <SamplePanel value="value-a" title="Panel A" />
          <SamplePanel value="value-b" title="Panel B" />
          <SamplePanel value="value-c" title="Panel C" />
        </Tabs>
      </div>
    </div>
  );
};

const CanvasTabs: React.FC<{}> & {
  Default: typeof CanvasTabsDefault;
  Vertical: typeof CanvasTabsVertical;
} = ({}) => {
  return (
    <React.Fragment>
      <CanvasTabs.Default />
      <CanvasTabs.Vertical />
    </React.Fragment>
  );
};

CanvasTabs.Default = CanvasTabsDefault;
CanvasTabs.Vertical = CanvasTabsVertical;
CanvasTabs.displayName = '@v2/Canvas.Tabs';
export { CanvasTabs };
