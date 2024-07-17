import { Page } from '@app';
import { Text, Title } from '@core';
import { OVERVIEW_STATS_DATA } from '../data';

type OverviewStatsFactory = React.FC<{}> & {};

const OverviewStats: OverviewStatsFactory = ({}) => (
  <Page.Section>
    <Page.Headline id="overview-stats" order={1} title={`Overview`} />
    <div className="v2-overview-stats-layout">
      {OVERVIEW_STATS_DATA.map((item) => (
        <div className="v2-overview-stats-card" key={item.id} id={item.id}>
          <Text className="v2-overview-stats-card-value">
            <>{item.value}</>
          </Text>
          <Title className="v2-overview-stats-card-title" h3>
            <>{item.title}</>
          </Title>
          <Text className="v2-overview-stats-card-text">
            <>{item.text}</>
          </Text>
        </div>
      ))}
    </div>
  </Page.Section>
);

OverviewStats.displayName = '@v2/Overview.Stats';
export { OverviewStats };
