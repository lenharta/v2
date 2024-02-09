export type BaseProps<T, P = {}> = T extends keyof React.JSX.IntrinsicElements
  ? React.JSX.IntrinsicElements[T] & { component?: T } & P
  : { component?: T } & P;

export type BasePropsWithoutRef<T, P = {}> = T extends keyof React.JSX.IntrinsicElements
  ? Omit<React.ComponentPropsWithRef<T> & P, 'ref'> & { component?: T }
  : {};

export type BaseComponents<T> = T extends Record<string, any> ? T : Record<string, never>;

export type CompoundComponent<
  T extends React.ElementType,
  P extends Record<string, any> = {},
  C extends Record<string, any> = {},
> = React.FC<BaseProps<T, P>> & BaseComponents<C>;

export type ExoticComponent<
  T extends React.ElementType,
  P extends Record<string, any> = {},
  C extends Record<string, any> = {},
> = React.ForwardRefExoticComponent<
  BasePropsWithoutRef<T, P> & { ref?: React.ComponentPropsWithRef<T>['ref'] }
> &
  C;
