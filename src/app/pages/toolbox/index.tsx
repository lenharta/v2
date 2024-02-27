import { Page, Section } from '@/app/layouts';
import { Text, Tile, Title } from '@/common';

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

export const Toolbox = () => {
  return (
    <Page>
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <Section>
          <Section.Header>
            <Title>Header</Title>
          </Section.Header>
          <Section.Content>
            <Title>Content</Title>
          </Section.Content>
        </Section>
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
        <Section scheme="secondary">
          <Section.Content>
            <Tile.Group orientation="vertical">
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
      </Page.Content>
    </Page>
  );
};
