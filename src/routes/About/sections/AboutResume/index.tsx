import React from 'react';
import { Page } from '@app';
import { Text, Title } from '@core';

export const AboutResumeDoranJones: React.FC = () => (
  <section className="v2-about-resume-item">
    <header className="v2-about-resume-header">
      <Text span>New York, New York</Text>
      <Title h2>Software Engineer</Title>
      <Title h3>Doran Jones Inc.</Title>
    </header>
    <div className="v2-about-resume-content">
      <Text>
        Doran Jones is a New York City-based financial services firm specializing in data
        engineering and application development for capital markets, risk management, and regulatory
        compliance. At Doran, I am part of an engineering team focused on developing intuitive user
        interfaces using modern technologies like TypeScript, React, SASS, and CSS. We built a fully
        integrated UI library for a multi-billion dollar financial institution, designed to be
        utilized by application development teams across various global consumer platforms.
      </Text>
      <Text>
        In my role, I have been committed to optimizing agile communication between UX design teams
        and the software development process, ensuring precise implementation of the design system
        while maintaining the flexibility needed to build a robust and efficient large-scale
        front-end architecture. My work consistently reflects a dedication to delivering
        high-quality, accessible, and scalable solutions that meet industry standards and regulatory
        requirements within the financial sector.
      </Text>
    </div>
  </section>
);

export const AboutResumeAntraInc: React.FC = () => (
  <section className="v2-about-resume-item">
    <header className="v2-about-resume-header">
      <Text span>Sterling, Virginia</Text>
      <Title h2>React Developer</Title>
      <Title h3>Antra Labs Inc.</Title>
    </header>
    <div className="v2-about-resume-content">
      <Text>
        Antra Inc, a leading IT solutions firm, partners with global giants like Walmart, Sam's
        Club, and CVS to deliver cutting-edge front-end development solutions that drive business
        innovation and customer engagement. At Antra, I played a pivotal role in developing scalable
        and reusable front-end components tailored to the unique needs of our high-profile clients.
        My work focused on enhancing user experiences across diverse digital platforms, ensuring
        consistency, performance, and accessibility.
      </Text>
      <Text>
        During my tenure, I collaborated closely with cross-functional teams, including designers
        and back-end developers, to translate complex business requirements into intuitive and
        efficient web applications. I was instrumental in creating custom JavaScript components that
        seamlessly integrated with existing systems, providing robust solutions that met both client
        specifications and industry standards.
      </Text>
    </div>
  </section>
);

export const AboutResumePaceComm: React.FC = () => (
  <section className="v2-about-resume-item">
    <header className="v2-about-resume-header">
      <Text span>Greensboro, North Carolina</Text>
      <Title h2>Associate Developer</Title>
      <Title h3>Pace Commmunications</Title>
    </header>
    <div className="v2-about-resume-content">
      <Text>
        Pace Communications, an international branding and marketing agency based in Greensboro,
        North Carolina, empowers clients to grow their brands and influence, driving their audiences
        to action. With a prestigious client roster that includes Wells Fargo, PepsiCo, Four
        Seasons, Verizon, and Sysco, Pace delivers impactful marketing solutions.
      </Text>
      <Text>
        During my time at Pace, I contributed to the development of scalable and reusable website
        elements for internal UI libraries. Additionally, I collaborated closely with designers to
        create custom JavaScript components tailored for client web applications.
      </Text>
    </div>
  </section>
);

export const AboutResumeHawthorne: React.FC = () => (
  <section className="v2-about-resume-item">
    <header className="v2-about-resume-header">
      <Text span>Greensboro, North Carolina</Text>
      <Title h2>Software Developer</Title>
      <Title h3>Hawthorne Partners</Title>
    </header>
    <div className="v2-about-resume-content">
      <Text>
        Hawthorne Residential Partners, a leading national multifamily housing and development
        company based in Greensboro, North Carolina, is dedicated to enhancing the living experience
        for residents across its extensive portfolio of properties. At Hawthorne, I played a key
        role in the development and deployment of an innovative online platform that revolutionized
        how residents interact with their communities. This platform provided a seamless digital
        experience for scheduling payments, requesting maintenance, booking appointments, and
        communicating directly with leasing offices, ensuring convenience and efficiency for
        residents.
      </Text>
      <Text>
        In my role, I also collaborated closely with a team of UI designers to craft visually
        compelling and user-friendly digital experiences. These experiences showcased Hawthorne
        properties to potential residents, enabling them to explore available units, view property
        amenities, and easily schedule appointments with leasing consultants. My work was
        instrumental in enhancing the digital presence of Hawthorne Residential Partners, driving
        engagement and satisfaction among both current and prospective residents.
      </Text>
    </div>
  </section>
);

interface AboutResumeProps {
  id: string;
  order: number;
  title: string;
}

type AboutResumeComponent = React.FC<AboutResumeProps> & {
  DoranJones: typeof AboutResumeDoranJones;
  AntraInc: typeof AboutResumeAntraInc;
  PaceComm: typeof AboutResumePaceComm;
  Hawthorne: typeof AboutResumeHawthorne;
};

export const AboutResume: AboutResumeComponent = (props) => {
  const { id, order, title } = props;
  return (
    <React.Fragment>
      <Page.Headline id={id} order={order} title={title} />
      <Page.Section>
        <AboutResume.DoranJones />
        <AboutResume.AntraInc />
        <AboutResume.PaceComm />
        <AboutResume.Hawthorne />
      </Page.Section>
    </React.Fragment>
  );
};

AboutResume.DoranJones = AboutResumeDoranJones;
AboutResume.AntraInc = AboutResumeAntraInc;
AboutResume.PaceComm = AboutResumePaceComm;
AboutResume.Hawthorne = AboutResumeHawthorne;
AboutResume.displayName = '@v2/Route.About.Resume';
