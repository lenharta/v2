import { Page } from '@/app';
import { Text, Title } from '@/core';

const data = [
  {
    id: `overview-experience`,
    value: `5+ yrs`,
    title: `Development Experience`,
    text: `With more than half a decade in the industry, I bring a wealth of knowledge and hands-on experience in front-end development. My journey has seen the evolution of web technologies, enabling me to stay ahead of trends and deliver modern, efficient solutions.`,
  },
  {
    id: `overview-marketcap`,
    value: `$14B`,
    title: `Market Capitalization`,
    text: `Proud to have contributed to projects for clients with a combined market capitalization exceeding $14 billion. This experience underscores my capability to handle high-stakes, high-impact projects with professionalism and technical proficiency.`,
  },
  {
    id: `overview-components`,
    value: `120+`,
    title: `Production Components`,
    text: `Developed and delivered over 120 reusable production components, enhancing codebase maintainability and scalability. Recently created a custom, fully-featured library for a Fortune 500 company in the financial sector.`,
  },
  {
    id: `overview-coffees`,
    value: `1852`,
    title: `Cups Of Coffee`,
    text: `Staying current with the latest industry trends and technologies is essential for crafting relevant and effective project solutions. This commitment demands extensive hours, but my dedication to excellence and a good cup of coffee, always keeps me motivated.`,
  },
];

const OverviewStats: React.FC<{}> = ({}) => (
  <Page.Section>
    <div className="v2-overview-stats-layout">
      {data.map((card) => (
        <div className="v2-overview-stats-item" key={card.id}>
          <Text variant="accent-max" className="v2-overview-stats-item-value">
            {card.value}
          </Text>
          <Title h3 variant="base-med" className="v2-overview-stats-item-title">
            {card.title}
          </Title>
          <Text variant="base-min" className="v2-overview-stats-item-text">
            {card.text}
          </Text>
        </div>
      ))}
    </div>
  </Page.Section>
);

export { OverviewStats };
