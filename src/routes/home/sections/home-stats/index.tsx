import { Headline, Section } from '@/app';
import { Text, Title } from '@/core';

const data = [
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

export const HomeStats = () => {
  return (
    <>
      <Headline className="v2-home-stats-headline" title="Stats" href="home-stats" order=".02" />
      <Section className="v2-home-stats">
        <div className="v2-home-stats-banner"></div>
        <div className="v2-home-stats-cards">
          {data.map((item) => (
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
