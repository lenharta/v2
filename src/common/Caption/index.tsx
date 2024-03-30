import clsx from 'clsx';
import * as React from 'react';
import { CaptionComponent, CaptionComponentRender } from './types';

export const CaptionRender: CaptionComponentRender = (props, ref) => {
  const { className, ...otherProps } = props;
  return <caption {...otherProps} ref={ref} className={clsx('caption', className)} />;
};

export const Caption = React.forwardRef(CaptionRender) as CaptionComponent;
Caption.displayName = '@v2/Caption';
