import * as React from 'react';
import { TileGroup } from './Group';
import { mergeProps } from '@/utils';
import clsx from 'clsx';

type TileElementProps = React.ComponentPropsWithoutRef<'div'>;
type TileAttributeProps = React.RefAttributes<HTMLDivElement>;
type TileBaseProps = TileElementProps & TileAttributeProps;

export interface TileProps extends TileBaseProps {
  scheme?: 'primary' | 'secondary' | 'accent';
}

const defaultProps: Partial<TileProps> = {
  scheme: 'primary',
};

const _Tile = (props: TileProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { scheme, className, ...otherProps } = props;

  const _props = mergeProps({ scheme }, defaultProps);
  const clxss = clsx('Tile', { [`Tile--scheme-${_props.scheme}`]: _props.scheme }, className);

  const isInteractive = otherProps?.onClick !== undefined ? true : false;
  const isFocused = isInteractive ? 0 : -1;

  return (
    <div
      {...otherProps}
      ref={ref}
      className={clxss}
      tabIndex={isFocused}
      data-interactive={isInteractive}
    />
  );
};

export const Tile = React.forwardRef(_Tile) as React.ForwardRefExoticComponent<TileProps> & {
  Group: typeof TileGroup;
};

Tile.displayName = '@v2/Tile';
Tile.Group = TileGroup;
