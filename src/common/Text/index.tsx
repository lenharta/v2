import clsx from 'clsx';
import * as React from 'react';
import { TextComponentType, TextComponentRender } from './types';

const TextRender: TextComponentRender = (props, ref) => {
  const { className, overrideTokens, ...otherProps } = props;
  const hasSize = !overrideTokens ? 'var(--font-size-body)' : undefined;
  return (
    <p
      {...otherProps}
      ref={ref}
      className={clsx('text', className)}
      style={{ fontSize: hasSize }}
    />
  );
};

export const Text = React.forwardRef(TextRender) as TextComponentType;
Text.displayName = '@v2/Text';
