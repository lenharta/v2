import React from 'react';
import { Tabs } from '@/core';

const DemoTabsUncontrolled = () => (
  <Tabs defaultValue="tab-1">
    <Tabs.List>
      <Tabs.Item value="tab-1" label="Tab #1" />
      <Tabs.Item value="tab-2" label="Tab #2" />
      <Tabs.Item value="tab-3" label="Tab #3" />
      <Tabs.Item value="tab-4" label="Tab #4" />
    </Tabs.List>
    <Tabs.Panel value="tab-1" children={<div>Tabs Panel #1</div>} />
    <Tabs.Panel value="tab-2" children={<div>Tabs Panel #2</div>} />
    <Tabs.Panel value="tab-3" children={<div>Tabs Panel #3</div>} />
    <Tabs.Panel value="tab-4" children={<div>Tabs Panel #4</div>} />
  </Tabs>
);

const DemoTabsControlled = () => {
  const [activeValue, setActiveValue] = React.useState('tab-1');
  return (
    <Tabs value={activeValue} onChange={(value) => setActiveValue(value)}>
      <Tabs.List>
        <Tabs.Item value="tab-1" label="Tab #1" />
        <Tabs.Item value="tab-2" label="Tab #2" />
        <Tabs.Item value="tab-3" label="Tab #3" />
        <Tabs.Item value="tab-4" label="Tab #4" />
      </Tabs.List>
      <Tabs.Panel value="tab-1" children={<div>Tabs Panel #1</div>} />
      <Tabs.Panel value="tab-2" children={<div>Tabs Panel #2</div>} />
      <Tabs.Panel value="tab-3" children={<div>Tabs Panel #3</div>} />
      <Tabs.Panel value="tab-4" children={<div>Tabs Panel #4</div>} />
    </Tabs>
  );
};

export { DemoTabsUncontrolled, DemoTabsControlled };
