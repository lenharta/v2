import React from 'react';
import { DemoRoot } from '../DemoRoot';
import { DATA_SAMPLE_GROCERY_LIST } from '@/data';
import { Accordion, Box, Icon, Text, Title } from '@/core';

const items = DATA_SAMPLE_GROCERY_LIST.map(({ value, description }) => (
  <Accordion.Item key={value} value={value}>
    <Accordion.Target icon={<Icon name="folder" />}>{value}</Accordion.Target>
    <Accordion.Panel>
      <Text>{description}</Text>
    </Accordion.Panel>
  </Accordion.Item>
));

const DemoAccordionSingle = () => {
  const [active, setActive] = React.useState<string | null>(null);
  return (
    <Box className="v2-demo-box-accordion">
      <Accordion value={active} onValueChange={setActive}>
        {items}
      </Accordion>
    </Box>
  );
};

const DemoAccordionMultiple = () => {
  const [active, setActive] = React.useState<string[]>([]);
  return (
    <Box className="v2-demo-box-accordion">
      <Accordion value={active} onValueChange={setActive} multiple>
        {items}
      </Accordion>
    </Box>
  );
};

const DemoAccordionElevated = () => {
  const [active, setActive] = React.useState<string | null>(null);
  return (
    <Box className="v2-demo-box-accordion">
      <Accordion value={active} onValueChange={setActive} elevated>
        {items}
      </Accordion>
    </Box>
  );
};

const DemoAccordionNoRotation = () => {
  const [active, setActive] = React.useState<string | null>(null);
  return (
    <Box className="v2-demo-box-accordion">
      <Accordion
        value={active}
        onValueChange={setActive}
        chevronRotation={false}
        children={items}
        elevated
      />
    </Box>
  );
};

const DemoAccordion = () => {
  return (
    <DemoRoot>
      <Title>Accordion | Single Select</Title>
      <DemoAccordionSingle />
      <Title>Accordion | Multiple Select</Title>
      <DemoAccordionMultiple />
      <Title>Accordion | Elevated</Title>
      <DemoAccordionElevated />
      <Title>Accordion | No Chevron Rotation</Title>
      <DemoAccordionNoRotation />
    </DemoRoot>
  );
};

export { DemoAccordion };
