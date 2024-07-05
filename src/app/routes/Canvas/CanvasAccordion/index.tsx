import { Accordion, Text } from '@/core';
import * as React from 'react';

const CanvasAccordionPanelContent: React.FC<{}> = ({}) => {
  return (
    <Accordion.Panel>
      <div className="v2-canvas-accordion-default-content">
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque reiciendis voluptatum
          perspiciatis voluptatibus cumque, ducimus id soluta officia obcaecati magni debitis ullam
          quaerat repudiandae, porro aut ratione recusandae velit tempora.
        </Text>
      </div>
    </Accordion.Panel>
  );
};

const CanvasAccordionDefault: React.FC<{}> = ({}) => {
  const [openItem, setOpenItem] = React.useState<string | null>(null);
  return (
    <div className="v2-canvas-accordion-default">
      <Accordion
        value={openItem}
        variant="accent-elevated"
        onValueChange={setOpenItem}
        chevronRotation={true}
      >
        <Accordion.Item value="item-1">
          <Accordion.Target>Item 1</Accordion.Target>
          <CanvasAccordionPanelContent />
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Target>Item 2</Accordion.Target>
          <CanvasAccordionPanelContent />
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Target>Item 3</Accordion.Target>
          <CanvasAccordionPanelContent />
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

const CanvasAccordion: React.FC<{}> & {
  Default: typeof CanvasAccordionDefault;
} = ({}) => {
  return (
    <React.Fragment>
      <CanvasAccordion.Default />
    </React.Fragment>
  );
};

CanvasAccordion.Default = CanvasAccordionDefault;
CanvasAccordion.displayName = '@v2/Canvas.Accordion';
export { CanvasAccordion };
