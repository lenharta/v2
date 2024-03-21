import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { useNavigate } from 'react-router-dom';
import { createEventCallback } from '../utils';

import { TileGroup } from './Group';
import { TileComponent, TileExoticRender, TileProps } from './types';

const defaultProps: Partial<TileProps> = {
  url: '/',
};

const TileRender: TileExoticRender = (props, ref) => {
  const { disabled, url, className, ...otherProps } = mergeProps(defaultProps, props);

  const isInteractive = otherProps.onClick !== undefined;
  const isDisabled = !disabled ? undefined : true;
  const isFocusable = !isInteractive ? -1 : 0;
  const isNavigable = url !== undefined;

  const navigate = useNavigate();

  const onNavigate = () => {
    if (isNavigable) navigate(url);
  };

  return (
    <div
      {...otherProps}
      ref={ref}
      tabIndex={isFocusable}
      data-disabled={isDisabled}
      aria-disabled={isDisabled}
      className={clsx('tile', className)}
      onClick={createEventCallback(otherProps.onClick, onNavigate)}
    />
  );
};

export const Tile = React.forwardRef(TileRender) as TileComponent;

Tile.Group = TileGroup;
Tile.displayName = '@v2/Tile';
