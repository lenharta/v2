import React from 'react';

type Component = React.FC<{}>;

const OverviewError: Component = ({}) => {
  return <div>Overview Error</div>;
};

OverviewError.displayName = '@v2/Overview.Error';
export { OverviewError };
