import clsx from 'clsx';
import * as React from 'react';
import { DividerComponentType, DividerRenderType } from './types';

const DividerRender: DividerRenderType = (props, ref) => {
  const {
    size = 'sm',
    label,
    className,
    orientation = 'vertical',
    labelPosition = 'start',
    ...otherProps
  } = props;

  return (
    <div
      {...otherProps}
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      className={clsx('divider', className)}
    >
      {label && (
        <span className="divider-label" data-position={labelPosition}>
          {label}
        </span>
      )}
    </div>
  );
};

export const Divider = React.forwardRef(DividerRender) as DividerComponentType;
Divider.displayName = '@v2/Divider';
