import { Text, Title } from '@/core';
import { Headline, Section } from '@/app';

const cards = [
  {
    uid: 'home:stats:experience',
    value: `5+ yrs`,
    title: `Development Experience`,
    description: `With more than half a decade in the industry, I bring a wealth of knowledge and hands-on experience in front-end development. My journey has seen the evolution of web technologies, enabling me to stay ahead of trends and deliver modern, efficient solutions.`,
  },
  {
    uid: 'home:stats:marketcap',
    value: `$14B`,
    title: `Market Capitalization`,
    description: `Proud to have contributed to projects for clients with a combined market capitalization exceeding $14 billion. This experience underscores my capability to handle high-stakes, high-impact projects with professionalism and technical proficiency.`,
  },
  {
    uid: 'home:stats:components',
    value: `120+`,
    title: `Production Components`,
    description: `Developed and delivered over 120 reusable production components, enhancing codebase maintainability and scalability. Recently created a custom, fully-featured library for a Fortune 500 company in the financial sector.`,
  },
  {
    uid: 'home:stats:coffees',
    value: `1852`,
    title: `Cups Of Coffee`,
    description: `Staying current with the latest industry trends and technologies is essential for crafting relevant and effective project solutions. This commitment demands extensive hours, but my dedication to excellence and a good cup of coffee, always keeps me motivated.`,
  },
];

export const HomeIntro = () => {
  return (
    <>
      <Headline className="v2-home-intro-headline" title="Intro" href="home-intro" order=".01" />
      <Section className="v2-home-intro">
        <Text className="v2-home-intro-text">
          Front-end Engineer located in the United States, actively seeking a role within a team of
          talented engineers that drive innovation and make impactful contributions to the industry.
        </Text>

        <div className="v2-home-stats-cards">
          {cards.map((item) => (
            <div className="v2-home-stats-card" key={item.uid}>
              <Text className="v2-home-stats-card-value" span>
                <>{item.value}</>
              </Text>

              <Title className="v2-home-stats-card-title" h3>
                <>{item.title}</>
              </Title>

              <Text className="v2-home-stats-card-text">
                <>{item.description}</>
              </Text>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};
