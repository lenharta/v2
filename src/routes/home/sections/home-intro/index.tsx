import { Section } from '@/app';
import { Text, Title } from '@/core';
import { useCountInterval } from '@/hooks';

type HomeIntroComponent = React.FC<{}>;

export const HomeIntro: HomeIntroComponent = ({}) => {
  const coffees = useCountInterval({
    initialValue: 1852,
    delay: 2000,
    max: 9999,
  });

  return (
    <Section className="v2-home-intro">
      <Text className="v2-home-intro-banner">
        Front-end Engineer located in the United States, actively seeking a role within a team of
        talented engineers that drive innovation and make impactful contributions to the industry.
      </Text>

      <div className="v2-home-intro-card-layout">
        <div className="v2-home-intro-card-item">
          <Text span>5+ yrs</Text>
          <Title h3>Development Experience</Title>
          <Text>
            With more than half a decade in the industry, I bring a wealth of knowledge and hands-on
            experience in front-end development. My journey has seen the evolution of web
            technologies, enabling me to stay ahead of trends and deliver modern, efficient
            solutions.
          </Text>
        </div>

        <div className="v2-home-intro-card-item">
          <Text span>$14B</Text>
          <Title h3>Market Capitalization</Title>
          <Text>
            Proud to have contributed to projects for clients with a combined market capitalization
            exceeding $14 billion. This experience underscores my capability to handle high-stakes,
            high-impact projects with professionalism and technical proficiency.
          </Text>
        </div>

        <div className="v2-home-intro-card-item">
          <Text span>150+</Text>
          <Title h3>Production Components</Title>
          <Text>
            Developed and delivered over 150 reusable production components, enhancing codebase
            maintainability and scalability. Recently created a custom, fully-featured library for a
            Fortune 500 company in the financial sector.
          </Text>
        </div>

        <div className="v2-home-intro-card-item">
          <Text span>{coffees}</Text>
          <Title h3>Cups Of Coffee</Title>
          <Text>
            Staying current with the latest industry trends and technologies is essential for
            crafting relevant and effective project solutions. This commitment demands extensive
            hours, but my dedication to excellence and a good cup of coffee, always keeps me
            motivated.
          </Text>
        </div>
      </div>
    </Section>
  );
};
