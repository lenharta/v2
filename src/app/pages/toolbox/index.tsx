import * as React from 'react';
import { Page, Section } from '@/app/layouts';
import { Button, Checkbox, Chip, Control, Space, Stack, Tabs, Title } from '@/common';
import { CheckboxGroup } from '@/common/Checkbox/Group';

export const DemoComponentControl = () => {
  const [value, setValue] = React.useState('item-1');
  const [value2, setValue2] = React.useState('item-1');
  return (
    <>
      <Control
        value={value}
        size="lg"
        orientation="horizontal"
        onValueChange={setValue}
        data={['item-1', 'item-2', 'item-3', 'item-4', 'item-5']}
      />
      <Space size="sm" />
      <Control
        value={value2}
        onValueChange={setValue2}
        orientation="vertical"
        data={['item-1', 'item-2', 'item-3', 'item-4', 'item-5']}
      />
    </>
  );
};

export const Toolbox = () => {
  return (
    <Page>
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <Section>
          <Stack gap="xxs">
            <Button scheme="accent-low">Button 1</Button>
            <Button scheme="accent-med">Button 2</Button>
            <Button scheme="accent-high">Button 3</Button>
          </Stack>
          <Space size="xs" />
          <Chip.Group
            items={[
              { id: 'chip-1', label: 'Chip 1', value: 'chip-value-1' },
              { id: 'chip-2', label: 'Chip 2', value: 'chip-value-2' },
              { id: 'chip-3', label: 'Chip 3', value: 'chip-value-3' },
              { id: 'chip-4', label: 'Chip 4', value: 'chip-value-4' },
            ]}
          />
          <Space size="xs" />
          <Tabs.Group orientation="horizontal">
            <Tabs.Item label="Tab Item #1" />
            <Tabs.Item label="Tab Item #2" />
            <Tabs.Item label="Tab Item #3" />
            <Tabs.Item label="Tab Item #4" selected />
            <Tabs.Item label="Tab Item #5" />
          </Tabs.Group>
          <Space size="xs" />
        </Section>

        <Section py="lg" scheme="primary">
          <Stack gap="sm">
            <Title size="xxs">Checkbox Group</Title>

            <CheckboxGroup orientation="vertical">
              <Checkbox label="Option 1" scheme="elevated" />
              <Checkbox label="Option 2" scheme="elevated" />
              <Checkbox label="Option 3" scheme="elevated" />
              <Checkbox label="Option 4" scheme="elevated" />
              <Checkbox label="Option 5" scheme="elevated" />
            </CheckboxGroup>

            <CheckboxGroup orientation="horizontal">
              <Checkbox label="Option 1" scheme="elevated" />
              <Checkbox label="Option 2" scheme="elevated" />
              <Checkbox label="Option 3" scheme="elevated" />
              <Checkbox label="Option 4" scheme="elevated" />
              <Checkbox label="Option 5" scheme="elevated" />
            </CheckboxGroup>
          </Stack>
        </Section>
        <Section py="lg" scheme="primary">
          <DemoComponentControl />
        </Section>
      </Page.Content>
    </Page>
  );
};
