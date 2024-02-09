export type BaseProps<T> = T extends keyof React.JSX.IntrinsicElements
  ? React.JSX.IntrinsicElements[T] & { component?: T }
  : {};

export type BasePropsWithoutRef<T, P = {}> = T extends keyof React.JSX.IntrinsicElements
  ? Omit<React.ComponentPropsWithRef<T> & P, 'ref'> & { component?: T }
  : {};

export type ExoticComponent<T extends React.ElementType, P = {}> = React.ForwardRefExoticComponent<
  BasePropsWithoutRef<T, P> & { ref?: React.ComponentPropsWithRef<T>['ref'] }
>;
