import { Tabs } from '@/common/Tabs';
import { Page } from '@/app/layouts';
import { Space } from '@/common';

export const Toolbox = () => {
  return (
    <Page>
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <Space size="xs" />
        <Tabs size="xl">
          <Tabs.List>
            <Tabs.Item label="Tab Item #1" size="xl" />
            <Tabs.Item label="Tab Item #2" />
            <Tabs.Item label="Tab Item #3" />
            <Tabs.Item label="Tab Item #4" selected />
            <Tabs.Item label="Tab Item #5" />
          </Tabs.List>
        </Tabs>
        <Space size="xs" />
      </Page.Content>
    </Page>
  );
};
