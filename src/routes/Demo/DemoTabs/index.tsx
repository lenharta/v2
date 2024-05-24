import React from 'react';
import { Tabs } from '@/core';
import { DemoRoot } from '../DemoRoot';

const DemoTabsControlled = () => {
  const [activeTab, setActiveTab] = React.useState('tab-item-1');
  return (
    <DemoRoot>
      <Tabs value={activeTab} onChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Item label="Tab 1" value="tab-item-1" />
          <Tabs.Item label="Tab 2" value="tab-item-2" />
          <Tabs.Item label="Tab 3" value="tab-item-3" />
          <Tabs.Item label="Tab 4" value="tab-item-4" />
          <Tabs.Item label="Tab 5" value="tab-item-5" />
        </Tabs.List>
        <Tabs.Panel value="tab-item-1" children={<div>Panel 1</div>} />
        <Tabs.Panel value="tab-item-2" children={<div>Panel 2</div>} />
        <Tabs.Panel value="tab-item-3" children={<div>Panel 3</div>} />
        <Tabs.Panel value="tab-item-4" children={<div>Panel 4</div>} />
        <Tabs.Panel value="tab-item-5" children={<div>Panel 5</div>} />
      </Tabs>
    </DemoRoot>
  );
};

const DemoTabsUncontrolled = () => {
  return (
    <DemoRoot>
      <Tabs defaultValue="tab-item-1">
        <Tabs.List>
          <Tabs.Item label="Tab 1" value="tab-item-1" />
          <Tabs.Item label="Tab 2" value="tab-item-2" />
          <Tabs.Item label="Tab 3" value="tab-item-3" />
          <Tabs.Item label="Tab 4" value="tab-item-4" />
          <Tabs.Item label="Tab 5" value="tab-item-5" />
        </Tabs.List>
        <Tabs.Panel value="tab-item-1" children={<div>Panel 1</div>} />
        <Tabs.Panel value="tab-item-2" children={<div>Panel 2</div>} />
        <Tabs.Panel value="tab-item-3" children={<div>Panel 3</div>} />
        <Tabs.Panel value="tab-item-4" children={<div>Panel 4</div>} />
        <Tabs.Panel value="tab-item-5" children={<div>Panel 5</div>} />
      </Tabs>
    </DemoRoot>
  );
};

export { DemoTabsUncontrolled, DemoTabsControlled };
