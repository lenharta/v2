import * as React from 'react';
import { Action } from '@/core';
import { DemoHero } from '../DemoHero';

type DemoActionFactory = React.FC<{}> & {
  Default: React.FC<{}>;
};

const DemoActionDefault: DemoActionFactory['Default'] = (props) => {
  const {} = props;
  return <Action icon={{ name: 'search' }} />;
};

const DemoAction: DemoActionFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <DemoHero title="Demo | Action" />
      <DemoAction.Default />
    </React.Fragment>
  );
};

DemoAction.Default = DemoActionDefault;
DemoAction.displayName = '@v2/Demo.Action';
export { DemoAction };
