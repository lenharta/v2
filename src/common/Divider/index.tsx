import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { DividerProps, DividerComponent, DividerComponentRender } from './types';
import { createSurfaceToken, createTokenStyle } from '../tokens';

const defaultProps: Partial<DividerProps> = {
  orientation: 'vertical',
  size: 'md',
};

const DividerRender: DividerComponentRender = (props, ref) => {
  const {
    size,
    label,
    style,
    accent,
    surface,
    className,
    orientation,
    labelPosition,
    overrideTokens,
    ...otherProps
  } = mergeProps(defaultProps, props);

  const hasSize = size !== undefined ? size : undefined;
  const hasAccent = accent !== undefined ? accent : undefined;

  const styles = React.useMemo(
    () => ({
      ...style,
      ...createTokenStyle({ key: 'divider-height', prop: 'minHeight', value: hasSize }),
    }),
    [style, hasSize]
  );

  const clxss = React.useMemo(
    () =>
      clsx(
        'divider',
        createSurfaceToken({
          level: 5,
          state: 'base',
          type: surface?.type || 'secondary',
        }),
        className
      ),
    [surface, className]
  );

  return (
    <div
      {...otherProps}
      ref={ref}
      role="separator"
      style={styles}
      className={clxss}
      data-orientation={orientation}
      aria-orientation={orientation}
    >
      <span
        children={label}
        data-position={labelPosition}
        className={clsx(
          'divider-label',
          createSurfaceToken(
            hasAccent
              ? {
                  type: surface?.type || 'secondary',
                  state: 'base',
                  level: 5,
                }
              : {
                  type: 'accent',
                  state: 'base',
                  level: 0,
                }
          )
        )}
      />
    </div>
  );
};

export const Divider = React.forwardRef(DividerRender) as DividerComponent;
Divider.displayName = '@v2/Divider';
