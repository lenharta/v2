import * as React from 'react';

export declare namespace Factory {
  interface Payload {
    props?: Record<string, any>;
    component: any;
    components?: Record<string, any>;
    omittedProps?: any;
  }

  type Config<FactoryPayload extends Payload> = FactoryPayload;

  type DeepOmit<T, U> = T extends Record<string, any> ? (U extends keyof T ? Omit<T, U> : T) : T;

  type DeepMerge<T, U> = DeepOmit<T, keyof U> & U;

  type BaseProps<T, U, P = {}> = T extends React.ElementType
    ? P extends Record<string, any>
      ? Omit<DeepMerge<React.ComponentPropsWithRef<T>, P>, U extends keyof any ? U : never>
      : Omit<React.ComponentPropsWithRef<T>, U extends keyof any ? U : never>
    : {};

  type BaseComponentRef<T> = T extends React.ElementType
    ? React.ComponentPropsWithRef<T>['ref']
    : never;

  type BaseComponents<T> = T extends Record<string, any> ? T : Record<string, never>;

  type BaseRefProps<T, U, P = {}> = T extends React.ElementType
    ? P extends Record<string, any>
      ? Omit<DeepMerge<React.ComponentPropsWithoutRef<T>, P>, U extends keyof any ? U : never>
      : Omit<React.ComponentPropsWithoutRef<T>, U extends keyof any ? U : never>
    : {};
}

export function createFactory<FactoryPayload extends Factory.Payload>(
  ui: React.FC<
    Factory.BaseProps<
      FactoryPayload['component'],
      FactoryPayload['omittedProps'],
      FactoryPayload['props'] & { component?: FactoryPayload['component'] }
    >
  >
) {
  return ui as Factory.BaseComponents<FactoryPayload['components']> &
    React.ForwardRefExoticComponent<
      Factory.BaseProps<
        FactoryPayload['component'],
        FactoryPayload['omittedProps'],
        FactoryPayload['props'] & { component?: FactoryPayload['component'] }
      >
    >;
}

export function createRefFactory<FactoryPayload extends Factory.Payload>(
  ui: React.ForwardRefRenderFunction<
    Factory.BaseComponentRef<FactoryPayload['component']>,
    Factory.BaseRefProps<
      FactoryPayload['component'],
      FactoryPayload['omittedProps'],
      FactoryPayload['props'] & { component?: FactoryPayload['component'] }
    >
  >
) {
  return ui as Factory.BaseComponents<FactoryPayload['components']> &
    React.ForwardRefExoticComponent<
      Factory.BaseProps<
        FactoryPayload['component'],
        FactoryPayload['omittedProps'],
        FactoryPayload['props'] & { component?: FactoryPayload['component'] }
      >
    >;
}
