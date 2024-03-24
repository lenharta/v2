import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { DividerProps, DividerComponent, DividerComponentRender } from './types';

const defaultProps: Partial<DividerProps> = {
  orientation: 'vertical',
  size: 'md',
};

const DividerRender: DividerComponentRender = (props, ref) => {
  const { size, label, accent, className, orientation, labelPosition, ...otherProps } = mergeProps(
    defaultProps,
    props
  );

  const clxss = clsx('divider', className);
  const hasSize = size !== undefined ? size : undefined;
  const hasAccent = accent !== undefined ? accent : undefined;

  return (
    <div
      {...otherProps}
      ref={ref}
      role="separator"
      className={clxss}
      data-orientation={orientation}
      aria-orientation={orientation}
    >
      <span children={label} data-position={labelPosition} className="divider-label" />
    </div>
  );
};

export const Divider = React.forwardRef(DividerRender) as DividerComponent;
Divider.displayName = '@v2/Divider';
