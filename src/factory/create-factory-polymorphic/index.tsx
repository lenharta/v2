import * as React from 'react';
import { Factory } from '@/types';

function createPolymorphicComponent<DefaultType, Props>(ui: any) {
  type PolyProps<C> = Factory.PolymorphicProps<C, Props>;

  type FactoryProps = Omit<React.FunctionComponent<Factory.ComponentProps<any>>, never>;

  type PolyComponent = <C = DefaultType>(props: PolyProps<C>) => React.ReactElement;

  return ui as PolyComponent & FactoryProps;
}

function createPolymorphicFactory<Payload extends Factory.Payload>(
  ui: Factory.PolymorphicRender<Payload>
) {
  type PolyProps<C> = Factory.PolymorphicProps<C, Payload['props']>;

  type FactoryProps = Omit<React.FunctionComponent<PolyProps<any>>, never>;

  type PolyComponent = <C = Payload['comp']>(props: PolyProps<C>) => React.ReactElement;

  type PolymorphicComponent = PolyComponent & FactoryProps & Payload['comps'];

  return React.forwardRef(ui) as unknown as PolymorphicComponent;
}

export { createPolymorphicComponent, createPolymorphicFactory };
