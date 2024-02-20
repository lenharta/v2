import { Page, Section } from '@/app/layouts';
import { Button, Checkbox, Chip, Space, Stack, Tabs, Title } from '@/common';
import { CheckboxGroup } from '@/common/Checkbox/Group';

const DATA_DEMO_CHEMICAL_DATA = [
  { symbol: 'H', name: 'Hydrogen', mass: 1.008 },
  { symbol: 'He', name: 'Helium', mass: 4.0026 },
  { symbol: 'Li', name: 'Lithium', mass: 6.94 },
  { symbol: 'Be', name: 'Beryllium', mass: 9.0122 },
  { symbol: 'B', name: 'Boron', mass: 10.81 },
  { symbol: 'C', name: 'Carbon', mass: 12.01 },
  { symbol: 'N', name: 'Nitrogen', mass: 14.01 },
  { symbol: 'O', name: 'Oxygen', mass: 16.0 },
  { symbol: 'F', name: 'Fluorine', mass: 19.0 },
  { symbol: 'Ne', name: 'Neon', mass: 20.18 },
  { symbol: 'Na', name: 'Sodium', mass: 22.99 },
  { symbol: 'Mg', name: 'Magnesium', mass: 24.31 },
  { symbol: 'Al', name: 'Aluminum', mass: 26.98 },
  { symbol: 'Si', name: 'Silicon', mass: 28.09 },
  { symbol: 'P', name: 'Phosphorus', mass: 30.97 },
  { symbol: 'S', name: 'Sulfur', mass: 32.07 },
  { symbol: 'Cl', name: 'Chlorine', mass: 35.45 },
  { symbol: 'Ar', name: 'Argon', mass: 39.95 },
  { symbol: 'K', name: 'Potassium', mass: 39.1 },
  { symbol: 'Ca', name: 'Calcium', mass: 40.08 },
];

const DATA_DEMO_CHECKBOX_OPTIONS = [{}];

const useFormState = () => {};

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
      </Page.Content>
    </Page>
  );
};
