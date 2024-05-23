import React from 'react';

type Component = React.FC<{}>;

const RootError: Component = ({}) => {
  return <div>Root Error</div>;
};

RootError.displayName = '@v2/Root.Error';
export { RootError };
