import clsx from 'clsx';
import { Factory } from '@/types';
import { Box, factory } from '@/core';
import { TileProvider } from '../tile-context';
import { TileGroupProps } from '../tile-types';

type TileGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: TileGroupProps;
}>;

const css = {
  group: 'v2-tile-group',
};

const TileGroup = factory<TileGroupFactory>((props, ref) => {
  const {
    scheme,
    variant,
    collapse,
    behavior,
    orientation = 'horizontal',
    className,
    children,
    ...forwardedProps
  } = props;

  return (
    <Box
      ref={ref}
      component="div"
      className={clsx(
        css.group,
        {
          [`${css.group}--collapse`]: !!collapse,
        },
        className
      )}
      data-orientation={orientation}
      aria-orientation={orientation}
      {...forwardedProps}
    >
      <TileProvider
        value={{
          scheme,
          variant,
          behavior,
          orientation,
        }}
      >
        {children}
      </TileProvider>
    </Box>
  );
});

TileGroup.displayName = '@v2/Tile.Group';
export { TileGroup };
