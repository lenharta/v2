import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import {
  CaptionProps,
  CaptionComponent,
  CaptionComponentRender,
  FindCaptionSizeToken,
} from './types';

const defaultProps: Partial<CaptionProps> = {
  size: 'md',
};

const findCaptionSizeToken: FindCaptionSizeToken = (size) => {
  if (!size) return `var(--font-size-caption-${defaultProps.size})`;
  return `var(--font-size-caption-${size})`;
};

export const CaptionRender: CaptionComponentRender = (props, ref) => {
  const { size, className, overrideTokens, ...otherProps } = mergeProps(defaultProps, props);
  const fontSize = !overrideTokens ? findCaptionSizeToken(size) : undefined;
  return (
    <caption
      {...otherProps}
      ref={ref}
      style={{ fontSize }}
      className={clsx('caption', className)}
    />
  );
};

export const Caption = React.forwardRef(CaptionRender) as CaptionComponent;
Caption.displayName = '@v2/Caption';
