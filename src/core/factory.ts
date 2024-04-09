import * as React from 'react';
import { Factory } from '@/types';

export function factory<Payload extends Factory.Payload>(ui: Factory.Render<Payload>) {
  const Component = React.forwardRef(ui) as Factory.Component<Payload>;
  return Component as Factory.Component<Payload> & Factory.Components<Payload['comps']>;
}

export function createPolymorphic<DefaultType, Props>(ui: any) {
  type UiComponentProps<C> = Factory.PolymorphicProps<C, Props>;

  type UiPolymorphicComponent = <C = DefaultType>(props: UiComponentProps<C>) => React.ReactElement;

  type UiPolymorphicProps = Omit<React.FunctionComponent<Factory.ComponentProps<any>>, never>;

  type PolymorphicComponent = UiPolymorphicComponent & UiPolymorphicProps;

  return ui as PolymorphicComponent;
}

export function factoryPolymorphic<Payload extends Factory.Payload>(
  ui: React.ForwardRefRenderFunction<Payload['ref'], Payload['props']>
) {
  type UiPolymorphicProps<C> = Factory.PolymorphicProps<C, Payload['props']>;

  type UiPolymorphicComponent = <C = Payload['comp']>(
    props: UiPolymorphicProps<C>
  ) => React.ReactElement;

  type PolymorphicComponent = UiPolymorphicComponent & Payload['comps'];

  const Component = React.forwardRef(ui) as unknown as PolymorphicComponent;

  return Component as PolymorphicComponent;
}
