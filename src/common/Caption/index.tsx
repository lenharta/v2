import clsx from 'clsx';
import * as React from 'react';
import { CaptionComponent, CaptionComponentRender } from './types';

export const CaptionRender: CaptionComponentRender = (props, ref) => {
  const {
    size = 'md',
    weight = '2',
    scheme = 'primary',
    emphasis = 'medium',
    className,
    ...otherProps
  } = props;
  return (
    <caption
      {...otherProps}
      ref={ref}
      className={clsx('caption', className)}
      data-caption-emphasis={emphasis}
      data-caption-weight={weight}
      data-caption-scheme={scheme}
      data-caption-size={size}
    />
  );
};

export const Caption = React.forwardRef(CaptionRender) as CaptionComponent;
Caption.displayName = '@v2/Caption';
