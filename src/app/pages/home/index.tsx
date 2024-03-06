import { Page } from '@/app/layouts';
import { HomeHero } from './hero';
import { HomeOverview } from './overview';
import { Text, Tile, Title } from '@/common';

// Think Freely, Open Minds, <span className="accent">Create With Courage,</span>

// OUTLINE
// Overview

//

export const Home = () => {
  return (
    <Page>
      <HomeHero />
      <Page.Content>
        <HomeOverview />
        <section className="sec">
          <div className="sec-content">
            <Tile.Group>
              <Tile>
                <Title>Tile Title 1</Title>
                <Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sit aperiam
                  eius, ducimus dignissimos perferendis laboriosam molestiae facilis voluptas, illo
                  quod illum sapiente aut. Vitae quasi minima explicabo totam soluta?
                </Text>
              </Tile>
              <Tile>
                <Title>Tile Title 2</Title>
                <Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sit aperiam
                  eius, ducimus dignissimos perferendis laboriosam molestiae facilis voluptas, illo
                  quod illum sapiente aut. Vitae quasi minima explicabo totam soluta?
                </Text>
              </Tile>
              <Tile>
                <Title>Tile Title 3</Title>
                <Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sit aperiam
                  eius, ducimus dignissimos perferendis laboriosam molestiae facilis voluptas, illo
                  quod illum sapiente aut. Vitae quasi minima explicabo totam soluta?
                </Text>
              </Tile>
            </Tile.Group>
          </div>
        </section>
      </Page.Content>
    </Page>
  );
};
