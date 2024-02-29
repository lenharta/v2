import * as React from 'react';
import { Page, Section } from '@/app/layouts';
import { Button, Checkbox, Text, Tile, Title } from '@/common';
import { Orientation, Size } from '@/types/common';

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
  return (
    <div style={{ paddingBlock: 25 }}>
      <Checkbox label="Label (enabled)" description="Example description here." />
      <Checkbox label="Label (enabled)" description="Example description here." />
      <Checkbox label="Label (enabled)" description="Example description here." />
    </div>
  );
};

const DemoCheckboxGroup = (props: { size?: Size; orientation?: Orientation }) => {
  const { size = 'xs', orientation = 'vertical' } = props;
  return (
    <div style={{ paddingBlock: 25 }}>
      <Checkbox.Group orientation={orientation}>
        <Checkbox size={size} label="Label (enabled)" description="Example description here." />
        <Checkbox size={size} label="Label (enabled)" description="Example description here." />
        <Checkbox size={size} label="Label (enabled)" description="Example description here." />
      </Checkbox.Group>
    </div>
  );
};

export const GridPatternRow = () => {
  return (
    <div className="animated-grid-pattern-row">
      <div className="animated-grid-pattern-cell" />
      <div className="animated-grid-pattern-cell" />
      <div className="animated-grid-pattern-cell" />

      <div className="animated-grid-pattern-cell" />
      <div className="animated-grid-pattern-cell" />
      <div className="animated-grid-pattern-cell" />

      <div className="animated-grid-pattern-cell" />
      <div className="animated-grid-pattern-cell" />
      <div className="animated-grid-pattern-cell" />

      <div className="animated-grid-pattern-cell" />
      <div className="animated-grid-pattern-cell" />
      <div className="animated-grid-pattern-cell" />
    </div>
  );
};

interface GridPatternAnimationPropss {
  isAnimating?: boolean;
  shouldExit?: boolean;
}

export const GridPattern = (props: GridPatternAnimationPropss) => {
  const { isAnimating, shouldExit } = props;

  return (
    <>
      <div
        className="animated-grid-pattern"
        data-animation-enter={isAnimating === true ? true : undefined}
        {...(!shouldExit ? {} : { 'data-animation-exit': true })}
      >
        <GridPatternRow />
        <GridPatternRow />
        <GridPatternRow />

        <GridPatternRow />
        <GridPatternRow />
        <GridPatternRow />

        <GridPatternRow />
        <GridPatternRow />
        <GridPatternRow />

        <GridPatternRow />
        <GridPatternRow />
        <GridPatternRow />
      </div>
    </>
  );
};

export const DemoGridPattern = () => {
  return (
    <Section>
      <Section.Header>
        <Title>Demo | Grid Pattern</Title>
      </Section.Header>
      <Section.Content>
        <GridPattern />
      </Section.Content>
    </Section>
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
