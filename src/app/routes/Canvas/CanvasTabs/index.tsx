import { Tabs, Text, Title } from '@/core';
import * as React from 'react';

const SamplePanel = (props: { title: string; value: string }) => {
  return (
    <Tabs.Panel value={props.value}>
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
        <Tabs value={value} onValueChange={onValueChange} variant="accent-ghost">
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
} = ({}) => {
  return (
    <React.Fragment>
      <CanvasTabs.Default />
    </React.Fragment>
  );
};

CanvasTabs.Default = CanvasTabsDefault;
CanvasTabs.displayName = '@v2/Canvas.Tabs';
export { CanvasTabs };
