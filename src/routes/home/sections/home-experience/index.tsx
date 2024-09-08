import { Section } from '@/app';
import { Button, Title } from '@/core';

const data = [
  {
    id: `overview-resume-doran`,
    title: `Doran Jones, Inc.`,
    location: `New York, New York`,
    description: `Founded in 2010, Doran Jones, Inc. is a financial services Data Engineering and Application Development firm. Specializing in Capital Markets, Risk, and Regulatory Compliance, Doran delivers high-quality, affordable solutions that ensured compliance and mitigated risk in dynamic environments.`,
  },
  {
    id: `overview-resume-antra`,
    title: `Antra, Inc.`,
    location: `Sterling, Virginia`,
    description: `Antra Inc. addresses the crucial gap between modern technology adoption and business growth by providing strategic solutions to seamlessly connect technology with business objectives. Antra offers a full range of IT services in a cost-effective manner, combining technical knowledge with business acumen to drive success for our clients.`,
  },
  {
    id: `overview-resume-pace`,
    title: `Pace Communications`,
    location: `Greensboro, North Carolina`,
    description: `One of the world's leading growth marketing agencies. With deep strength in content, brand storytelling and integrated marketing, Pace designs, builds, and manages leading websites and digital story experiences for global clients through custom web development and producing award-winning integrated brand narratives.`,
  },
  {
    id: `overview-resume-hawthorne`,
    title: `Hawthorne Residential Partners`,
    location: `Greensboro, North Carolina`,
    description: `Hawthorne Residential Partners is a privately held property management firm that provides services in the apartment industry across the Southeast and Texas. Their innovative approach includes resident web apps and portals, enhancing tenant experience and operational efficiency through advanced technology solutions.`,
  },
];

export const HomeExperience = () => {
  return (
    <Section className="v2-home-experience">
      <div className="v2-home-experience-box">
        <Title className="v2-home-experience-title" h3>
          <span className="v2-home-experience-title-line-1">From Startups to</span>
          <span className="v2-home-experience-title-line-2">Titans Of Industries.</span>
        </Title>
        <Button iconRight={{ name: 'arrow-northeast' }}>See Resume</Button>
      </div>
      <div className="v2-home-experience-box">
        <span>Box</span>
      </div>
    </Section>
  );
};
