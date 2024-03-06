import * as React from 'react';
import { Orientation } from '@/types/common';
import { mergeProps } from '@/utils';

type TileGroupElementProps = React.ComponentPropsWithoutRef<'div'>;
type TileGroupAttributeProps = React.RefAttributes<HTMLDivElement>;
type TileGroupBaseProps = TileGroupElementProps & TileGroupAttributeProps;

export interface TileGroupProps extends TileGroupBaseProps {
  orientation?: Orientation;
}

const defaultProps: Partial<TileGroupProps> = {
  orientation: 'horizontal',
};

const _TileGroup = (props: TileGroupProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { orientation, children, ...otherProps } = props;
  const _props = mergeProps({ orientation }, defaultProps);
  return (
    <div {...otherProps} ref={ref} className="Tile-group" data-orientation={_props.orientation}>
      {children}
    </div>
  );
};

export const TileGroup = React.forwardRef(_TileGroup);

TileGroup.displayName = '@v2/TileGroup';
