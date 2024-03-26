import clsx from 'clsx';
import * as React from 'react';
import { DividerComponentType, DividerRenderType } from './types';

const DividerRender: DividerRenderType = (props, ref) => {
  const {
    size = 'sm',
    label,
    scheme = 'primary',
    labelPosition = 'start',
    orientation = 'vertical',
    className,
    ...otherProps
  } = props;

  const accessibleProps = {
    role: 'seperator',
    'aria-orientation': orientation,
  };

  const dataProps = {
    'data-divider-size': size,
    'data-divider-scheme': scheme,
    'data-divider-position': labelPosition,
  };

  return (
    <div
      {...otherProps}
      {...dataProps}
      {...accessibleProps}
      className={clsx('divider', className)}
      children={label && <p className="divider-label" role="presentation" children={label} />}
      ref={ref}
    />
  );
};

export const Divider = React.forwardRef(DividerRender) as DividerComponentType;
Divider.displayName = '@v2/Divider';
