import { Section } from '@/app/layouts';
import { Text, Title } from '@/common';

const HomeOverviewLeft = () => (
  <div>
    <Title h2>Overview</Title>
    <Text>
      Actively looking to join a team of talented engineers that drive transformative thinking and
      improve the human relationship with technology.
    </Text>
  </div>
);

const HomeOverviewRight = () => (
  <div>
    <Title h3>
      Shaping the future of the world{'\u2019'}s biggest brands{'\u2013'}and having fun while doing
      it.
    </Title>
  </div>
);

export const HomeOverview = () => {
  return (
    <Section>
      <HomeOverviewLeft />
      <HomeOverviewRight />
    </Section>
  );
};
