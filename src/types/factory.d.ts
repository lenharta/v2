export namespace Factory {
  export interface Payload {
    ref: any;
    comp: any;
    comps?: Record<string, any> | undefined;
    props?: Record<string, any> | undefined;
    omits?: any;
  }

  export type Config<T extends Payload> = T;

  export type Attributes<T> = T extends React.ElementType ? React.RefAttributes<T> : never;

  export type Components<Input> = Input extends Record<string, any> ? Input : Record<string, never>;

  export type Props<T, K> = T extends React.ElementType
    ? K extends keyof React.ComponentPropsWithoutRef<T>
      ? Omit<React.ComponentPropsWithoutRef<T>, K>
      : React.ComponentPropsWithoutRef<T>
    : never;

  export type FilteredProps<T extends React.ElementType, K = unknown, P = {}> = Props<T, K> & P;

  export type Render<P extends Payload> = React.ForwardRefRenderFunction<
    P['ref'],
    FilteredProps<P['comp'], P['omits'], P['props']> & {
      ref?: React.ComponentPropsWithRef<P['comp']>['ref'];
    }
  >;

  export type Component<P extends Payload> = React.ForwardRefExoticComponent<
    FilteredProps<P['comp'], P['omits'], P['props']> & {
      ref?: React.ComponentPropsWithRef<P['comp']>['ref'];
    }
  >;
}
