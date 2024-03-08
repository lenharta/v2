import { Section } from '@/app/layouts';
import { Text, Title } from '@/common';

export const HomeOverview = () => {
  return (
    <Section>
      <Section.Column span={[1, 1, 1, 2, 2]}>
        <div className="home-overview-left">
          <Title h2>Overview</Title>
          <Text>
            Actively looking to join a team of talented engineers that drive transformative thinking
            and improve the human relationship with technology.
          </Text>
        </div>
      </Section.Column>
      <Section.Column span={[1, 1, 1, 2, 2]} scheme="accent">
        <div className="home-overview-right">
          <Title h3>
            Shaping the future of the world{'\u2019'}s biggest brands{'\u2013'}and having fun while
            doing it.
          </Title>
        </div>
      </Section.Column>
    </Section>
  );
};
