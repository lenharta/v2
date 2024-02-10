import * as React from 'react';

export declare namespace Factory {
  interface Payload {
    ref?: any;
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
      ? Omit<
          DeepMerge<React.ComponentPropsWithoutRef<T> & React.RefAttributes<T>, P>,
          U extends keyof any ? U : never
        >
      : Omit<
          React.ComponentPropsWithoutRef<T> & React.RefAttributes<T>,
          U extends keyof any ? U : never
        >
    : {};
}

export function createFactory<FactoryPayload extends Factory.Payload>(
  ui: React.FC<
    Factory.BaseProps<
      FactoryPayload['component'],
      FactoryPayload['omittedProps'],
      FactoryPayload['props'] & {
        component?: FactoryPayload['component'];
      }
    >
  >
) {
  return ui as Factory.BaseComponents<FactoryPayload['components']> &
    React.ForwardRefExoticComponent<
      Factory.BaseProps<
        FactoryPayload['component'],
        FactoryPayload['omittedProps'],
        FactoryPayload['props'] & {
          component?: FactoryPayload['component'];
        }
      >
    >;
}

// type ComponentProp<Payload extends Factory.Payload> = { component?: Payload['component'] }
// type InputComponentProps<Payload extends Factory.Payload> =

// export declare const NavLink: React.ForwardRefExoticComponent<NavLinkProps & React.RefAttributes<HTMLAnchorElement>>;

export function createRefFactory<Payload extends Factory.Payload>(
  ui: React.ForwardRefRenderFunction<
    Payload['ref'],
    React.ComponentPropsWithoutRef<Payload['component']> &
      Payload['props'] & { component?: Payload['component'] }
  >
) {
  type ComponentProps<E extends React.ElementType = Payload['component']> =
    React.ComponentPropsWithRef<E> & Payload['props'] & { component?: Payload['component'] };

  type ComponentType = React.ForwardRefExoticComponent<ComponentProps> & Payload['components'];

  const Component = ui as unknown as ComponentType;
  return Component as ComponentType;
}
