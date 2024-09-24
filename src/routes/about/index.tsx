import * as React from 'react';
import { Hero, Main, Page, PageProps, Section } from '@/app';
import { Accordion, Tabs, Text, Title } from '@/core';
import { objectKeys } from '@/utils';

export const DATA_RESUME_PACECOMM = {
  company: 'Pace Communications',
  position: 'Associate Developer',
  location: 'Greensboro, North Carolina',
  lines: {
    a: `Pace Communications is an international branding and marketing agency headquartered in Greensboro, North Carolina. The agency specializes in empowering clients to enhance their brands and expand their influence, effectively driving their audiences to action. With a distinguished client roster that includes Wells Fargo, PepsiCo, Four Seasons, Verizon, and Sysco, Pace delivers impactful and innovative marketing solutions.`,
    b: `At Pace, I played a key role in developing scalable and reusable website elements for internal UI libraries. I also worked closely with designers to create custom JavaScript components tailored specifically for client web applications, ensuring that our solutions were both effective and aligned with the clients' branding needs.`,
  },
  items: [
    {
      value: 'resume:pacecomm:item:a',
      label: 'Scalability & Reusability',
      summary: `Develop and maintain scalable and reusable website elements.`,
    },
    {
      value: 'resume:pacecomm:item:b',
      label: 'Creation & Enhancment',
      summary: `Contribute to the creation and enhancement of internal UI libraries.`,
    },
    {
      value: 'resume:pacecomm:item:c',
      label: 'Client Development',
      summary: `Implement custom JavaScript components based on specific client needs.`,
    },
    {
      value: 'resume:pacecomm:item:d',
      label: 'Design Collaboration',
      summary: `Work closely with designers to translate visual concepts into functional web components.`,
    },
    {
      value: 'resume:pacecomm:item:e',
      label: 'Design Vision',
      summary: `Participate in designs to align design visions and technical implementation.`,
    },
    {
      value: 'resume:pacecomm:item:f',
      label: 'Design Feedback',
      summary: `Provide feedback to designers on the feasibility and optimization of design ideas.`,
    },
    {
      value: 'resume:pacecomm:item:g',
      label: 'Development Requirments',
      summary: `Customize web components to meet the unique requirements of each client's brand and application.`,
    },
    {
      value: 'resume:pacecomm:item:h',
      label: 'Performance & Usability',
      summary: `Ensure client applications are built with a focus on performance, usability, and responsiveness.`,
    },
    {
      value: 'resume:pacecomm:item:i',
      label: 'Development Practices',
      summary: `Adapt development practices to fit the branding and marketing strategies of high-profile clients.`,
    },
    {
      value: 'resume:pacecomm:item:j',
      label: 'Refining Code',
      summary: `Review and refine code to ensure it meets quality standards.`,
    },
    {
      value: 'resume:pacecomm:item:k',
      label: 'Component Testing',
      summary: `Test components to verify they work across different browsers and devices.`,
    },
    {
      value: 'resume:pacecomm:item:l',
      label: 'Component Debugging',
      summary: `Debug and resolve issues in a timely manner, ensuring smooth deployment of client projects.`,
    },
    {
      value: 'resume:pacecomm:item:m',
      label: 'Code Documentation',
      summary: `Document the usage and integration of reusable components in the internal UI library.`,
    },
    {
      value: 'resume:pacecomm:item:n',
      label: 'Authoring Documentation',
      summary: `Maintain clear and comprehensive technical documentation for client projects.`,
    },
    {
      value: 'resume:pacecomm:item:o',
      label: 'Documentation Revision',
      summary: `Update and revise documentation as components evolve or client needs change.`,
    },
    {
      value: 'resume:pacecomm:item:p',
      label: 'Open Communication',
      summary: `Regularly communicate with client stakeholders to gather feedback on the development process.`,
    },
    {
      value: 'resume:pacecomm:item:q',
      label: 'Technical Updates',
      summary: `Provide updates on the progress of web development projects.`,
    },
    {
      value: 'resume:pacecomm:item:r',
      label: 'Insight & Recommendation',
      summary: `Offer technical insights and recommendations to clients regarding their web applications.`,
    },
    {
      value: 'resume:pacecomm:item:s',
      label: 'Delivery Expectation',
      summary: `Ensure that all custom solutions are delivered on time and meet client expectations.`,
    },
    {
      value: 'resume:pacecomm:item:t',
      label: 'Internal Libraries',
      summary: `Ensure that the internal UI libraries are robust and easy to integrate into various web applications.`,
    },
    {
      value: 'resume:pacecomm:item:u',
      label: 'Quality Standards',
      summary: `Ensure that all projects meet the highest standards of quality and usability.`,
    },
    {
      value: 'resume:pacecomm:item:v',
      label: 'Improve Deliverables',
      summary: `Continuously look for ways to improve the development process and the quality of deliverables.`,
    },
    {
      value: 'resume:pacecomm:item:w',
      label: 'Provide New Ideas',
      summary: `Introduce new ideas and technologies that could benefit both the agency and its clients.`,
    },
  ],
};

export const DATA_RESUME_HAWTHORNE = {
  company: `Hawthorne Residential Partners`,
  position: `Software Developer`,
  location: `Greensboro, North Carolina`,
  lines: {
    a: `Hawthorne Residential Partners, a leading national multifamily housing and development company based in Greensboro, North Carolina, is dedicated to enhancing the living experience for residents across its extensive portfolio of properties. At Hawthorne, I played a key role in the development and deployment of an innovative online platform that revolutionized how residents interact with their communities. This platform provided a seamless digital experience for scheduling payments, requesting maintenance, booking appointments, and communicating directly with leasing offices, ensuring convenience and efficiency for residents.`,
    b: `In my role, I also collaborated closely with a team of UI designers to craft visually compelling and user-friendly digital experiences. These experiences showcased Hawthorne properties to potential residents, enabling them to explore available units, view property amenities, and easily schedule appointments with leasing consultants. My work was instrumental in enhancing the digital presence of Hawthorne Residential Partners, driving engagement and satisfaction among both current and prospective residents.`,
  },
  items: [
    {
      value: 'resume:hawthorne:item:a',
      label: 'Residential Solutions',
      summary: `Develop and maintain an online platform for resident communication and services.`,
    },
    {
      value: 'resume:hawthorne:item:b',
      label: 'Implement Features',
      summary: `Implement features for payments, maintenance, appointments, and feedback.`,
    },
    {
      value: 'resume:hawthorne:item:c',
      label: 'Responsive Development',
      summary: `Ensure the platform is user-friendly, efficient, and responsive across various devices.`,
    },
    {
      value: 'resume:hawthorne:item:d',
      label: 'Design Collaboration',
      summary: `Work closely with UI designers to create visually appealing and engaging digital experiences.`,
    },
    {
      value: 'resume:hawthorne:item:e',
      label: 'Design Translation',
      summary: `Translate design concepts into functional and interactive components for the platform.`,
    },
    {
      value: 'resume:hawthorne:item:f',
      label: 'Design Feedback',
      summary: `Provide feedback to designers on technical feasibility and improvements where necessary.`,
    },
    {
      value: 'resume:hawthorne:item:g',
      label: 'Digitial Experiences',
      summary: `Develop digital experiences that highlight Hawthorne properties to potential residents.`,
    },
    {
      value: 'resume:hawthorne:item:h',
      label: 'User Experience',
      summary: `Ensure that property showcases are visually appealing and provide a smooth user experience.`,
    },
    {
      value: 'resume:hawthorne:item:i',
      label: 'Continuous Testing',
      summary: `Conduct regular testing of platform features to ensure they work correctly and meet user needs.`,
    },
    {
      value: 'resume:hawthorne:item:j',
      label: 'Testing & Debugging',
      summary: `Debug and resolve any issues that arise during development or after deployment.`,
    },
    {
      value: 'resume:hawthorne:item:k',
      label: 'Release Quality',
      summary: `Collaborate with to ensure that all platform components are thoroughly tested before release.`,
    },
    {
      value: 'resume:hawthorne:item:l',
      label: 'Feedback & QA',
      summary: `Monitor and analyze feedback from residents to identify areas for platform improvement.`,
    },
    {
      value: 'resume:hawthorne:item:m',
      label: 'Evolving Requirements',
      summary: `Ensure that the platform evolves to meet the changing needs of residents.`,
    },
    {
      value: 'resume:hawthorne:item:n',
      label: 'Feature Documentation',
      summary: `Document platform features, functionalities, and any custom solutions developed.`,
    },
    {
      value: 'resume:hawthorne:item:o',
      label: 'Technical Documentation',
      summary: `Maintain clear and comprehensive technical documentation for internal and external stakeholders.`,
    },
    {
      value: 'resume:hawthorne:item:p',
      label: 'Updating Documentation',
      summary: `Update documentation as new features are added or existing ones are modified.`,
    },
    {
      value: 'resume:hawthorne:item:q',
      label: 'Agile Development',
      summary: `Participate in team meetings to discuss progress, challenges, and new ideas.`,
    },
    {
      value: 'resume:hawthorne:item:r',
      label: 'Open Collaboration',
      summary: `Collaborate with other developers, designers, and stakeholders to ensure alignment on project goals.`,
    },
    {
      value: 'resume:hawthorne:item:s',
      label: 'Knowledge and Mentorship',
      summary: `Share knowledge and insights with team members to foster a collaborative working environment.`,
    },
    {
      value: 'resume:hawthorne:item:t',
      label: 'User Engagement',
      summary: `Create engaging digital experiences that effectively showcase Hawthorne properties.`,
    },
    {
      value: 'resume:hawthorne:item:u',
      label: 'Quality Maintenance',
      summary: `Commit to delivering a platform that provides a high-quality user experience.`,
    },
    {
      value: 'resume:hawthorne:item:v',
      label: 'Updates & Improvments',
      summary: `Regularly update and improve the platform based on user feedback and evolving needs.`,
    },
    {
      value: 'resume:hawthorne:item:w',
      label: 'Cross Functional Collaboration',
      summary: `Maintain a strong collaboration with cross-functional teams to ensure project success.`,
    },
    {
      value: 'resume:hawthorne:item:x',
      label: 'Emerging Technologies',
      summary: `Stay informed about the latest web development trends and technologies to enhance the platform.`,
    },
  ],
};

export const DATA_RESUME_DORAN = {
  company: `Doran Jones Inc.`,
  position: `Software Engineer`,
  location: `New York, New York`,
  lines: {
    a: `Doran Jones is a New York City-based financial services firm specializing in data engineering and application development for capital markets, risk management, and regulatory compliance. At Doran, I am part of an engineering team focused on developing intuitive user interfaces using modern technologies like TypeScript, React, SASS, and CSS. We built a fully integrated UI library for a multi-billion dollar financial institution, designed to be utilized by application development teams across various global consumer platforms.`,
    b: `In my role, I have been committed to optimizing agile communication between UX design teams and the software development process, ensuring precise implementation of the design system while maintaining the flexibility needed to build a robust and efficient large-scale front-end architecture. My work consistently reflects a dedication to delivering high-quality, accessible, and scalable solutions that meet industry standards and regulatory requirements within the financial sector.`,
  },
  items: [
    {
      value: 'doran:resume:item:a',
      label: 'TypeScript & React',
      summary: `Develop and maintain user interfaces using TypeScript, React, SASS, and CSS.`,
    },
    {
      value: 'doran:resume:item:b',
      label: 'UI Components',
      summary: `Implement components and features for the integrated UI library.`,
    },
    {
      value: 'doran:resume:item:c',
      label: 'UI Performance',
      summary: `Ensure that UIs are optimized for performance and accessibility.`,
    },
    {
      value: 'doran:resume:item:d',
      label: 'Agile Participation',
      summary: `Participate in daily stand-ups, sprint planning, and retrospectives.`,
    },
    {
      value: 'doran:resume:item:e',
      label: 'UX Collaboration',
      summary: `Communicate with UX designers to align on design specifications and user experience goals.`,
    },
    {
      value: 'doran:resume:item:f',
      label: 'UI Features',
      summary: `Work with cross-functional teams to iterate on and improve UI features based on feedback.`,
    },
    {
      value: 'doran:resume:item:g',
      label: 'Design Systems',
      summary: `Integrate the design system into various components and pages.`,
    },
    {
      value: 'doran:resume:item:h',
      label: 'Design Consistency',
      summary: `Ensure consistency with the design system across all development work.`,
    },
    {
      value: 'doran:resume:item:i',
      label: 'Design Refinement',
      summary: `Collaborate with the UX team to refine and enhance the design system as needed.`,
    },
    {
      value: 'doran:resume:item:j',
      label: 'Code Review',
      summary: `Review pull requests to maintain code quality and adherence to best practices.`,
    },
    {
      value: 'doran:resume:item:k',
      label: 'Unit Testing',
      summary: `Write and execute unit tests for UI components.`,
    },
    {
      value: 'doran:resume:item:l',
      label: 'Code Debugging',
      summary: `Debug and resolve issues, ensuring that code is production-ready.`,
    },
    {
      value: 'doran:resume:item:m',
      label: 'Documentation',
      summary: `Document components and usage guidelines within the UI library.`,
    },
    {
      value: 'doran:resume:item:n',
      label: 'Docs Maintenance',
      summary: `Maintain technical documentation for the development process.`,
    },
    {
      value: 'doran:resume:item:o',
      label: 'Communication',
      summary: `Provide clear and concise communication regarding updates and changes.`,
    },
    {
      value: 'doran:resume:item:p',
      label: 'Optimization',
      summary: `Optimize front-end performance for various devices and platforms.`,
    },
    {
      value: 'doran:resume:item:q',
      label: 'Refactor for Scalability',
      summary: `Refactor and improve existing code to enhance scalability.`,
    },
    {
      value: 'doran:resume:item:r',
      label: 'Platform Architecture',
      summary: `Ensure that the architecture supports the needs of large-scale global platforms.`,
    },
    {
      value: 'doran:resume:item:s',
      label: 'Mentoring',
      summary: `Provide guidance to junior developers and team members.`,
    },
    {
      value: 'doran:resume:item:t',
      label: 'Best Practices',
      summary: `Share knowledge and best practices to help improve team efficiency and skill levels.`,
    },
    {
      value: 'doran:resume:item:u',
      label: 'Improvement',
      summary: `Identify areas for improvement in both the codebase and development process.`,
    },
  ],
};

export const DATA_RESUME_ANTRA = {
  company: `Antra Inc.`,
  position: `React Developer`,
  location: `Sterling, Virginia`,
  lines: {
    a: `Antra Inc, a leading IT solutions firm, partners with global giants like Walmart, Sam's Club, and CVS to deliver cutting-edge front-end development solutions that drive business innovation and customer engagement. At Antra, I played a pivotal role in developing scalable and reusable front-end components tailored to the unique needs of our high-profile clients. My work focused on enhancing user experiences across diverse digital platforms, ensuring consistency, performance, and accessibility.`,
    b: `During my tenure, I collaborated closely with cross-functional teams, including designers and back-end developers, to translate complex business requirements into intuitive and efficient web applications. I was instrumental in creating custom JavaScript components that seamlessly integrated with existing systems, providing robust solutions that met both client specifications and industry standards.`,
  },
  items: [
    {
      value: 'resume:antra:item:a',
      label: 'TypeScript & React',
      summary: `Develop reusable components using technologies such as React, TypeScript, and JavaScript.`,
    },
    {
      value: 'resume:antra:item:b',
      label: 'UI Guidelines',
      summary: `Implement custom components that align with client-specific requirements and branding guidelines.`,
    },
    {
      value: 'resume:antra:item:c',
      label: 'Performance Optimization',
      summary: `Ensure the performance and accessibility of web applications across various platforms and devices.`,
    },
    {
      value: 'resume:antra:item:d',
      label: 'Client Communication',
      summary: `Communicate with clients to understand their business requirements and technical needs.`,
    },
    {
      value: 'resume:antra:item:e',
      label: 'Progress & Feedback',
      summary: `Participate in client meetings to provide updates on project progress and gather feedback.`,
    },
    {
      value: 'resume:antra:item:f',
      label: 'Client Goals',
      summary: `Adapt development practices based on client feedback to ensure their goals are met.`,
    },
    {
      value: 'resume:antra:item:g',
      label: 'Design Translation',
      summary: `Work closely with designers to translate design mockups into functional web components.`,
    },
    {
      value: 'resume:antra:item:h',
      label: 'Back-end Collaboration',
      summary: `Collaborate with back-end developers to integrate front-end components with server-side logic.`,
    },
    {
      value: 'resume:antra:item:i',
      label: 'Agile Environment',
      summary: `Participate in regular team meetings to align on project timelines and deliverables.`,
    },
    {
      value: 'resume:antra:item:j',
      label: 'Merging Technologies',
      summary: `Develop JavaScript components that integrate seamlessly with existing client systems and platforms.`,
    },
    {
      value: 'resume:antra:item:k',
      label: 'Solution Managment',
      summary: `Ensure that all custom solutions are robust, maintainable, and meet client specifications.`,
    },
    {
      value: 'resume:antra:item:l',
      label: 'Testing & Debugging',
      summary: `Test and debug components to ensure they function correctly within the application ecosystem.`,
    },
    {
      value: 'resume:antra:item:m',
      label: 'Team Code Review',
      summary: `Review code written by team members to ensure it adheres to best practices and meets standards.`,
    },
    {
      value: 'resume:antra:item:n',
      label: 'Unit Testing',
      summary: `Write and execute unit tests to validate the functionality of front-end components.`,
    },
    {
      value: 'resume:antra:item:o',
      label: 'Docs Authoring',
      summary: `Document the usage, integration, and maintenance of front-end components.`,
    },
    {
      value: 'resume:antra:item:p',
      label: 'Docs Maintenance',
      summary: `Update documentation as components and systems evolve or client requirements change.`,
    },
    {
      value: 'resume:antra:item:q',
      label: 'Emerging Technology',
      summary: `Explore and propose new tools and technologies that could benefit ongoing and future projects.`,
    },
    {
      value: 'resume:antra:item:r',
      label: 'Determine Solutions',
      summary: `Introduce new technologies and methodologies that align with industry trends and client needs.`,
    },
    {
      value: 'resume:antra:item:s',
      label: 'Code Standards',
      summary: `Maintain high standards of code quality through rigorous code reviews and testing.`,
    },
    {
      value: 'resume:antra:item:t',
      label: 'Guidance & Support',
      summary: `Provide guidance and support to team members to ensure the successful completion of projects.`,
    },
    {
      value: 'resume:antra:item:u',
      label: 'Optimization & Adaption',
      summary: `Adapt and optimize solutions based on client feedback and evolving project needs.`,
    },
    {
      value: 'resume:antra:item:v',
      label: 'Driven Development',
      summary: `Drive the development of custom front-end solutions tailored to the specific needs of major clients.`,
    },
  ],
};

export const AboutResumePanel = (props: {
  panel: string;
  position: string;
  company: string;
  location: string;
  lines: Record<string, string>;
  items: {
    value: string;
    label: string;
    summary: string;
  }[];
}) => {
  const { company, position, location, lines, items, panel } = props;
  const [value, setValue] = React.useState<string[]>([]);

  return (
    <Tabs.Panel value={panel} className="v2-about-tabs-panel">
      <Section className="v2-about-resume-section">
        <header className="v2-about-resume-header">
          <Title h3>{company}</Title>
          <Text span>
            {position} | {location}
          </Text>
        </header>

        {objectKeys(lines).map((k) => (
          <Text className="v2-about-resume-line" key={k}>
            {lines[k]}
          </Text>
        ))}

        <Accordion
          value={value}
          onChange={setValue}
          className="v2-about-resume-list"
          variant="accent"
          multiple
        >
          {items.map(({ label, summary, value }) => (
            <Accordion.Item key={value} value={value} className="v2-about-resume-item">
              <Accordion.Target>{label}</Accordion.Target>
              <Accordion.Panel>
                <div>
                  <Text>{summary}</Text>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Section>
    </Tabs.Panel>
  );
};

const LOOKUP_ABOUT_TITLE = {
  'about:panel:doran': 'Doran Jones',
  'about:panel:antra': 'Antra',
  'about:panel:pacecomm': 'Pace',
  'about:panel:hawthorne': 'Hawthorne',
};

function getAboutTitle<T extends Record<string, string>>(lookup: T, key: string) {
  return lookup[key as any] !== undefined ? lookup[key] : '';
}

export const About: React.FC<PageProps & {}> = (props) => {
  const [panel, setPanel] = React.useState('about:panel:doran');
  return (
    <Page {...props}>
      <Hero>
        <Title>
          About | <span className="v2-accent-text">{getAboutTitle(LOOKUP_ABOUT_TITLE, panel)}</span>
        </Title>
      </Hero>
      <Main>
        <Text className="v2-about-banner">
          As a Software Engineer with over 5 years of experience, I specialize in building intuitive
          and responsive user interfaces using <span>TypeScript</span>, <span>JavaScript</span>,{' '}
          <span>React</span>, <span>SCSS</span>, <span>CSS</span>, and <span>HTML5</span>. My
          expertise has been pivotal in delivering seamless user experiences for global financial
          platforms. Most recently, I played a key role in developing a fully integrated UI library
          for a multi-billion dollar financial institution, driving both innovation and efficiency
          within the engineering team.
        </Text>
        <Tabs value={panel} onChange={setPanel} variant="accent" className="v2-about-tabs">
          <Tabs.List className="v2-about-tabs-list" grow>
            <Tabs.Item value="about:panel:doran">2023</Tabs.Item>
            <Tabs.Item value="about:panel:antra">2021</Tabs.Item>
            <Tabs.Item value="about:panel:hawthorne">2020</Tabs.Item>
            <Tabs.Item value="about:panel:pacecomm">2019</Tabs.Item>
          </Tabs.List>
          <AboutResumePanel panel="about:panel:doran" {...DATA_RESUME_DORAN} />
          <AboutResumePanel panel="about:panel:antra" {...DATA_RESUME_ANTRA} />
          <AboutResumePanel panel="about:panel:pacecomm" {...DATA_RESUME_PACECOMM} />
          <AboutResumePanel panel="about:panel:hawthorne" {...DATA_RESUME_HAWTHORNE} />
        </Tabs>
      </Main>
    </Page>
  );
};

About.displayName = '@v2/Route.About';
