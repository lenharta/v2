import * as React from "react";

export declare namespace Core {
  interface BaseFactoryPayload {
    props: Record<string, any>;
    component: any;
    components?: Record<string, any>;
  };

  type DataAttributes = Record<`data-${string}`, any>;

  type Component<T> = T extends keyof React.JSX.IntrinsicElements ? { component?: T } : { component?: any };

  type Components<C extends Record<string, any>> = C extends Record<string, any> ? C : Record<string, never>;

  type BaseFactory<Payload extends BaseFactoryPayload> = React.FC<
   Component<Payload['component']>
    & React.ComponentPropsWithRef<Payload['component']> 
    & Payload['props']
    & DataAttributes
  > & Payload['components'];

  interface RefFactoryPayload {
    ref: any;
    props: Record<string, any>;
    component: any;
  };

  type RefFactory<Payload extends RefFactoryPayload> = React.ForwardRefExoticComponent<
    Component<Payload['component']>
    & React.RefAttributes<Payload['ref']>
    & React.ComponentPropsWithoutRef<Payload['component']>
    & Payload['props']
    & DataAttributes
  >;
}