import React from 'react';
import { Accordion } from '@/core';
import { DemoRoot } from '../DemoRoot';

const DemoAccordion = () => {
  // const [active, setActive] = React.useState<string | null>(null);
  const [active, setActive] = React.useState<string[]>([]);
  return (
    <DemoRoot>
      {/* <Accordion value={active} onValueChange={setActive}> */}
      <Accordion value={active} onValueChange={setActive} multiple>
        <Accordion.Item value="accordion-item-1">
          <Accordion.Target>Target 1</Accordion.Target>
          <Accordion.Panel>Panel 1</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="accordion-item-2">
          <Accordion.Target>Target 2</Accordion.Target>
          <Accordion.Panel>Panel 2</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="accordion-item-3">
          <Accordion.Target>Target 3</Accordion.Target>
          <Accordion.Panel>Panel 3</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </DemoRoot>
  );
};

export { DemoAccordion };
