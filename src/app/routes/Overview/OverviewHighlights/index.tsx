import { Page } from '@/app';
import * as React from 'react';

const OverviewHighlightItem: React.FC<{}> = ({}) => {
  return (
    <div className="v2-overview-highlights-item">
      <span>Item</span>
    </div>
  );
};

const OverviewHighlights: React.FC<{}> = ({}) => {
  return <Page.Section className="v2-overview-highlights"></Page.Section>;
};

OverviewHighlights.displayName = '@v2/Overview.Highlights';
export { OverviewHighlights };
