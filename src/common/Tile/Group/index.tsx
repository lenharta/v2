import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { Orientation } from '@/types/common';
import { TileProvider, TileScheme } from '../context';

type TileGroupBaseProps = React.ComponentPropsWithoutRef<'div'>;

export interface TileGroupProps extends TileGroupBaseProps {
  orientation?: Orientation;
  scheme?: TileScheme;
}

const defaultProps: Partial<TileGroupProps> = {
  orientation: 'horizontal',
  scheme: 'default',
};

function _TileGroup(props: TileGroupProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { className, orientation, scheme, ...otherProps } = mergeProps(defaultProps, props);
  const clxss = clsx('tile-group', className);
  return (
    <TileProvider value={{ orientation, scheme }}>
      <div
        {...otherProps}
        ref={ref}
        className={clxss}
        data-orientation={orientation}
        aria-orientation={orientation}
      />
    </TileProvider>
  );
}

export const TileGroup = React.forwardRef(_TileGroup) as React.ForwardRefExoticComponent<
  TileGroupProps & React.RefAttributes<HTMLDivElement>
>;

TileGroup.displayName = '@v2/Tile.Group';
