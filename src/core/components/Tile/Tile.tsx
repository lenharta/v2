import clsx from 'clsx';
import { Factory } from '@/types';
import { factoryPolymorphic } from '@/core/factory';
import { TileProps, TileVariantProps } from './Tile.types';

type TileFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: TileProps;
}>;

function findTileVariant<T extends TileVariantProps = TileVariantProps>(props: T): keyof T {
  const keys = Object.keys(props) as (keyof T)[];
  const result = keys.find((variant) => props[variant] !== undefined);
  return result ?? 'basic';
}

const Tile = factoryPolymorphic<TileFactory>((props, ref) => {
  const {
    basic,
    clickable,
    selectable,
    optionable,
    expandable,
    component: Component = 'div',
    ...forwardedProps
  } = props;

  const variant = findTileVariant({ basic, clickable, selectable, optionable, expandable });
  console.log('variant', variant);

  return (
    <Component
      {...forwardedProps}
      ref={ref}
      className={clsx('v2-tile', `v2-tile--${variant}`)}
    ></Component>
  );
});

Tile.displayName = '@v2/Tile';
export { Tile };
