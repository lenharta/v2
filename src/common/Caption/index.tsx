import clsx from 'clsx';
import * as React from 'react';
import { CaptionComponent, CaptionComponentRender } from './types';

export const CaptionRender: CaptionComponentRender = (props, ref) => {
  const { size = 'md', scheme = 'primary', emphasis = 'medium', className, ...otherProps } = props;
  return (
    <caption
      {...otherProps}
      ref={ref}
      className={clsx('caption', className)}
      data-text-emphasis={emphasis}
      data-text-scheme={scheme}
      data-text-size={size}
    />
  );
};

export const Caption = React.forwardRef(CaptionRender) as CaptionComponent;
Caption.displayName = '@v2/Caption';
