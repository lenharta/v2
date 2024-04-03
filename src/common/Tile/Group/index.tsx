import clsx from 'clsx';
import * as React from 'react';
import { TileGroupProvider } from '../context';
import { TileGroupRenderType, TileGroupComponentType } from '../types';

const TileGroupRender: TileGroupRenderType = (props, ref) => {
  const { children, className, disabled, orientation, ...otherProps } = props;

  const accessibleProps = {
    ...(disabled ? { 'aria-disabled': true } : {}),
    ...(orientation ? { 'aria-orientation': orientation } : {}),
  };

  return (
    <div {...otherProps} {...accessibleProps} className={clsx('tile-group', className)} ref={ref}>
      <TileGroupProvider value={{ orientation }}>{children}</TileGroupProvider>
    </div>
  );
};

export const TileGroup = React.forwardRef(TileGroupRender) as TileGroupComponentType;
TileGroup.displayName = '@v2/Tile.Group';
