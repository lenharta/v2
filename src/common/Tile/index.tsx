import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { useNavigate } from 'react-router-dom';
import { TileGroup } from './Group';
import { createEventCallback } from '../utils';
import { TileScheme, useTileCTX } from './context';

type TileBaseProps = React.ComponentPropsWithoutRef<'div'>;

export interface TileProps extends TileBaseProps {
  disabled?: boolean;
  scheme?: TileScheme;
  url?: string;
}

const defaultProps: Partial<TileProps> = {
  scheme: 'default',
  url: '/',
};

const _Tile = (props: TileProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { disabled, url, scheme, className, ...otherProps } = mergeProps(defaultProps, props);

  const ctx = useTileCTX();
  const navigate = useNavigate();
  const clxss = clsx('tile', `tile--scheme-${ctx.scheme || scheme}`, className);

  const isNavigable = url !== undefined;
  const isInteractive = otherProps.onClick !== undefined;

  return (
    <div
      ref={ref}
      {...otherProps}
      className={clxss}
      data-disabled={disabled}
      aria-disabled={disabled}
      tabIndex={!isInteractive ? -1 : 0}
      onClick={createEventCallback(otherProps.onClick, () => {
        isNavigable && navigate(url);
      })}
    />
  );
};

interface TileComponents {
  Group: typeof TileGroup;
}

export const Tile = React.forwardRef(_Tile) as TileComponents &
  React.ForwardRefExoticComponent<TileProps & React.RefAttributes<HTMLDivElement>>;

Tile.displayName = '@v2/Tile';
Tile.Group = TileGroup;
