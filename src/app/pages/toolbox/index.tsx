import { Tabs } from '@/common/Tabs';
import { Page } from '@/app/layouts';

export const Toolbox = () => {
  return (
    <Page>
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <Tabs>
          <Tabs.List>
            <Tabs.Item label="Tab Item #1" />
            <Tabs.Item label="Tab Item #2" />
            <Tabs.Item label="Tab Item #3" />
            <Tabs.Item label="Tab Item #4" />
            <Tabs.Item label="Tab Item #5" />
          </Tabs.List>
        </Tabs>
      </Page.Content>
    </Page>
  );
};
