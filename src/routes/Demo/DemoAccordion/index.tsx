import { Accordion } from '@/core';
import { DemoRoot } from '../DemoRoot';

const DemoAccordion = () => {
  return (
    <DemoRoot>
      <Accordion>
        <Accordion.Item>
          <Accordion.Target>Target 1</Accordion.Target>
          <Accordion.Panel>Panel 1</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Target>Target 2</Accordion.Target>
          <Accordion.Panel>Panel 2</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Target>Target 3</Accordion.Target>
          <Accordion.Panel>Panel 3</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </DemoRoot>
  );
};

export { DemoAccordion };
