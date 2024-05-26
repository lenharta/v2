import React from 'react';
import { Accordion, Box, Icon, Text, Title } from '@/core';
import { DemoRoot } from '../DemoRoot';
import { dataSampleGroceries } from '@/data';

const DemoAccordionMultiple = () => {
  const [active, setActive] = React.useState<string[]>([]);

  const items = dataSampleGroceries.map(({ value, description }) => (
    <Accordion.Item key={value} value={value}>
      <Accordion.Target icon={<Icon name="taskComplete" />}>{value}</Accordion.Target>
      <Accordion.Panel>
        <Text>{description}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion value={active} onValueChange={setActive} multiple>
      {items}
    </Accordion>
  );
};

const DemoAccordionSingle = () => {
  const [active, setActive] = React.useState<string | null>(null);

  const items = dataSampleGroceries.map(({ value, description }) => (
    <Accordion.Item key={value} value={value}>
      <Accordion.Target icon={<Icon name="folder" />}>{value}</Accordion.Target>
      <Accordion.Panel>
        <Text>{description}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion value={active} onValueChange={setActive}>
      {items}
    </Accordion>
  );
};

const DemoAccordion = () => {
  return (
    <DemoRoot className="v2-demo-root-accordion">
      <Title>Accordion | Single Select</Title>
      <DemoAccordionSingle />
      <Title>Accordion | Multiple Select</Title>
      <DemoAccordionMultiple />
    </DemoRoot>
  );
};

export { DemoAccordion };
