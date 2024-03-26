import clsx from 'clsx';
import * as React from 'react';
import { TextComponentType, TextRenderType } from './types';

export const TextRender: TextRenderType = (props, ref) => {
  const {
    size = 'md',
    weight = '2',
    scheme = 'primary',
    emphasis = 'high',
    className,
    ...otherProps
  } = props;
  return (
    <p
      {...otherProps}
      ref={ref}
      className={clsx('text', className)}
      data-body-size={size}
      data-body-scheme={scheme}
      data-body-weight={weight}
      data-body-emphasis={emphasis}
    />
  );
};

export const Text = React.forwardRef(TextRender) as TextComponentType;
Text.displayName = '@v2/Text';
