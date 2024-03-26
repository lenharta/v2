import clsx from 'clsx';
import * as React from 'react';
import { TileProvider } from '@/common/Tile/context';
import { TileGroupRenderType, TileGroupComponentType } from '@/common/Tile/types';

const TileGroupRender: TileGroupRenderType = (props, ref) => {
  const { children, className, disabled, orientation, ...otherProps } = props;

  const accessibleProps = {
    ...(disabled ? { 'aria-disabled': true } : {}),
    ...(orientation ? { 'aria-orientation': orientation } : {}),
  };

  return (
    <div {...otherProps} {...accessibleProps} className={clsx('tile-group', className)} ref={ref}>
      <TileProvider value={{ orientation }}>{children}</TileProvider>
    </div>
  );
};

export const TileGroup = React.forwardRef(TileGroupRender) as TileGroupComponentType;
TileGroup.displayName = '@v2/Tile.Group';
