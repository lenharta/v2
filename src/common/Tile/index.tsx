import * as React from 'react';
import { TileGroup } from './Group';

type TileElementProps = React.ComponentPropsWithoutRef<'div'>;
type TileAttributeProps = React.RefAttributes<HTMLDivElement>;
type TileBaseProps = TileElementProps & TileAttributeProps;

export interface TileProps extends TileBaseProps {}

const _Tile = (props: TileProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { children, ...otherProps } = props;

  const isInteractive = otherProps?.onClick !== undefined ? true : false;
  const isTabbed = isInteractive ? 0 : -1;

  return (
    <div
      {...otherProps}
      ref={ref}
      className="Tile"
      tabIndex={isTabbed}
      data-interactive={isInteractive}
    >
      {children}
    </div>
  );
};

export const Tile = React.forwardRef(_Tile) as React.ForwardRefExoticComponent<TileProps> & {
  Group: typeof TileGroup;
};

Tile.displayName = '@v2/Tile';
Tile.Group = TileGroup;
