import * as React from 'react';
import { Divider, Icon, Text, Title } from '@/core';
import { Page, Hero, Section } from '@/app';

const HomeHero = () => (
  <Hero>
    <Title className="v2-home-title" h1>
      <span>Frontend Engineer</span>
      <span>Human-Centered Problem Solver</span>
    </Title>
  </Hero>
);

const HomeOverview = () => (
  <Section className="v2-home-overview">
    <div className="v2-home-overview-inner">
      <div className="v2-home-overview-banner">
        <Text className="v2-home-overview-banner-text">
          Located in the United States, I'm seeking for a role in a team of skilled engineers
          dedicated to pioneering innovation, drive transformative thinking, and make impactful
          contributions in the industry.
        </Text>
      </div>
    </div>
  </Section>
);

interface HomeExperienceCardProps {
  id: string;
  text: string;
  title: string;
  icon: React.ReactNode;
}

const HomeExperienceCard: React.FC<HomeExperienceCardProps> = (props) => (
  <div className="v2-home-experience-card" id={props.id}>
    <div>{props.icon}</div>
    <div className="v2-home-experience-card-content">
      <Title className="v2-home-experience-card-title" children={props.title} h3 />
      <Text className="v2-home-experience-card-text" children={props.text} />
    </div>
  </div>
);

const HomeExperience = () => {
  return (
    <Section className="v2-home-experience">
      <div className="v2-home-experience-inner">
        <HomeExperienceCard
          id="home-experience-a11y"
          text="Committed to creating accessible web applications that are inclusive for all users. Adherence WCAG guidelines ensures applications meet high accessibility standards."
          icon={<Icon name="person-access" size="lg" />}
          title="Web Accessibility"
        />

        <HomeExperienceCard
          id="home-experience-cicd"
          text="Implementing CI/CD pipelines to enhance development efficiency and ensures rapid delivery with automated testing, build, and deployment processes."
          icon={<Icon name="infinity" size="lg" />}
          title="Integration/Deployment"
        />

        <HomeExperienceCard
          id="home-experience-card-mentoring"
          text="Actively involved in code reviews and mentoring junior developers to foster a collaborative and growth-oriented development environment."
          title="Review and Mentorship"
          icon={<Icon name="graduation-cap" size="lg" />}
        />

        <HomeExperienceCard
          id="home-experience-backend"
          text="Bringing a well-rounded skill set with knowledge in back-end development, allowing for seamless integration between front-end and back-end systems."
          icon={<Icon name="database" size="lg" />}
          title="Combined Experience"
        />

        <HomeExperienceCard
          id="home-experience-data"
          text="Experience transforming complex dynamic data into intuitive and visually appealing graphics utilizing tools like D3.js and Chart.js."
          icon={<Icon name="graph-up" size="lg" />}
          title="Data Visualization"
        />

        <HomeExperienceCard
          id="home-experience-animation"
          text="Designing and implementing custom animations and graphics to enhance user interaction and engagement."
          title="Animation and Graphics"
          icon={<Icon name="fast-forward" size="lg" />}
        />

        <HomeExperienceCard
          id="home-experience-testing"
          text="Dedicated to delivering reliable and high-quality applications through comprehensive testing and debugging using tools like Jest, Mocha, and Vitest."
          icon={<Icon name="bug" size="lg" />}
          title="Testing and Debugging"
        />

        <HomeExperienceCard
          id="id"
          text="text"
          icon={<Icon name="check-circle" size="lg" />}
          title="title"
        />
      </div>
    </Section>
  );
};

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

const HomeStats = () => {
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
          text="Delivered over 120 reusable production components, ensuring maintainable and scalable codebases. Most Recently a custom, fully-featured library for a Fortune 500 Company in the Financial Sector."
          title="Components"
          value="120+"
        />
        <HomeStatsCard
          id="home-stats-coffees"
          text="Staying updated with the latest industry trends and technologies to ensure that I bring the most relevant and effective solutions to my projects; often equates to long hours, but a rigor to excute the best result and a good cup of coffee will get you through!"
          title="Cups of Coffee"
          value="1852"
        />
      </div>
    </Section>
  );
};

const HomeRoute: React.FC<{}> = ({}) => (
  <Page>
    <HomeHero />
    <HomeOverview />
    <HomeStats />
    <HomeExperience />
  </Page>
);

HomeRoute.displayName = '@v2/Route.Home';
export { HomeRoute };
