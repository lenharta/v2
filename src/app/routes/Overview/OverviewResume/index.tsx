import { Page } from '@/app';
import { Button, Text, Title } from '@/core';

const data = [
  {
    id: `overview-resume-doran`,
    title: `Doran Jones, Inc.`,
    location: `New York, New York`,
    text: `Founded in 2010, Doran Jones, Inc. is a financial services Data Engineering and Application Development firm. Specializing in Capital Markets, Risk, and Regulatory Compliance, Doran delivers high-quality, affordable solutions that ensured compliance and mitigated risk in dynamic environments.`,
  },
  {
    id: `overview-resume-antra`,
    title: `Antra, Inc.`,
    location: `Sterling, Virginia`,
    text: `Antra Inc. addresses the crucial gap between modern technology adoption and business growth by providing strategic solutions to seamlessly connect technology with business objectives. Antra offers a full range of IT services in a cost-effective manner, combining technical knowledge with business acumen to drive success for our clients.`,
  },
  {
    id: `overview-resume-pace`,
    title: `Pace Communications`,
    location: `Greensboro, North Carolina`,
    text: `One of the world's leading growth marketing agencies. With deep strength in content, brand storytelling and integrated marketing, Pace designs, builds, and manages leading websites and digital story experiences for global clients through custom web development and producing award-winning integrated brand narratives.`,
  },
  {
    id: `overview-resume-hawthorne`,
    title: `Hawthorne Residential Partners`,
    location: `Greensboro, North Carolina`,
    text: `Hawthorne Residential Partners is a privately held property management firm that provides services in the apartment industry across the Southeast and Texas. Their innovative approach includes resident web apps and portals, enhancing tenant experience and operational efficiency through advanced technology solutions.`,
  },
];

const OverviewResume: React.FC<{}> = ({}) => {
  return (
    <Page.Section>
      <Page.Headline id="overview-experience" order={3} title={`Experience`} />
      <div className="v2-overview-resume-layout">
        <div className="v2-overview-resume-banner">
          <Title className="v2-overview-resume-banner-title" h3>
            <span className="v2-overview-resume-banner-title-line-1">From Startups to</span>
            <span className="v2-overview-resume-banner-title-line-2">Titans Of Industries.</span>
          </Title>
          <Button size="xs" variant="accent-elevated" iconRight={{ name: 'arrow-east' }}>
            See Resume
          </Button>
        </div>
        <div className="v2-overview-resume-list">
          {data.map((item) => (
            <div className="v2-overview-resume-list-item" key={item.id}>
              <Text variant="base-min" className="v2-overview-resume-list-item-location">
                {item.location}
              </Text>

              <Title h3 variant="accent-med" className="v2-overview-resume-list-item-title">
                {item.title}
              </Title>

              <Text variant="base-low" className="v2-overview-resume-list-item-text">
                {item.text}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </Page.Section>
  );
};

export { OverviewResume };
