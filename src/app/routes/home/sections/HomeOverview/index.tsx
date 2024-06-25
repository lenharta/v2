import { Icon, Text } from '@/core';
import { Section, TileLink } from '@/app';

const HomeOverview: React.FC<{}> = () => (
  <Section className="v2-home-overview">
    <div className="v2-home-overview-inner">
      <div className="v2-home-overview-banner">
        <Text className="v2-home-overview-banner-text">
          Located in the United States, I'm seeking for a role in a team of skilled engineers
          dedicated to pioneering innovation, drive transformative thinking, and make impactful
          contributions in the industry.
        </Text>
      </div>
      <TileLink.Group orientation="vertical">
        <TileLink
          rightContent={<Icon name="arrow-northeast" />}
          className="v2-home-overview-link-item"
          variant="accent-elevated"
          label="See Experience"
          to="/experience"
        />
        <TileLink
          rightContent={<Icon name="arrow-northeast" />}
          className="v2-home-overview-link-item"
          variant="elevated"
          label="See Projects"
          to="/projects"
        />
      </TileLink.Group>
    </div>
  </Section>
);

HomeOverview.displayName = '@v2/Home.Overview';
export { HomeOverview };
