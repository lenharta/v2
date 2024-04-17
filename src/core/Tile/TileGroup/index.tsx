import clsx from 'clsx';
import { factory } from '@/core/factory';
import { TileProvider } from '@/core/Tile/context';
import { Core, Factory } from '@/types';

interface TileGroupProps {
  /** Specifies the theme of the element */
  scheme?: Core.Scheme | undefined;
  /** Specifies the interaction variant for the element */
  variant?: 'default' | 'clickable' | 'selectable' | 'expandable';
  /** Indicates a `disabled` state for the element. */
  disabled?: boolean | undefined;
  /** Indicates the directional layout of the element. */
  orientation?: Core.Orientation | undefined;
}

type TileGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: TileGroupProps;
}>;

export const TileGroup = factory<TileGroupFactory>((props, ref) => {
  const {
    scheme,
    variant,
    disabled,
    className,
    orientation = 'horizontal',
    children,
    ...otherProps
  } = props;

  const a11yProps = {
    'aria-orientation': orientation,
  };

  return (
    <div {...otherProps} {...a11yProps} ref={ref} className={clsx('tile-group', className)}>
      <TileProvider value={{ disabled, scheme, variant }}>{children}</TileProvider>
    </div>
  );
});

TileGroup.displayName = '@v2/core/Tile.Group';
