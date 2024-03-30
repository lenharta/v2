import clsx from 'clsx';
import * as React from 'react';
import { VisuallyHiddenComponentType, VisuallyHiddenRenderType } from './types';

export const VisuallyHiddenRender: VisuallyHiddenRenderType = (props, ref) => {
  const { style, className, ...otherProps } = props;
  return (
    <div
      {...otherProps}
      ref={ref}
      className={clsx('visually-hidden', className)}
      style={{ ...style, visibility: 'hidden', position: 'absolute' }}
    />
  );
};

export const VisuallyHidden = React.forwardRef(VisuallyHiddenRender) as VisuallyHiddenComponentType;
VisuallyHidden.displayName = '@v2/VisuallyHidden';
