import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { TileProvider } from '../context';
import { TileGroupComponent, TileGroupProps } from '../types';

const defaultProps: Partial<TileGroupProps> = {
  orientation: 'horizontal',
};

export const TileGroup: TileGroupComponent = React.forwardRef((props, ref) => {
  const { children, className, orientation, ...otherProps } = mergeProps(defaultProps, props);
  return (
    <div
      {...otherProps}
      ref={ref}
      className={clsx('tile-group', className)}
      data-orientation={orientation}
      aria-orientation={orientation}
    >
      <TileProvider value={{ orientation }}>{children}</TileProvider>
    </div>
  );
});

TileGroup.displayName = '@v2/Tile.Group';
