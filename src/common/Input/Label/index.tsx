import clsx from 'clsx';
import * as React from 'react';
import { Size } from '@/types/common';
import { mergeProps } from '@/utils';

type InputLabelBaseProps = React.ComponentPropsWithoutRef<'label'>;

interface InputLabelProps extends InputLabelBaseProps {
  id?: string;
  size?: Size;
  text?: string;
  disabled?: boolean;
  descriptionId?: string;
  inputId?: string;
}

const defaultProps: Partial<InputLabelProps> = {};

const _InputLabel = (props: InputLabelProps, ref: React.ForwardedRef<HTMLLabelElement>) => {
  const { id, text, size, disabled, descriptionId, className, ...otherProps } = mergeProps(
    defaultProps,
    props
  );

  const clxss = clsx('input-label', `input-label--size-${size}`, className);

  return (
    <label
      {...otherProps}
      htmlFor={id}
      className={clxss}
      aria-describedby={descriptionId}
      data-disabled={disabled}
      children={text}
      ref={ref}
    />
  );
};

export const InputLabel = React.forwardRef(_InputLabel) as React.ForwardRefExoticComponent<
  InputLabelProps & React.RefAttributes<HTMLLabelElement>
>;

InputLabel.displayName = '@v2/Input.Label';
