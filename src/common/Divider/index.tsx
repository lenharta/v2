import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { createAccentToken, createSizeToken } from '../utils';
import { DividerProps, DividerComponent, DividerComponentRender } from './types';

const defaultProps: Partial<DividerProps> = {
  orientation: 'vertical',
  size: 'sm',
};

const DividerRender: DividerComponentRender = (props, ref) => {
  const {
    size,
    style,
    label,
    className,
    orientation,
    accentColor,
    labelPosition,
    overrideTokens,
    ...otherProps
  } = mergeProps(defaultProps, props);

  return (
    <div
      {...otherProps}
      ref={ref}
      role="separator"
      className={clsx('divider', className)}
      data-orientation={orientation}
      aria-orientation={orientation}
      style={{
        ...style,
        height: createSizeToken('divider', size),
        backgroundColor: createAccentToken(accentColor, 5),
      }}
    >
      <span
        children={label}
        className="divider-label"
        style={{ color: createAccentToken(accentColor, 5) }}
        data-position={labelPosition}
      />
    </div>
  );
};

export const Divider = React.forwardRef(DividerRender) as DividerComponent;
Divider.displayName = '@v2/Divider';
