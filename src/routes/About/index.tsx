import * as React from 'react';
import { Page } from '@app/components';
import { AboutHero } from './AboutHero';
import { AboutIntro } from './AboutIntro';
import { Accordion, Icon, IconProps, Tabs, Text, Title, UnstyledButton } from '@core';

interface TimelineSectionProps {
  year: string;
  role: string;
  company: string;
  location: string;
  children: React.ReactNode;
  // onChange?: (value: string) => void;
  // value: string;
}

interface TimelineTaskCardProps {
  id: string;
  text: string;
  title: string;
}

const TimelineTaskCard = (props: TimelineTaskCardProps) => {
  const { title, text } = props;
  return (
    <div className="v2-about-timeline-task-card">
      <Text className="v2-about-timeline-task-card-title" children={title} />
      <Text className="v2-about-timeline-task-card-text" children={text} />
    </div>
  );
};

interface TimelineTaskListProps {
  items: TimelineTaskCardProps[];
}

const TimelineTaskList = (props: TimelineTaskListProps) => {
  const { items } = props;
  return (
    <div className="v2-about-timeline-task-list">
      {/* <Title h4 className="v2-about-timeline-task-list-title">
        Responsibilities
      </Title> */}
      <div className="v2-about-timeline-task-list-cards">
        {items.map((item) => (
          <TimelineTaskCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

const TimelineSection = (props: TimelineSectionProps) => {
  const { year, company, location, role, children } = props;
  return (
    <Page.Section className="v2-about-timeline-section">
      <div className="v2-about-timeline-section-chronology">
        <Text className="v2-about-timeline-section-chronology-year">{year}</Text>
      </div>
      <div className="v2-about-timeline-section-header">
        <Text className="v2-about-timeline-section-location" children={location} />
        <Title h3 className="v2-about-timeline-section-role">
          {role} | <span>{company}</span>
        </Title>
      </div>
      <div className="v2-about-timeline-section-content">{children}</div>
    </Page.Section>
  );
};

const TimelineAccordion = (props: { data: { id: string; title: string; text: string }[] }) => {
  const [value, onChange] = React.useState<string | null>(null);
  return (
    <div className="v2-about-timeline-accordion">
      <Accordion value={value} onValueChange={onChange} variant="elevated">
        {props.data.map((item) => (
          <Accordion.Item
            className="v2-about-timeline-accordion-item"
            value={item.id}
            key={item.id}
          >
            <Accordion.Target
              className="v2-about-timeline-accordion-target"
              data-selected={!!(item.id === value) || undefined}
            >
              {item.title}
            </Accordion.Target>
            <Accordion.Panel>
              <div className="v2-about-timeline-accordion-panel">{item.text}</div>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

const TimelineDoranJones: React.FC<{}> = ({}) => {
  return (
    <TimelineSection
      year="2023"
      role="Software Engineer"
      company="Doran Jones Inc."
      location="New York, New York"
    >
      <Text>
        Founded in 2010, Doran Jones, Inc. is a financial services Data Engineering and Application
        Development firm. Specializing in Capital Markets, Risk, and Regulatory Compliance, Doran
        delivers high-quality, affordable solutions that ensured compliance and mitigated risk in
        dynamic environments.
      </Text>

      <TimelineAccordion
        data={[
          {
            id: 'task:doran:1',
            title: `Responsive Web Design`,
            text: `Implemented responsive web design techniques to ensure optimal user experience across devices, using media queries, flexible grids, and fluid images.`,
          },
          {
            id: 'task:doran:2',
            title: `Modern JavaScript Frameworks`,
            text: `Utilized modern JavaScript frameworks such as React to develop dynamic and complex web applications, enhancing functionality and user interactivity.`,
          },
          {
            id: 'task:doran:3',
            title: `Clean and Maintainable CSS`,
            text: `Developed and maintained clean CSS code following methodologies like BEM and SMACSS, leveraging preprocessors like SASS and LESS for better organization and scalability.`,
          },
          {
            id: 'task:doran:4',
            title: `Web Performance Optimization`,
            text: `Enhanced web performance through code optimization, lazy loading, and browser caching techniques, significantly reducing load times and improving user experience.`,
          },
          {
            id: 'task:doran:5',
            title: `Web Accessibility`,
            text: `Implemented web accessibility standards in line with WCAG guidelines, ensuring that web applications are usable by people with diverse abilities.`,
          },
          {
            id: 'task:doran:6',
            title: `API Integration`,
            text: `Integrated RESTful and GraphQL APIs to fetch and display data in front-end applications, enhancing functionality and user experience.`,
          },
          {
            id: `task:doran:7`,
            title: `Front-End Testing`,
            text: `Conducted front-end testing using frameworks like Jest and Enzyme to ensure code quality, reliability, and performance.`,
          },
          {
            id: `task:doran:8`,
            title: `Version Control with Git`,
            text: `Managed source code with Git, following best practices for branching, merging, and collaboration to maintain a clean and efficient codebase.`,
          },
          {
            id: `task:doran:9`,
            title: `Reusable React Components`,
            text: `Built reusable React components to improve code maintainability and streamline the development process across multiple projects.`,
          },
          {
            id: `task:doran:10`,
            title: `Debugging Techniques`,
            text: `Applied advanced debugging techniques to identify and resolve front-end issues quickly, ensuring smooth functionality and performance.`,
          },
          {
            id: `task:doran:11`,
            title: `Browser DevTools`,
            text: `Leveraged browser DevTools for efficient debugging, performance monitoring, and code optimization, streamlining the development workflow.`,
          },
          {
            id: `task:doran:12`,
            title: `Web Animations`,
            text: `Created web animations using CSS and JavaScript, enhancing user interactions and improving the overall user experience.`,
          },
        ]}
      />
    </TimelineSection>
  );
};

const TimelineAntraInc: React.FC<{}> = ({}) => {
  return (
    <TimelineSection
      year="2021"
      role="UI Engineer"
      company="Antra Inc."
      location="Sterling, Virginia"
    >
      <Text>
        Antra Inc. addresses the crucial gap between modern technology adoption and business growth
        by providing strategic solutions to seamlessly connect technology with business objectives.
        Antra offers a full range of IT services in a cost-effective manner, combining technical
        knowledge with business acumen to drive success for our clients.
      </Text>

      <TimelineAccordion
        data={[
          {
            id: 'task:antra:1',
            title: `Responsive Web Design`,
            text: `Implemented responsive web design techniques to ensure optimal user experience across devices, using media queries, flexible grids, and fluid images.`,
          },
          {
            id: 'task:antra:2',
            title: `Modern JavaScript Frameworks`,
            text: `Utilized modern JavaScript frameworks such as React to develop dynamic and complex web applications, enhancing functionality and user interactivity.`,
          },
          {
            id: 'task:antra:3',
            title: `Clean and Maintainable CSS`,
            text: `Developed and maintained clean CSS code following methodologies like BEM and SMACSS, leveraging preprocessors like SASS and LESS for better organization and scalability.`,
          },
          {
            id: 'task:antra:4',
            title: `Web Performance Optimization`,
            text: `Enhanced web performance through code optimization, lazy loading, and browser caching techniques, significantly reducing load times and improving user experience.`,
          },
          {
            id: 'task:antra:5',
            title: `Web Accessibility`,
            text: `Implemented web accessibility standards in line with WCAG guidelines, ensuring that web applications are usable by people with diverse abilities.`,
          },
          {
            id: 'task:antra:6',
            title: `API Integration`,
            text: `Integrated RESTful and GraphQL APIs to fetch and display data in front-end applications, enhancing functionality and user experience.`,
          },
          {
            id: `task:antra:7`,
            title: `Front-End Testing`,
            text: `Conducted front-end testing using frameworks like Jest and Enzyme to ensure code quality, reliability, and performance.`,
          },
          {
            id: `task:antra:8`,
            title: `Version Control with Git`,
            text: `Managed source code with Git, following best practices for branching, merging, and collaboration to maintain a clean and efficient codebase.`,
          },
          {
            id: `task:antra:9`,
            title: `Reusable React Components`,
            text: `Built reusable React components to improve code maintainability and streamline the development process across multiple projects.`,
          },
          {
            id: `task:antra:10`,
            title: `Debugging Techniques`,
            text: `Applied advanced debugging techniques to identify and resolve front-end issues quickly, ensuring smooth functionality and performance.`,
          },
          {
            id: `task:antra:11`,
            title: `Browser DevTools`,
            text: `Leveraged browser DevTools for efficient debugging, performance monitoring, and code optimization, streamlining the development workflow.`,
          },
          {
            id: `task:antra:12`,
            title: `Web Animations`,
            text: `Created web animations using CSS and JavaScript, enhancing user interactions and improving the overall user experience.`,
          },
        ]}
      />
    </TimelineSection>
  );
};

const TimelinePaceCommunications: React.FC<{}> = ({}) => {
  return (
    <TimelineSection
      year="2020"
      role="Software Developer"
      company="Pace Communications"
      location="Greensboro, North Carolina"
    >
      <Text>
        One of the world's leading growth marketing agencies. With deep strength in content, brand
        storytelling and integrated marketing, Pace designs, builds, and manages leading websites
        and digital story experiences for global clients through custom web development and
        producing award-winning integrated brand narratives.
      </Text>

      <TimelineAccordion
        data={[
          {
            id: 'task:pace:1',
            title: `Responsive Web Design`,
            text: `Implemented responsive web design techniques to ensure optimal user experience across devices, using media queries, flexible grids, and fluid images.`,
          },
          {
            id: 'task:pace:2',
            title: `Modern JavaScript Frameworks`,
            text: `Utilized modern JavaScript frameworks such as React to develop dynamic and complex web applications, enhancing functionality and user interactivity.`,
          },
          {
            id: 'task:pace:3',
            title: `Clean and Maintainable CSS`,
            text: `Developed and maintained clean CSS code following methodologies like BEM and SMACSS, leveraging preprocessors like SASS and LESS for better organization and scalability.`,
          },
          {
            id: 'task:pace:4',
            title: `Web Performance Optimization`,
            text: `Enhanced web performance through code optimization, lazy loading, and browser caching techniques, significantly reducing load times and improving user experience.`,
          },
          {
            id: 'task:pace:5',
            title: `Web Accessibility`,
            text: `Implemented web accessibility standards in line with WCAG guidelines, ensuring that web applications are usable by people with diverse abilities.`,
          },
          {
            id: 'task:pace:6',
            title: `API Integration`,
            text: `Integrated RESTful and GraphQL APIs to fetch and display data in front-end applications, enhancing functionality and user experience.`,
          },
          {
            id: `task:pace:7`,
            title: `Front-End Testing`,
            text: `Conducted front-end testing using frameworks like Jest and Enzyme to ensure code quality, reliability, and performance.`,
          },
          {
            id: `task:pace:8`,
            title: `Version Control with Git`,
            text: `Managed source code with Git, following best practices for branching, merging, and collaboration to maintain a clean and efficient codebase.`,
          },
          {
            id: `task:pace:9`,
            title: `Reusable React Components`,
            text: `Built reusable React components to improve code maintainability and streamline the development process across multiple projects.`,
          },
          {
            id: `task:pace:10`,
            title: `Debugging Techniques`,
            text: `Applied advanced debugging techniques to identify and resolve front-end issues quickly, ensuring smooth functionality and performance.`,
          },
          {
            id: `task:pace:11`,
            title: `Browser DevTools`,
            text: `Leveraged browser DevTools for efficient debugging, performance monitoring, and code optimization, streamlining the development workflow.`,
          },
          {
            id: `task:pace:12`,
            title: `Web Animations`,
            text: `Created web animations using CSS and JavaScript, enhancing user interactions and improving the overall user experience.`,
          },
        ]}
      />
    </TimelineSection>
  );
};

const TimelineHawthornePartners: React.FC<{}> = ({}) => {
  return (
    <TimelineSection
      year="2019"
      role="Associate Developer"
      company="Hawthorne Residential Partners"
      location="Greensboro, North Carolina"
    >
      <Text>
        Hawthorne Residential Partners is a privately held property management firm that provides
        services in the apartment industry across the Southeast and Texas. Their innovative approach
        includes resident web apps and portals, enhancing tenant experience and operational
        efficiency through advanced technology solutions.
      </Text>

      <TimelineAccordion
        data={[
          {
            id: 'task:hawthorne:1',
            title: `Responsive Web Design`,
            text: `Implemented responsive web design techniques to ensure optimal user experience across devices, using media queries, flexible grids, and fluid images.`,
          },
          {
            id: 'task:hawthorne:2',
            title: `Modern JavaScript Frameworks`,
            text: `Utilized modern JavaScript frameworks such as React to develop dynamic and complex web applications, enhancing functionality and user interactivity.`,
          },
          {
            id: 'task:hawthorne:3',
            title: `Clean and Maintainable CSS`,
            text: `Developed and maintained clean CSS code following methodologies like BEM and SMACSS, leveraging preprocessors like SASS and LESS for better organization and scalability.`,
          },
          {
            id: 'task:hawthorne:4',
            title: `Web Performance Optimization`,
            text: `Enhanced web performance through code optimization, lazy loading, and browser caching techniques, significantly reducing load times and improving user experience.`,
          },
          {
            id: 'task:hawthorne:5',
            title: `Web Accessibility`,
            text: `Implemented web accessibility standards in line with WCAG guidelines, ensuring that web applications are usable by people with diverse abilities.`,
          },
          {
            id: 'task:hawthorne:6',
            title: `API Integration`,
            text: `Integrated RESTful and GraphQL APIs to fetch and display data in front-end applications, enhancing functionality and user experience.`,
          },
          {
            id: `task:hawthorne:7`,
            title: `Front-End Testing`,
            text: `Conducted front-end testing using frameworks like Jest and Enzyme to ensure code quality, reliability, and performance.`,
          },
          {
            id: `task:hawthorne:8`,
            title: `Version Control with Git`,
            text: `Managed source code with Git, following best practices for branching, merging, and collaboration to maintain a clean and efficient codebase.`,
          },
          {
            id: `task:hawthorne:9`,
            title: `Reusable React Components`,
            text: `Built reusable React components to improve code maintainability and streamline the development process across multiple projects.`,
          },
          {
            id: `task:hawthorne:10`,
            title: `Debugging Techniques`,
            text: `Applied advanced debugging techniques to identify and resolve front-end issues quickly, ensuring smooth functionality and performance.`,
          },
          {
            id: `task:hawthorne:11`,
            title: `Browser DevTools`,
            text: `Leveraged browser DevTools for efficient debugging, performance monitoring, and code optimization, streamlining the development workflow.`,
          },
          {
            id: `task:hawthorne:12`,
            title: `Web Animations`,
            text: `Created web animations using CSS and JavaScript, enhancing user interactions and improving the overall user experience.`,
          },
        ]}
      />
    </TimelineSection>
  );
};

type AboutTimelineFactory = React.FC<{}> & {
  AntraInc: typeof TimelineAntraInc;
  DoranJones: typeof TimelineDoranJones;
  HawthornePartners: typeof TimelineHawthornePartners;
  PaceCommunications: typeof TimelinePaceCommunications;
};

const AboutTimeline: AboutTimelineFactory = ({}) => {
  return (
    <div className="v2-about-timeline">
      <AboutTimeline.DoranJones />
      <AboutTimeline.AntraInc />
      <AboutTimeline.PaceCommunications />
      <AboutTimeline.HawthornePartners />
    </div>
  );
};

AboutTimeline.AntraInc = TimelineAntraInc;
AboutTimeline.DoranJones = TimelineDoranJones;
AboutTimeline.HawthornePartners = TimelineHawthornePartners;
AboutTimeline.PaceCommunications = TimelinePaceCommunications;

type AboutFactory = React.FC<{}> & {
  Hero: typeof AboutHero;
  Intro: typeof AboutIntro;
  Timeline: typeof AboutTimeline;
};

const About: AboutFactory = ({}) => (
  <Page>
    <About.Hero />
    <About.Intro />
    <Page.Headline order={1} id="about:resume" title="Resume" />
    <About.Timeline />
    <Page.Headline order={2} id="about:approach" title="Philosophy and Approach" />
  </Page>
);

About.Hero = AboutHero;
About.Intro = AboutIntro;
About.Timeline = AboutTimeline;
About.displayName = '@v2/About.Route';
export { About };
