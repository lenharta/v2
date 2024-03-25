import clsx from 'clsx';
import * as React from 'react';
import { TileGroup } from './Group';
import { useNavigate } from 'react-router-dom';
import { createSurface } from '@/utils';
import { createEventCallback } from '../utils';
import { TileComponent, TileExoticRender } from './types';

const TileRender: TileExoticRender = (props, ref) => {
  const { url, style, disabled, surface, className, ...otherProps } = props;

  const navigate = useNavigate();

  const isInteractive = otherProps.onClick !== undefined ? true : undefined;
  const isNavigation = url !== undefined ? true : undefined;
  const isFocusIndex = isInteractive ? -1 : 0;
  const isDisabled = !disabled ? undefined : true;

  const clxss = React.useMemo(
    () =>
      clsx(
        'tile',
        createSurface({
          type: 'primary-0' || surface?.type,
          state: (isInteractive ? 'interactive' : 'base') || surface?.state,
          disabled: isDisabled,
          elevated: true,
        }),
        className
      ),
    [style, disabled, surface]
  );

  return (
    <div
      {...otherProps}
      ref={ref}
      className={clxss}
      data-disabled={isDisabled}
      aria-disabled={isDisabled}
      tabIndex={isFocusIndex}
      onClick={createEventCallback(otherProps.onClick, () => {
        return isNavigation ? navigate(url ?? '/') : undefined;
      })}
    />
  );
};

export const Tile = React.forwardRef(TileRender) as TileComponent;

Tile.Group = TileGroup;
Tile.displayName = '@v2/Tile';
