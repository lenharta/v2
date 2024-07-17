import { Page } from '@app';
import { Button, Text, Title } from '@core';
import { OVERVIEW_EXPERIENCE_DATA } from '../data';

interface OverviewExperienceProps {}

type OverviewExperienceFactory = React.FC<OverviewExperienceProps> & {
  Banner: React.FC<{}>;
  Layout: React.FC<{ children: React.ReactNode }>;
  List: React.FC<{}>;
};

const OverviewExperienceBanner: OverviewExperienceFactory['Banner'] = (props) => {
  const { ...forwardedProps } = props;
  return (
    <div className="v2-overview-experience-banner" {...forwardedProps}>
      <Title className="v2-overview-experience-banner-title" h3>
        <span className="v2-overview-experience-banner-title-line-1">From Startups to</span>
        <span className="v2-overview-experience-banner-title-line-2">Titans Of Industries.</span>
      </Title>
      <Button size="xs" variant="elevated" iconRight={{ name: 'arrow-east' }}>
        See Resume
      </Button>
    </div>
  );
};

const OverviewExperienceLayout: OverviewExperienceFactory['Layout'] = (props) => {
  const { children, ...forwardedProps } = props;
  return (
    <div className="v2-overview-experience-layout" {...forwardedProps}>
      {children}
    </div>
  );
};

const OverviewExperienceList: OverviewExperienceFactory['List'] = (props) => {
  const { ...forwardedProps } = props;
  return (
    <div className="v2-overview-experience-list" {...forwardedProps}>
      {OVERVIEW_EXPERIENCE_DATA.map((item) => (
        <div className="v2-overview-experience-list-item" key={item.id}>
          <Text className="v2-overview-experience-list-item-location">
            <>{item.location}</>
          </Text>
          <Title h3 className="v2-overview-experience-list-item-title">
            <>{item.title}</>
          </Title>
          <Text className="v2-overview-experience-list-item-text">
            <>{item.text}</>
          </Text>
        </div>
      ))}
    </div>
  );
};

const OverviewExperience: OverviewExperienceFactory = ({}) => {
  return (
    <Page.Section>
      <Page.Headline id="overview-experience" order={3} title={`Experience`} />
      <OverviewExperience.Layout>
        <OverviewExperience.Banner />
        <OverviewExperience.List />
      </OverviewExperience.Layout>
    </Page.Section>
  );
};

OverviewExperience.List = OverviewExperienceList;
OverviewExperience.Layout = OverviewExperienceLayout;
OverviewExperience.Banner = OverviewExperienceBanner;
OverviewExperience.displayName = '@v2/Overview.Experience';
OverviewExperience.List.displayName = '@v2/Overview.Experience.List';
OverviewExperience.Layout.displayName = '@v2/Overview.Experience.Layout';
OverviewExperience.Banner.displayName = '@v2/Overview.Experience.Banner';

export { OverviewExperience };
