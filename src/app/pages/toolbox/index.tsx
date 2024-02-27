import { Page, Section } from '@/app/layouts';
import { Button, Text, Tile, Title } from '@/common';
import React from 'react';

export interface Point2D {
  x: number;
  y: number;
}

export const distance = (a: number, b: number) => Math.abs(a - b);

export const distance2D = (a: Point2D, b: Point2D) => {
  const xDelta = distance(a.x, b.x);
  const yDelta = distance(a.y, b.y);
  return Math.sqrt(xDelta ** 2 + yDelta ** 2);
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

// const [isAnimating, setAnimating] = React.useState<boolean>();
// <div className="animated-grid-pattern-controls">
//   <Button onClick={() => setAnimating((c) => !c)}>TOGGLE</Button>
//   <Button onClick={() => setAnimating(true)}>ENTER</Button>
//   <Button onClick={() => setAnimating(false)}>EXIT</Button>
//   <Button onClick={() => setAnimating(undefined)}>RESET</Button>
// </div>

interface GridPatternAnimationPropss {
  isAnimating?: boolean;
  shouldExit?: boolean;
}

function useCSSAnimation(options: { duration: number }) {}

export const GridPattern = (props: GridPatternAnimationPropss) => {
  const { isAnimating, shouldExit } = props;

  console.log('isAnimating', isAnimating);
  console.log('shouldExit', shouldExit);

  // const handleExit = React.useCallback(() => {
  //   return ;
  // }, [shouldExit]);

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

export const Toolbox = () => {
  return (
    <Page>
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <Section>
          <Section.Header>
            <Title>Grid Pattern Demo</Title>
          </Section.Header>
          <Section.Content></Section.Content>
        </Section>
      </Page.Content>
    </Page>
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
