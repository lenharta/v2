import clsx from 'clsx';
import * as React from 'react';
import { factory } from '@/core/factory';
import { TileProvider } from '@/core/Tile/context';
import { Core, Factory } from '@/types';

interface TileGroupProps {
  /** Defines the interaction type of the element */
  type?: Core.InteractionType | undefined;
  /** Indicates a `disabled` state for all elements. */
  disabled?: boolean | undefined;
  /** Indicates a selecatble interaction type for all elements. */
  selectable?: boolean | undefined;
  /** Indicates a clickable interaction type for all elements. */
  clickable?: boolean | undefined;
  /** Indicates a expandable interaction type for all elements. */
  expandable?: boolean | undefined;

  scheme?: Core.Scheme | undefined;
  orientation?: Core.Orientation | undefined;
  component?: React.ElementType | undefined;
}

type TileGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: TileGroupProps;
}>;

export const TileGroup = factory<TileGroupFactory>((props, ref) => {
  const {
    type,
    scheme,
    disabled,
    className,
    clickable,
    selectable,
    expandable,
    orientation = 'horizontal',
    component,
    children,
    ...otherProps
  } = props;

  const a11yProps = {
    'aria-orientation': orientation,
  };

  return (
    <div {...otherProps} {...a11yProps} ref={ref} className={clsx('tile-group', className)}>
      <TileProvider
        value={{ scheme, clickable, component, disabled, expandable, selectable, type }}
      >
        {children}
      </TileProvider>
    </div>
  );
});

TileGroup.displayName = '@v2/core/Tile.Group';
