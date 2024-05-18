import { Section } from '@/common';
import { Box, Checkbox, Title } from '@/core';

interface DemoCheckboxProps {}

const DemoCheckbox = (props: DemoCheckboxProps) => {
  return (
    <Section>
      <Title>Demo | Checkbox</Title>
      <Box>
        <Checkbox.Group group="cbx-group-a">
          <Checkbox label="Option 1a" />
          <Checkbox label="Option 2a" />
          <Checkbox label="Option 3a" />
          <Checkbox label="Option 4a" />
        </Checkbox.Group>
      </Box>
      <Box>
        <Checkbox.Group group="cbx-group-b">
          <Checkbox label="Option 1b" />
          <Checkbox label="Option 2b" />
          <Checkbox label="Option 3b" />
          <Checkbox label="Option 4b" />
        </Checkbox.Group>
      </Box>
    </Section>
  );
};

export { DemoCheckbox };
