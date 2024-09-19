import * as React from 'react';
import { Tabs, Text, Title } from '@/core';
import { SANDBOX_META, SandboxLayout } from '../sandbox-layout';

export const SandboxTabs: React.FC<{}> = ({}) => {
  const [value, setValue] = React.useState('item-a');

  return (
    <React.Fragment>
      <SandboxLayout
        name="Tabs"
        href={SANDBOX_META.tabs}
        containerStyle={{
          maxWidth: 800,
        }}
        controls={[
          {
            prop: 'orientation',
            type: 'segmented',
            data: ['horizontal', 'vertical'],
            initialValue: 'horizontal',
          },
          {
            type: 'select',
            prop: 'variant',
            data: ['default', 'accent'],
            initialValue: 'default',
          },
          {
            prop: 'size',
            type: 'select',
            data: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            initialValue: 'sm',
          },
          {
            prop: 'grow',
            type: 'switch',
            initialValue: true,
          },
        ]}
      >
        <Tabs value={value} onChange={setValue} className="v2-sandbox-tabs">
          <Tabs.List>
            <Tabs.Item value="item-a">Item A</Tabs.Item>
            <Tabs.Item value="item-b">Item B</Tabs.Item>
            <Tabs.Item value="item-c">Item C</Tabs.Item>
          </Tabs.List>

          <Tabs.Panel value="item-a">
            <Title>A</Title>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus necessitatibus,
              expedita dolorum dolores eaque facilis voluptatibus vel et perspiciatis commodi hic,
              veritatis maxime iusto voluptatem qui laborum blanditiis temporibus nisi?
            </Text>
          </Tabs.Panel>

          <Tabs.Panel value="item-b">
            <Title>B</Title>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus necessitatibus,
              expedita dolorum dolores eaque facilis voluptatibus vel et perspiciatis commodi hic,
              veritatis maxime iusto voluptatem qui laborum blanditiis temporibus nisi?
            </Text>
          </Tabs.Panel>

          <Tabs.Panel value="item-c">
            <Title>C</Title>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus necessitatibus,
              expedita dolorum dolores eaque facilis voluptatibus vel et perspiciatis commodi hic,
              veritatis maxime iusto voluptatem qui laborum blanditiis temporibus nisi?
            </Text>
          </Tabs.Panel>
        </Tabs>
      </SandboxLayout>
    </React.Fragment>
  );
};

SandboxTabs.displayName = '@v2/Sandbox.Tabs';
