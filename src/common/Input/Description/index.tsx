import clsx from 'clsx';
import * as React from 'react';
import { Size } from '@/types/common';
import { ElementProps } from '@/types';

export interface InputTextProps extends ElementProps<'p'> {
  id?: string;
  size?: Size;
  text?: string;
  disabled?: boolean;
}

export const InputText = React.forwardRef<HTMLParagraphElement, InputTextProps>((props, ref) => {
  const { id, text, size, disabled, className, ...otherProps } = props;
  const clxss = clsx('input-text', `input-text--size-${size}`, className);
  return (
    <p
      {...otherProps}
      ref={ref}
      children={text}
      className={clxss}
      data-disabled={disabled}
      aria-describedby={id}
    />
  );
});

InputText.displayName = '@v2/Input.Text';
