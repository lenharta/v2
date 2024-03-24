import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import {
  InlineInputLabelProps,
  InlineInputLabelRenderType,
  InlineInputLabelComponent,
} from '../types';

const defaultProps: Partial<InlineInputLabelProps> = {};

const InlineInputLabelRender: InlineInputLabelRenderType = (props, ref) => {
  const { label, className, ...otherProps } = mergeProps(defaultProps, props);
  return (
    <label
      {...otherProps}
      ref={ref}
      className={clsx('inline-input-label', className)}
      children={label}
    />
  );
};

export const InlineInputLabel = React.forwardRef(
  InlineInputLabelRender
) as InlineInputLabelComponent;

InlineInputLabel.displayName = '@v2/InlineInputLabel';
