import clsx from 'clsx';
import { factory } from '@/core';
import { Factory } from '@/types';
import { TileGroup } from './TileGroup';
import { TileProps } from './tile-types';
import { useTileContext } from './tile-context';

type TileFactory = Factory.Config<{
  comp: 'button';
  ref: HTMLButtonElement;
  props: TileProps;
  comps: {
    Group: typeof TileGroup;
  };
}>;

const css = {
  root: 'v2-tile',
};

const Tile = factory<TileFactory>((props, ref) => {
  const { className, children, scheme, variant, behavior, ...forwardedProps } = props;

  const ctx = useTileContext();

  const contextProps = ctx
    ? {
        className: clsx(css.root, `v2-core-variant-${variant || ctx.variant}`, className),
        'data-behavior': behavior || ctx.behavior,
      }
    : {};

  return (
    <button
      ref={ref}
      className={clsx(css.root, `v2-core-variant-${variant}`, className)}
      data-behavior={behavior}
      {...forwardedProps}
      {...contextProps}
    >
      {children}
    </button>
  );
});

Tile.Group = TileGroup;
Tile.displayName = '@v2/Tile';
export { Tile };
