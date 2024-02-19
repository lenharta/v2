import { Page } from '@/app/layouts';
import { Button, Space, Tabs } from '@/common';

export const Toolbox = () => {
  return (
    <Page>
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <Space size="xs" />
        <Button scheme="accent-low">Button 1</Button>
        <Button scheme="accent-med">Button 2</Button>
        <Button scheme="accent-high">Button 3</Button>
        <Space size="xs" />
        <Tabs>
          <Tabs.List>
            <Tabs.Item label="Tab Item #1" />
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
