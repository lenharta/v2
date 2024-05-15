import React from 'react';
import { OverviewError } from './error';

type Component = React.FC<{}> & {
  Error: typeof OverviewError;
};

const Overview: Component = ({}) => {
  return <div>Overview</div>;
};

Overview.displayName = '@v2/Overview';
Overview.Error = OverviewError;
export { Overview };
