import clsx from 'clsx';
import * as React from 'react';
import { TextComponentType, TextRenderType } from './types';

export const TextRender: TextRenderType = (props, ref) => {
  const { size = 'md', scheme = 'primary', emphasis = 'medium', className, ...otherProps } = props;
  return (
    <p
      {...otherProps}
      ref={ref}
      className={clsx('text', className)}
      data-text-emphasis={emphasis}
      data-text-scheme={scheme}
      data-text-size={size}
    />
  );
};

export const Text = React.forwardRef(TextRender) as TextComponentType;
Text.displayName = '@v2/Text';
