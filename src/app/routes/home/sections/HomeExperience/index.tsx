import { Section } from '@/app';
import { Icon, Text, Title } from '@/core';

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

const HomeExperience: React.FC<{}> = () => {
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

HomeExperience.displayName = '@v2/Home.Experience';
export { HomeExperience };
