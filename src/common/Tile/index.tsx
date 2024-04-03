import clsx from 'clsx';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { createEventCallback } from '@/utils';
import { TileGroup } from './Group';
import { useTileGroupContext } from './context';
import { TileComponentType, TileRenderType } from './types';

const TileRender: TileRenderType = (props, ref) => {
  const { url, style, disabled, className, ...otherProps } = props;

  const ctx = useTileGroupContext();
  const navigate = useNavigate();

  const hasDisabled = ctx.disabled || disabled;

  const accessibleProps = {
    ...(otherProps.onClick !== undefined ? { tabIndex: 0 } : {}),
    ...(hasDisabled ? { 'aria-disabled': true } : {}),
  };

  const handleClick = createEventCallback(otherProps.onClick, () => {
    if (url !== undefined && !hasDisabled) navigate(url);
  });

  return (
    <div
      {...otherProps}
      {...accessibleProps}
      ref={ref}
      onClick={handleClick}
      className={clsx('tile', className)}
    />
  );
};

export const Tile = React.forwardRef(TileRender) as TileComponentType;
Tile.Group = TileGroup;
Tile.displayName = '@v2/Tile';
