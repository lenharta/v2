import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import {
  InlineInputTextProps,
  InlineInputTextRenderType,
  InlineInputTextComponent,
} from '../types';

const defaultProps: Partial<InlineInputTextProps> = {};

const InlineInputTextRender: InlineInputTextRenderType = (props, ref) => {
  const { className, keepMounted, show, style, ...otherProps } = mergeProps(defaultProps, props);

  const hiddenStyles = keepMounted && !show ? { display: 'hidden' } : {};

  if (!show && !hiddenStyles) {
    return null;
  }

  return (
    <p
      {...otherProps}
      ref={ref}
      style={{ ...style, ...hiddenStyles }}
      className={clsx('inline-input-text', className)}
    />
  );
};

export const InlineInputText = React.forwardRef(InlineInputTextRender) as InlineInputTextComponent;
InlineInputText.displayName = '@v2/InlineInput.Text';
