import React from 'react';
import { Factory } from '@/types';

export const factory = <Payload extends Factory.Payload>(ui: Factory.Render<Payload>) => {
  const Component = React.forwardRef(ui) as Factory.Component<Payload>;
  return Component as Factory.Component<Payload> & Factory.Components<Payload['comps']>;
};

export const createPolymorphic = <DefaultType, Props>(ui: any) => {
  type UiComponentProps<C> = Factory.PolymorphicProps<C, Props>;
  type UiComponentProperties = Omit<React.FunctionComponent<Factory.ComponentProps<any>>, never>;
  type UiPolymorphicComponent = <C = DefaultType>(props: UiComponentProps<C>) => React.ReactElement;
  type PolymorphicComponent = UiPolymorphicComponent & UiComponentProperties;
  return ui as PolymorphicComponent;
};

export const factoryPolymorphic = <Payload extends Factory.Payload>(
  ui: Factory.PolymorphicRender<Payload>
) => {
  type UiComponentProps<C> = Factory.PolymorphicProps<C, Payload['props']>;
  type UiComponentProperties = Omit<React.FunctionComponent<UiComponentProps<any>>, never>;

  type UiPolymorphicComponent = <C = Payload['comp']>(
    props: UiComponentProps<C>
  ) => React.ReactElement;

  type PolymorphicComponent = UiPolymorphicComponent & UiComponentProperties & Payload['comps'];

  const Component = React.forwardRef(ui) as unknown as PolymorphicComponent;

  return Component as PolymorphicComponent;
};
