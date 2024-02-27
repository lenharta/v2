import clsx from 'clsx';
import * as React from 'react';
import { Orientation } from '@/types/common';

type TileGroupElementProps = React.ComponentPropsWithoutRef<'div'>;
type TileGroupAttributeProps = React.RefAttributes<HTMLDivElement>;
type TileGroupBaseProps = TileGroupElementProps & TileGroupAttributeProps;

export interface TileGroupProps extends TileGroupBaseProps {
  orientation?: Orientation;
}

const _TileGroup = (props: TileGroupProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { orientation, children, ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className="Tile-group" data-orientation={orientation}>
      {children}
    </div>
  );
};

export const TileGroup = React.forwardRef(_TileGroup);

TileGroup.displayName = '@v2/TileGroup';
