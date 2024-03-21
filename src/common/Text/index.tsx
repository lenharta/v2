import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { TextComponent, TextComponentRender, TextProps } from './types';

const defaultProps: Partial<TextProps> = {};

const TextRender: TextComponentRender = (props, ref) => {
  const { className, overrideTokens, ...otherProps } = mergeProps(defaultProps, props);
  const fontSize = !overrideTokens ? `var(--font-size-body)` : undefined;
  return <p {...otherProps} ref={ref} style={{ fontSize }} className={clsx('text', className)} />;
};

export const Text = React.forwardRef(TextRender) as TextComponent;
Text.displayName = '@v2/Text';
