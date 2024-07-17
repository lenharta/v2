import * as React from 'react';
import { Factory } from '@types';

function createFactory<Payload extends Factory.Payload>(ui: Factory.Render<Payload>) {
  const Component = React.forwardRef(ui) as Factory.Component<Payload>;
  return Component as Factory.Component<Payload> & Factory.Components<Payload['comps']>;
}

export { createFactory };
