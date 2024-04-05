import * as React from 'react';
import { Factory } from '@/types';

export function factory<Payload extends Factory.Payload>(ui: Factory.Render<Payload>) {
  const Component = React.forwardRef(ui) as Factory.Component<Payload>;
  return Component as Factory.Component<Payload> & Factory.Components<Payload['comps']>;
}

// export declare namespace Core {
//   interface FactoryPayload {
//     ref: any;
//     comp: any;
//     comps?: Record<string, any> | undefined;
//     props?: Record<string, any> | undefined;
//     omits?: any;
//   }

//   type Factory<Payload extends FactoryPayload> = Payload;

//   type Components<Input> = Input extends Record<string, any> ? Input : Record<string, never>;

//   type Attributes<T> = T extends React.ElementType ? React.RefAttributes<T> : never;

//   type Props<T, K> = T extends React.ElementType
//     ? K extends keyof React.ComponentPropsWithoutRef<T>
//       ? Omit<React.ComponentPropsWithoutRef<T>, K>
//       : React.ComponentPropsWithoutRef<T>
//     : never;

//   type FactoryProps<T extends React.ElementType, K = unknown, P = {}> = Props<T, K> & P;

//   type FactoryRender<Payload extends FactoryPayload> = React.ForwardRefRenderFunction<
//     Payload['ref'],
//     FactoryProps<Payload['comp'], Payload['omits'], Payload['props']> & {
//       ref?: React.ComponentPropsWithRef<Payload['comp']>['ref'];
//     }
//   >;

//   type FactoryComponent<Payload extends FactoryPayload> = React.ForwardRefExoticComponent<
//     FactoryProps<Payload['comp'], Payload['omits'], Payload['props']> & {
//       ref?: React.ComponentPropsWithRef<Payload['comp']>['ref'];
//     }
//   >;
// }
