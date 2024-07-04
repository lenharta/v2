import { Page } from '@/app';
import { Button, Text, Title } from '@/core';

const data = [
  {
    id: `overview-resume-doran`,
    title: `Doran Jones, Inc.`,
    location: `New York, New York`,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati corrupti dolor architecto? Soluta voluptatum aliquam cupiditate culpa molestiae animi perferendis reprehenderit possimus, assumenda dolore magnam. Eum dolorum cumque quo!`,
  },
  {
    id: `overview-resume-antra`,
    title: `Antra, Inc.`,
    location: `Sterling, Virginia`,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati corrupti dolor architecto? Soluta voluptatum aliquam cupiditate culpa molestiae animi perferendis reprehenderit possimus, assumenda dolore magnam. Eum dolorum cumque quo!`,
  },
  {
    id: `overview-resume-pace`,
    title: `Pace Communications`,
    location: `Greensboro, North Carolina`,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati corrupti dolor architecto? Soluta voluptatum aliquam cupiditate culpa molestiae animi perferendis reprehenderit possimus, assumenda dolore magnam. Eum dolorum cumque quo!`,
  },
  {
    id: `overview-resume-hawthorne`,
    title: `Hawthorne Residential Partners`,
    location: `Winston-Salem, North Carolina`,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati corrupti dolor architecto? Soluta voluptatum aliquam cupiditate culpa molestiae animi perferendis reprehenderit possimus, assumenda dolore magnam. Eum dolorum cumque quo!`,
  },
];

const OverviewResume: React.FC<{}> = ({}) => {
  return (
    <Page.Section>
      <div className="v2-overview-resume-layout">
        <div className="v2-overview-resume-banner">
          <Text variant="accent-max" className="v2-overview-resume-banner-subtitle">
            Proven Track Record
          </Text>
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
