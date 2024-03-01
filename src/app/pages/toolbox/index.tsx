import { Page, Section } from '@/app/layouts';
import { Orientation, Size } from '@/types/common';
import { Checkbox, Text, Tile, Title } from '@/common';
import React from 'react';

export const Toolbox = () => {
  return (
    <Page>
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <Section>
          <div style={{ paddingBlock: 75 }}>
            <Section.Header>
              <Title>Checkbox (primary)</Title>
            </Section.Header>
            <Section.Content>
              <DemoCheckboxStates />
              <DemoCheckboxSingle />
              <DemoCheckboxGroup size="sm" />
              <DemoCheckboxGroup size="sm" orientation="horizontal" />
            </Section.Content>
          </div>
        </Section>
        <Section scheme="secondary">
          <div style={{ paddingBlock: 75 }}>
            <Section.Header>
              <Title>Checkbox (secondary)</Title>
            </Section.Header>
            <Section.Content>
              <DemoCheckboxStates />
              <DemoCheckboxSingle />
              <DemoCheckboxGroup size="md" />
              <DemoCheckboxGroup size="md" orientation="horizontal" />
            </Section.Content>
          </div>
        </Section>
      </Page.Content>
    </Page>
  );
};

const DemoCheckboxStates = () => {
  return (
    <div style={{ paddingBlock: 25 }}>
      <Checkbox label="Label (loading)" description="Example description here." loading />
      <Checkbox label="Label (disabled)" description="Example description here." disabled />
    </div>
  );
};

const DemoCheckboxSingle = () => {
  const [checked, setChecked] = React.useState(false);
  console.log('SINGLE-CHECKED', checked);
  return (
    <div style={{ paddingBlock: 25 }}>
      <Checkbox
        label="Single Checkbox"
        description="Example description here."
        onChange={(e) => setChecked(!checked)}
        indeterminate
        checked={checked}
      />
    </div>
  );
};

const DemoCheckboxGroup = (props: { size?: Size; orientation?: Orientation }) => {
  const { size = 'xs', orientation = 'vertical' } = props;
  const [value, setValue] = React.useState<string[]>([]);
  console.log(value);
  return (
    <div style={{ paddingBlock: 25 }}>
      <Checkbox.Group orientation={orientation} value={value} onChange={setValue}>
        <Checkbox
          size={size}
          value="option-1"
          label="Group Checkbox 1"
          description="Example description here."
        />
        <Checkbox
          size={size}
          value="option-2"
          label="Group Checkbox 2"
          description="Example description here."
        />
        <Checkbox
          size={size}
          value="option-3"
          label="Group Checkbox 3"
          description="Example description here."
        />
      </Checkbox.Group>
    </div>
  );
};

export const DemoTileGroup = () => {
  return (
    <Section>
      <Section.Content>
        <Tile.Group>
          <Tile onClick={() => console.log('Tile Clicked!')}>
            <Title>Tile Content</Title>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quas corrupti
              exercitationem, consequuntur ipsa aliquid quasi laboriosam adipisci nesciunt
              voluptatibus illum aperiam dolore esse molestiae unde beatae quo ratione eos?
            </Text>
          </Tile>
          <Tile>
            <Title>Tile Content</Title>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quas corrupti
              exercitationem, consequuntur ipsa aliquid quasi laboriosam adipisci nesciunt
              voluptatibus illum aperiam dolore esse molestiae unde beatae quo ratione eos?
            </Text>
          </Tile>
          <Tile>
            <Title>Tile Content</Title>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quas corrupti
              exercitationem, consequuntur ipsa aliquid quasi laboriosam adipisci nesciunt
              voluptatibus illum aperiam dolore esse molestiae unde beatae quo ratione eos?
            </Text>
          </Tile>
          <Tile>
            <Title>Tile Content</Title>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quas corrupti
              exercitationem, consequuntur ipsa aliquid quasi laboriosam adipisci nesciunt
              voluptatibus illum aperiam dolore esse molestiae unde beatae quo ratione eos?
            </Text>
          </Tile>
        </Tile.Group>
      </Section.Content>
    </Section>
  );
};
