import { Page } from '@/app';
import { Text, Title } from '@/core';

interface OverviewStatsItem {
  id: string;
  value: string;
  title: string;
  text: string;
}

const OverviewStatsCard: React.FC<OverviewStatsItem> = (props) => {
  const { id, text, title, value } = props;
  return (
    <div className="v2-overview-stats-card" id={id}>
      <Text className="v2-overview-stats-card-value">{value}</Text>
      <Title className="v2-overview-stats-card-title" h3>
        {title}
      </Title>
      <Text className="v2-overview-stats-card-text">{text}</Text>
    </div>
  );
};

const OverviewStatsCardGroup: React.FC<{ data: OverviewStatsItem[] }> = (props) => {
  return (
    <div className="v2-overview-stats-card-group">
      {(props.data || []).map((item) => (
        <OverviewStatsCard key={item.id} {...item} />
      ))}
    </div>
  );
};

const OverviewStats: React.FC<{}> = ({}) => (
  <Page.Section>
    <div className="v2-overview-stats-layout">
      <OverviewStatsCardGroup
        data={[
          {
            value: `5+ yrs`,
            title: `Development Experience`,
            text: `With more than half a decade in the industry, I bring a wealth of knowledge and hands-on experience in front-end development. My journey has seen the evolution of web technologies, enabling me to stay ahead of trends and deliver modern, efficient solutions.`,
            id: `overview-experience-card`,
          },
          {
            value: `$14B`,
            title: `Market Capitalization`,
            text: `Proud to have contributed to projects for clients with a combined market capitalization exceeding $14 billion. This experience underscores my capability to handle high-stakes, high-impact projects with professionalism and technical proficiency.`,
            id: `overview-marketcap-card`,
          },
        ]}
      />

      <OverviewStatsCardGroup
        data={[
          {
            value: `120+`,
            title: `Production Components`,
            text: `Developed and delivered over 120 reusable production components, enhancing codebase maintainability and scalability. Recently created a custom, fully-featured library for a Fortune 500 company in the financial sector.`,
            id: `overview-components-card`,
          },
          {
            value: `1852`,
            title: `Cups Of Coffee`,
            text: `Staying current with the latest industry trends and technologies is essential for crafting relevant and effective project solutions. This commitment demands extensive hours, but my dedication to excellence and a good cup of coffee, always keeps me motivated.`,
            id: `overview-coffees-card`,
          },
        ]}
      />
    </div>
  </Page.Section>
);

export { OverviewStats };
