import * as React from 'react';
import { Core } from '@/types';

export interface TileContextValue {
  type?: Core.InteractionType | undefined;
  scheme?: Core.Scheme | undefined;
  clickable?: boolean | undefined;
  selectable?: boolean | undefined;
  expandable?: boolean | undefined;
  onClick?: ((event: React.MouseEvent<HTMLDivElement>) => void) | (() => void) | undefined;
  handler?: ((event: React.MouseEvent<HTMLDivElement>) => void) | (() => void) | undefined;
}

export const TileContext = React.createContext({} as TileContextValue);
export const TileProvider = TileContext.Provider;
export const useTileContext = () => React.useContext(TileContext);

// type TileProps<C extends React.ElementType> = React.ComponentPropsWithoutRef<C> &
//   React.RefAttributes<C> & {
//     scheme?: Core.Scheme | undefined;
//     variant?: Core.InteractionType | undefined;
//     children?: React.ReactNode;
//     className?: string | undefined;
//     clickable?: boolean | undefined;
//     expandable?: boolean | undefined;
//     selectable?: boolean | undefined;
//     onClick?: React.HTMLAttributes<C>['onClick'];
//     handler?: React.HTMLAttributes<C>['onClick'];
//   };

// type PropsOf<C extends ElementType> = JSX.LibraryManagedAttributes<
//   C,
//   React.ComponentPropsWithoutRef<C>
// >;

// export function TileRender(props: ) {}

// export const Tile = React.forwardRef(
//   <C extends React.ElementType = 'div', E extends HTMLElement = HTMLDivElement>(
//     props: TileProps<C>,
//     ref: React.ForwardedRef<E>
//   ) => {
//     const { component: Component = 'div', ...otherProps } = props;
//     return <Component {...otherProps} ref={ref} />;
//   }
// );

// export interface TileBaseProps {
//   scheme?: Core.Scheme | undefined;
//   variant?: Core.InteractionType | undefined;
//   children?: React.ReactNode;
//   className?: string | undefined;
//   clickable?: boolean | undefined;
//   expandable?: boolean | undefined;
//   selectable?: boolean | undefined;
//   onClick?: React.HTMLAttributes<HTMLButtonElement>['onClick'];
//   handler?: React.HTMLAttributes<HTMLButtonElement>['onClick'];
// }

// export function TileRender<C extends React.ElementType>(
//   props: TileProps<C>,
//   ref: React.ForwardedRef<React.ComponentPropsWithRef<C>['ref']>
// ) {
//   const { component: Component = 'div', children, ...otherProps } = props;
//   return <Component {...otherProps} ref={ref} />;
// }

// export function Tile<C extends React.ElementType>(props: TileProps<C>) {
//   return React.forwardRef(TileRender)
// };

// type TileFactory = Factory.Config<{
//   ref: HTMLButtonElement;
//   comp: 'button';
//   props: TileProps;
// }>;

// export function useTileProps<C extends React.ElementType = 'div'>(
//   props: Omit<TileProps & React.ComponentPropsWithoutRef<C> & { component?: C }, 'children'>
// ) {
//   const { handler, clickable, selectable, expandable, onClick, component = 'div', ...otherProps } = props;

//   const isClickable = !!clickable;
//   const isSelectable = isClickable && !!selectable;
//   const isExpandable = isClickable && !!expandable;

//   const className = clsx(
//     'tile',
//     {
//       ['tile--clickable']: clickable,
//       ['tile--selectable']: selectable,
//       ['tile--expandable']: expandable,
//     },
//     otherProps.className
//   );

//   const handleClick = createEventCallback(onClick, (event) => {
//     if (isClickable && !isSelectable && !isExpandable) {
//       return handler?.(event);
//     }
//     if (isClickable && isSelectable && !isExpandable) {
//       return console.log('selection handler');
//     }
//     if (isClickable && !isSelectable && isExpandable) {
//       return console.log('expansion handler');
//     }
//   });

//   return {
//     component,
//     className,
//     isClickable,
//     isSelectable,
//     isExpandable,
//     onClick: handleClick,
//     ...otherProps,
//   };
// }

// export function TileRender<E extends HTMLElement, C extends React.ElementType>(
//   props: TileProps & React.ComponentPropsWithoutRef<C>,
//   ref: React.ForwardedRef<E>
// ) {
//   const { children, ...otherProps } = props;

//   const {
//     scheme,
//     variant,
//     className,
//     isClickable,
//     isExpandable,
//     isSelectable,
//     component: Component = 'div',
//     onClick,
//     ...additionalProps
//   } = useTileProps<E>(otherProps);

//   return <Component ref={ref}></Component>;
// }

// export const Tile = React.forwardRef(TileRender);

// export const Tile = factory<TileFactory>((props, ref) => {
//   const { children, ...otherProps } = props;

//   const {
//     onClick,
//     scheme,
//     variant,
//     className,
//     isClickable,
//     isExpandable,
//     isSelectable,
//     ...additionalProps
//   } = useTileProps(otherProps);

//   let Component = 'div';
//   let reference = ref as React.ForwardedRef<HTMLButtonElement>

//   return (
//     <Component {...additionalProps} role='button' ref={ref} data-scheme={scheme}>
//       {children}
//     </Component>
//   );
// });
