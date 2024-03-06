import { Text, Title } from '@/common';

export const HomeOverview = () => {
  return (
    <section className="home-sec-overview-root">
      <div className="home-sec-overview-left">
        <div className="home-sec-overview-left-content">
          <Title h2>Overview</Title>
          <Text>
            Actively looking to join a team of talented engineers that drive transformative thinking
            and improve the human relationship with technology.
          </Text>
        </div>
      </div>
      <div className="home-sec-overview-right">
        <div className="home-sec-overview-right-content">
          <Title h3>
            Shaping the future of the world{'\u2019'}s biggest brands{'\u2013'}and having fun while
            doing it.
          </Title>
        </div>
      </div>
    </section>
  );
};
