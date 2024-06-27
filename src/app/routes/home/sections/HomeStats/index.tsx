import { Section } from '@/app';
import { Divider, Text, Title } from '@/core';

interface HomeStatsCardProps {
  id: string;
  text: string;
  title: string;
  value: string;
}

const HomeStatsCard: React.FC<HomeStatsCardProps> = (props) => (
  <div className="v2-home-stats-card" id={props.id}>
    <div className="v2-home-stats-card-header">
      <Text className="v2-home-stats-card-value" children={props.value} />
      <Title className="v2-home-stats-card-title" children={props.title} />
    </div>
    <Divider />
    <Text className="v2-home-stats-card-text" children={props.text} />
  </div>
);

const HomeStats: React.FC<{}> = () => {
  return (
    <Section className="v2-home-stats" id="home-stats">
      <div className="v2-home-stats-inner">
        <HomeStatsCard
          id="home-stats-experience"
          text="With more than half a decade in the industry, I bring a wealth of knowledge and hands-on experience in front-end development. My journey has seen the evolution of web technologies, enabling me to stay ahead of trends and deliver modern, efficient solutions."
          title="Years Experience"
          value="5+"
        />
        <HomeStatsCard
          id="home-stats-capitalization"
          text="Proud to have contributed to projects for clients with a combined market capitalization exceeding $14 billion. This experience underscores my capability to handle high-stakes, high-impact projects with professionalism and technical proficiency."
          title="Market Cap"
          value="$14B"
        />
        <HomeStatsCard
          id="home-stats-components"
          text="Developed and delivered over 120 reusable production components, enhancing codebase maintainability and scalability. Recently created a custom, fully-featured library for a Fortune 500 company in the financial sector."
          title="Components"
          value="120+"
        />
        <HomeStatsCard
          id="home-stats-coffees"
          text="Staying updated with the latest industry trends and technologies to provide the most relevant and effective solutions for my projects, requires long hours, but a commitment to excellence and a good cup of coffee keep me going!"
          title="Cups of Coffee"
          value="1852"
        />
      </div>
    </Section>
  );
};

HomeStats.displayName = '@v2/Home.Stats';
export { HomeStats };
